# LaStore — Backend Django

Este é o mesmo site LaStore que você já tinha (HTML/CSS/JS), agora com um
back-end real em Django + Django REST Framework por trás. O visual continua
idêntico — o que mudou foi de onde os dados vêm.

## O que mudou em relação à versão anterior (estática)

| Antes (localStorage)                          | Agora (Django)                                  |
|------------------------------------------------|--------------------------------------------------|
| Cadastro/login fake, aceitava qualquer coisa    | Conta real, senha com hash, sessão do Django      |
| Só "a última conta" cadastrada no navegador     | Cada pessoa tem sua própria conta no banco        |
| Favoritos só no navegador de quem favoritou     | Favoritos por usuário, salvos no banco            |
| Histórico de pedidos só no navegador            | Pedidos salvos no banco, por usuário              |
| Produtos escritos direto no HTML                | Produtos no banco, editáveis pelo /admin          |
| Qualquer um edita o carrinho no DevTools        | Servidor valida tudo antes de gravar o pedido     |

O carrinho de compras **continua no navegador** (localStorage) até a pessoa
finalizar a compra — é assim que a maioria das lojas reais faz, não precisa
de conta só pra colocar coisas no carrinho, só pra fechar o pedido.

## Estrutura de pastas

```
lastore_backend/
├── manage.py
├── requirements.txt
├── db.sqlite3                 # criado depois do migrate
├── lastore_backend/           # configuração do projeto
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py / asgi.py
├── loja/                      # app principal
│   ├── models.py              # Produto, Favorito, Pedido, ItemPedido
│   ├── serializers.py         # conversão model <-> JSON
│   ├── views.py                # a página + os endpoints da API
│   ├── urls.py                 # rotas de /api/...
│   ├── admin.py                # painel administrativo
│   └── fixtures/produtos.json  # os 5 produtos que já existiam no seu HTML
├── templates/
│   └── index.html              # seu HTML, com {% for produto in produtos %}
└── static/
    ├── css/style.css           # idêntico ao que você já tinha
    └── js/script.js            # agora fala com a API em vez do localStorage
```

## Passo a passo pra rodar

### 1. Crie um ambiente virtual (recomendado)

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

### 2. Instale as dependências

```bash
pip install -r requirements.txt
```

### 3. Crie as migrações do app `loja` e o banco de dados

```bash
python manage.py makemigrations loja
python manage.py migrate
```

O `makemigrations` gera os arquivos que descrevem as tabelas de `Produto`,
`Favorito`, `Pedido` e `ItemPedido` a partir do `models.py`. O `migrate`
aplica isso (e as tabelas padrão do Django, como usuários) no banco,
criando o arquivo `db.sqlite3`.

### 4. Carregue os produtos que já existiam no seu site

```bash
python manage.py loaddata produtos
```

Isso popula o banco com os mesmos 5 produtos que estavam no seu `index.html`
(Galaxy A16, Galaxy Book Go, SmartWatch, Fone Bluetooth, Notebook Ultra Slim).

### 5. Crie um usuário administrador (pra acessar o /admin)

```bash
python manage.py createsuperuser
```

Vai pedir usuário, e-mail e senha — use esses dados pra entrar em
`/admin` depois.

### 6. Rode o servidor

```bash
python manage.py runserver
```

Acesse **http://127.0.0.1:8000/** — o site deve aparecer exatamente como
antes, mas agora com cadastro/login/favoritos/pedidos de verdade.

O painel administrativo fica em **http://127.0.0.1:8000/admin/** — lá dá pra
adicionar/editar/remover produtos sem mexer em código, e ver todos os
pedidos e usuários cadastrados.

## Testando o fluxo

1. Abra o site, clique no menu (☰) → "Cadastre-se", crie uma conta
2. Você será redirecionado pra tela de login (com o e-mail já preenchido)
3. Faça login com a senha que você acabou de criar
4. Favorite um produto (♥) e adicione outro ao carrinho
5. Finalize a compra
6. Abra o menu → "Dados da conta" — deve aparecer seu nome, e-mail e o
   pedido que você acabou de fazer
7. Dê F5 na página — repare que você continua logado (a sessão é real
   agora, não é mais um truque do navegador)

## Endpoints da API (se quiser inspecionar)

| Método | Rota                        | O que faz                              |
|--------|------------------------------|-----------------------------------------|
| GET    | `/api/produtos/`             | Lista todos os produtos                 |
| POST   | `/api/auth/registro/`        | Cria uma conta                          |
| POST   | `/api/auth/login/`           | Autentica e cria sessão                 |
| POST   | `/api/auth/logout/`          | Encerra a sessão                        |
| GET    | `/api/auth/me/`              | Diz se há sessão ativa e quem é         |
| GET    | `/api/favoritos/`            | Lista favoritos do usuário logado       |
| POST   | `/api/favoritos/`            | Favorita um produto (`produto_id`)      |
| DELETE | `/api/favoritos/<produto_id>/` | Desfavorita                           |
| GET    | `/api/pedidos/`              | Histórico de compras do usuário logado  |
| POST   | `/api/pedidos/`              | Registra um pedido finalizado           |

## Antes de colocar em produção

Este projeto está configurado pra **desenvolvimento local**. Antes de
publicar de verdade, você precisa:

1. Trocar `SECRET_KEY` em `settings.py` por uma chave nova e secreta:
   ```bash
   python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
   ```
2. Colocar `DEBUG = False`
3. Preencher `ALLOWED_HOSTS` com o domínio real
4. Trocar o banco SQLite por PostgreSQL (mais robusto pra produção)
5. Rodar `python manage.py collectstatic` e servir os arquivos estáticos
   por um servidor de verdade (nginx, WhiteNoise, etc.)
6. Hospedar em algo como Render, Railway, PythonAnywhere ou uma VPS com
   Gunicorn + nginx

Se quiser ajuda com o deploy quando chegar nessa etapa, é só chamar.
