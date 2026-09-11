const ICON_CHECK = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  const ICON_WARN = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>';
  const ICON_X = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  const ICON_BAG_CART = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>';
  const ICON_INFO = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';

  // Catálogo simples usado pela busca (autocomplete)
  const PRODUTOS = [
    {
      id:'galaxy-a16',
      name:'Samsung Galaxy A16 128GB',
      img:'https://horizonplay.fbitsstatic.net/img/p/smartphone-samsung-galaxy-a16-sm-a165m-dual-sim-de-128gb-4gb-ram-de-6-7-50-5-2mp-13mp-light-gray-152478/339081.jpg?w=670&h=670&v=202501231555'
    },
    {
      id:'galaxy-book-go',
      name:'Samsung Galaxy Book Go',
      img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF6fMld_D76Q135TUOcxY_WT55fPdddpoz2CCiGW16uQ-2l4sKL_Lm_xfB4ng6LVjVs_negzHs_B8CIBebFWRwb944hF-o_VS5XSPoDG32-0N-1CF_nwsgCt_-OFv042NvxNtih0E9BWY&usqp=CAc'
    },
    {
      id:'smartwatch-fem',
      name:'SmartWatch Feminino 1.83"',
      img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDHl7IGNN-c6VTKessWrzqLMX72WUH75_4E2bUFeJ4hO3MxTqA41mdZUwN_GTZT2Ot0Dv4WwpmY1N2ilcf4PkqiHlMtq92T5DcrvlVoA-Kic12PH2kKSZ5bWdzwJHIVbV1d8bzwg&usqp=CAc'
    }
  ];

  // ===== DETALHES DO PRODUTO (site demonstrativo) =====
  function abrirDetalhesProduto(e){
    // ignora clique se veio de dentro de um botão (favoritar/carrinho já têm stopPropagation, isso é reforço)
    if(e.target.closest('button')) return;
    mostrarToast(
      'Detalhes indisponíveis',
      'Este é apenas um site demonstrativo — não é possível ver os detalhes ou finalizar a compra de produtos reais.',
      'error'
    );
  }

  // ===== CARRINHO — guardado no localStorage, sobrevive a um refresh =====
  const CART_KEY = 'lastore_carrinho';

  function getCart(){
    try{
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    }catch(e){
      return [];
    }
  }

  function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
  }

  function formatarPreco(valor){
    return valor.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
  }

  function addToCart(btn){
    const id = btn.dataset.id;
    const cart = getCart();
    const existente = cart.find(item => item.id === id);

    if(existente){
      existente.qty += 1;
    } else {
      cart.push({
        id: id,
        name: btn.dataset.name,
        price: parseFloat(btn.dataset.price),
        img: btn.dataset.img,
        qty: 1
      });
    }

    saveCart(cart);

    // feedback rápido no botão clicado
    const textoOriginal = btn.innerHTML;
    btn.classList.add('added');
    btn.innerHTML = ICON_CHECK + '<span>Adicionado</span>';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = textoOriginal;
    }, 1200);
  }

  function alterarQtd(id, delta){
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if(!item) return;
    item.qty += delta;
    if(item.qty <= 0){
      saveCart(cart.filter(i => i.id !== id));
    } else {
      saveCart(cart);
    }
  }

  function removerItem(id){
    saveCart(getCart().filter(i => i.id !== id));
  }

  function renderCart(){
    const cart = getCart();
    const el = document.getElementById('cartItems');
    const summary = document.getElementById('cartSummary');
    const countBadge = document.getElementById('cartCount');

    const totalItens = cart.reduce((soma, i) => soma + i.qty, 0);
    if(totalItens > 0){
      countBadge.textContent = totalItens;
      countBadge.classList.remove('d-none');
    } else {
      countBadge.classList.add('d-none');
    }

    if(cart.length === 0){
      el.innerHTML = '<div class="cart-empty">Seu carrinho está vazio.<br>Adicione produtos para vê-los aqui.</div>';
      summary.style.display = 'none';
      return;
    }

    el.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="name">${item.name}</div>
          <div class="unit-price">${formatarPreco(item.price)} / un.</div>
          <div class="qty-control">
            <button onclick="alterarQtd('${item.id}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="alterarQtd('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removerItem('${item.id}')" title="Remover">${ICON_X}</button>
      </div>
    `).join('');

    const total = cart.reduce((soma, i) => soma + i.price * i.qty, 0);
    document.getElementById('cartTotal').textContent = formatarPreco(total);
    summary.style.display = 'block';
  }

  function finalizarCompra(){
    const cart = getCart();
    if(cart.length === 0) return;
    const total = cart.reduce((soma, i) => soma + i.price * i.qty, 0);

    salvarPedido({
      data: new Date().toISOString(),
      itens: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
      total: total
    });

    alert('Pedido confirmado! Total: ' + formatarPreco(total) + '\n\n(Essa é uma loja de demonstração — nenhum pagamento real foi processado.)');
    saveCart([]);
    bootstrap.Offcanvas.getInstance(document.getElementById('carrinho'))?.hide();
  }

  // ===== FAVORITOS (curtidos) — mesmo padrão do carrinho =====
  const FAV_KEY = 'lastore_favoritos';

  function getFavs(){
    try{
      return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
    }catch(e){
      return [];
    }
  }

  function saveFavs(favs){
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    renderFavs();
  }

  function toggleFavorito(btn){
    const id = btn.dataset.id;
    let favs = getFavs();
    const existe = favs.find(f => f.id === id);

    if(existe){
      favs = favs.filter(f => f.id !== id);
    } else {
      favs.push({
        id: id,
        name: btn.dataset.name,
        price: parseFloat(btn.dataset.price),
        img: btn.dataset.img
      });
    }

    saveFavs(favs);
    atualizarBotoesFavoritos();
  }

  function removerFavorito(id){
    saveFavs(getFavs().filter(f => f.id !== id));
    atualizarBotoesFavoritos();
  }

  function atualizarBotoesFavoritos(){
    const favs = getFavs();
    document.querySelectorAll('.fav-btn').forEach(btn => {
      const isFav = favs.some(f => f.id === btn.dataset.id);
      btn.classList.toggle('active', isFav);
    });
  }

  function renderFavs(){
    const favs = getFavs();
    const el = document.getElementById('favItems');
    const badge = document.getElementById('favCount');

    if(favs.length > 0){
      badge.textContent = favs.length;
      badge.classList.remove('d-none');
    } else {
      badge.classList.add('d-none');
    }

    if(favs.length === 0){
      el.innerHTML = '<div class="cart-empty">Você ainda não tem favoritos.<br>Toque no coração dos produtos para salvá-los aqui.</div>';
      return;
    }

    el.innerHTML = favs.map(f => `
      <div class="cart-item">
        <img src="${f.img}" alt="${f.name}">
        <div class="cart-item-info">
          <div class="name">${f.name}</div>
          <div class="unit-price">${formatarPreco(f.price)}</div>
        </div>
        <button class="cart-item-remove" onclick="removerFavorito('${f.id}')" title="Remover">${ICON_X}</button>
      </div>
    `).join('');
  }

  function enviarMensagem(e){
    e.preventDefault();
    mostrarToast('Mensagem enviada!', 'Em breve entraremos em contato.', 'success');
    e.target.reset();
    return false;
  }

  renderCart();
  renderFavs();
  atualizarBotoesFavoritos();

  // ===== BUSCA COM AUTOCOMPLETE =====
  function toggleSearch(){
    const wrap = document.getElementById('searchBarWrap');
    const btn = document.getElementById('searchToggleBtn');
    const abrindo = !wrap.classList.contains('show');
    wrap.classList.toggle('show');
    btn.classList.toggle('active');
    if(abrindo){
      document.getElementById('searchInput').focus();
    } else {
      limparBusca();
    }
  }

  function limparBusca(){
    document.getElementById('searchInput').value = '';
    const box = document.getElementById('searchSuggestions');
    box.innerHTML = '';
    box.classList.remove('show');
  }

  function handleSearchInput(){
    const termo = document.getElementById('searchInput').value.trim().toLowerCase();
    const box = document.getElementById('searchSuggestions');

    if(!termo){
      box.innerHTML = '';
      box.classList.remove('show');
      return;
    }

    const resultados = PRODUTOS.filter(p => p.name.toLowerCase().includes(termo));

    if(resultados.length === 0){
      box.innerHTML = '<div class="search-suggestion-empty">Nenhum produto encontrado para "' + termo + '".</div>';
      box.classList.add('show');
      return;
    }

    box.innerHTML = resultados.map(p => `
      <button type="button" class="search-suggestion-item" onclick="irParaProduto('${p.id}')">
        <img src="${p.img}" alt="">
        <span>${p.name}</span>
      </button>
    `).join('');
    box.classList.add('show');
  }

  function irParaProduto(id){
    const btnCarrinho = document.querySelector('.btn-cart[data-id="' + id + '"]');
    const card = btnCarrinho ? btnCarrinho.closest('.card') : null;

    const wrap = document.getElementById('searchBarWrap');
    wrap.classList.remove('show');
    document.getElementById('searchToggleBtn').classList.remove('active');
    limparBusca();

    if(card){
      setTimeout(() => {
        card.scrollIntoView({ behavior:'smooth', block:'center' });
        card.classList.add('card-highlight');
        setTimeout(() => card.classList.remove('card-highlight'), 1800);
      }, 150);
    }
  }

  // ===== TOASTS =====
  function mostrarToast(titulo, mensagem, tipo = 'success'){
    const stack = document.getElementById('toastStack');
    const toast = document.createElement('div');
    toast.className = 'app-toast' + (tipo === 'error' ? ' error' : '');
    const icone = tipo === 'error' ? ICON_WARN : (tipo === 'info' ? ICON_INFO : ICON_CHECK);
    toast.innerHTML = `
      <div class="toast-icon">${icone}</div>
      <div class="toast-body-text">
        ${titulo}
        <small>${mensagem}</small>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">${ICON_X}</button>
    `;
    stack.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 4500);
  }

  // ===== MOSTRAR / OCULTAR SENHA =====
  function toggleVisibility(inputId, btn){
    const input = document.getElementById(inputId);
    const eyeOpen = btn.querySelector('.eye-open');
    const eyeClosed = btn.querySelector('.eye-closed');
    if(input.type === 'password'){
      input.type = 'text';
      eyeOpen.classList.add('d-none');
      eyeClosed.classList.remove('d-none');
    } else {
      input.type = 'password';
      eyeOpen.classList.remove('d-none');
      eyeClosed.classList.add('d-none');
    }
  }

  // ===== AUTH: LOGIN <-> CADASTRO NO MESMO OFFCANVAS =====
  // Antes, login e cadastro eram dois <offcanvas> separados, e o link
  // "Criar conta grátis" tentava fechar um (hide) e abrir o outro (show)
  // em seguida. Isso causa uma condição de corrida conhecida do Bootstrap
  // (o backdrop de um offcanvas conflita com o do outro), e o resultado
  // era o painel simplesmente fechar sem nunca abrir o cadastro.
  // Agora existe um único offcanvas com duas "views" internas, então
  // trocar de login para cadastro é só esconder/mostrar divs — nada de
  // Bootstrap show/hide, então não tem corrida nem fechamento indevido.
  function mostrarAuthView(view){
    const loginView = document.getElementById('loginView');
    const cadastroView = document.getElementById('cadastroView');

    if(view === 'cadastro'){
      loginView.classList.add('d-none');
      cadastroView.classList.remove('d-none');
      document.getElementById('cadNome')?.focus();
    } else {
      cadastroView.classList.add('d-none');
      loginView.classList.remove('d-none');
      document.getElementById('loginEmail')?.focus();
    }
  }

  function abrirAuth(view){
    mostrarAuthView(view);
    const offcanvasEl = document.getElementById('authOffcanvas');
    bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl).show();
  }

  function fecharAuth(){
    bootstrap.Offcanvas.getInstance(document.getElementById('authOffcanvas'))?.hide();
  }

  // ===== VALIDAÇÃO DE SENHA FORTE =====
  // Regras: mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número, 1 caractere especial
  function checarRegrasSenha(senha){
    return {
      len: senha.length >= 8,
      upper: /[A-Z]/.test(senha),
      lower: /[a-z]/.test(senha),
      number: /[0-9]/.test(senha),
      special: /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\/;']/.test(senha)
    };
  }

  function senhaEhForte(senha){
    const r = checarRegrasSenha(senha);
    return r.len && r.upper && r.lower && r.number && r.special;
  }

  function atualizarForcaSenha(){
    const senha = document.getElementById('cadSenha').value;
    const regras = checarRegrasSenha(senha);

    const mapa = [
      ['ruleLen', regras.len],
      ['ruleUpper', regras.upper],
      ['ruleLower', regras.lower],
      ['ruleNumber', regras.number],
      ['ruleSpecial', regras.special]
    ];

    let pontos = 0;
    mapa.forEach(([id, ok]) => {
      const li = document.getElementById(id);
      const icon = li.querySelector('.rule-icon');
      if(ok){
        li.classList.add('ok');
        icon.textContent = '✓';
        pontos++;
      } else {
        li.classList.remove('ok');
        icon.textContent = '○';
      }
    });

    const bars = [
      document.getElementById('bar1'),
      document.getElementById('bar2'),
      document.getElementById('bar3'),
      document.getElementById('bar4')
    ];
    const label = document.getElementById('pwdStrengthLabel');

    let corBarra = '#e2e8f0';
    let textoLabel = 'Digite uma senha';
    let corLabel = '#94a3b8';
    let barrasAtivas = 0;

    if(senha.length === 0){
      barrasAtivas = 0;
    } else if(pontos <= 2){
      barrasAtivas = 1;
      corBarra = 'var(--danger)';
      textoLabel = 'Senha fraca';
      corLabel = 'var(--danger)';
    } else if(pontos === 3){
      barrasAtivas = 2;
      corBarra = 'var(--warning)';
      textoLabel = 'Senha razoável';
      corLabel = 'var(--warning)';
    } else if(pontos === 4){
      barrasAtivas = 3;
      corBarra = '#3b82f6';
      textoLabel = 'Senha boa';
      corLabel = '#3b82f6';
    } else if(pontos === 5){
      barrasAtivas = 4;
      corBarra = 'var(--success)';
      textoLabel = 'Senha forte';
      corLabel = 'var(--success)';
    }

    bars.forEach((bar, i) => {
      bar.style.background = i < barrasAtivas ? corBarra : '#e2e8f0';
    });
    label.textContent = textoLabel;
    label.style.color = corLabel;

    validarConfirmacao();
    return senhaEhForte(senha);
  }

  function validarConfirmacao(){
    const senha = document.getElementById('cadSenha').value;
    const confirm = document.getElementById('cadSenhaConfirm').value;
    const input = document.getElementById('cadSenhaConfirm');
    const erro = document.getElementById('cadConfirmError');

    if(confirm.length === 0){
      input.classList.remove('is-invalid-custom', 'is-valid-custom');
      erro.classList.remove('show');
      return null;
    }

    if(senha !== confirm){
      input.classList.add('is-invalid-custom');
      input.classList.remove('is-valid-custom');
      erro.classList.add('show');
      return false;
    } else {
      input.classList.remove('is-invalid-custom');
      input.classList.add('is-valid-custom');
      erro.classList.remove('show');
      return true;
    }
  }

  // ===== ESTADO DE LOGIN =====
  let isLoggedIn = false;
  let usuarioAtual = { nome: '', nomeCompleto: '', email: '' };

  // Conta cadastrada, salva no localStorage (mesmo padrão do carrinho/favoritos).
  // Site de demonstração: guarda só a última conta criada, sem senha real.
  const USER_KEY = 'lastore_usuario';

  function salvarUsuarioCadastrado(nomeCompleto, email){
    localStorage.setItem(USER_KEY, JSON.stringify({ nomeCompleto, email }));
  }

  function getUsuarioCadastrado(){
    try{
      return JSON.parse(localStorage.getItem(USER_KEY));
    }catch(e){
      return null;
    }
  }

  // Histórico de pedidos, salvo a cada compra finalizada
  const ORDERS_KEY = 'lastore_pedidos';

  function getPedidos(){
    try{
      return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
    }catch(e){
      return [];
    }
  }

  function salvarPedido(pedido){
    const pedidos = getPedidos();
    pedidos.unshift(pedido); // mais recente primeiro
    localStorage.setItem(ORDERS_KEY, JSON.stringify(pedidos));
  }

  function formatarDataPedido(iso){
    const d = new Date(iso);
    const data = d.toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' });
    const hora = d.toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' });
    return `${data} às ${hora}`;
  }

  // ===== ABA "MINHA CONTA" =====
  function abrirMinhaConta(){
    renderMinhaConta();
    fecharMenu();
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('minhaConta')).show();
  }

  function renderMinhaConta(){
    const el = document.getElementById('minhaContaBody');
    const pedidos = getPedidos();
    const nomeCompleto = usuarioAtual.nomeCompleto || usuarioAtual.nome;
    const iniciais = (usuarioAtual.nome || '').substring(0, 2).toUpperCase();

    const pedidosHtml = pedidos.length === 0
      ? '<div class="cart-empty">Você ainda não fez nenhuma compra.<br>Seus pedidos aparecerão aqui.</div>'
      : pedidos.map(p => `
          <div class="order-card">
            <div class="order-card-header">
              <span class="order-date">${formatarDataPedido(p.data)}</span>
              <span class="order-total">${formatarPreco(p.total)}</span>
            </div>
            <div class="order-items">
              ${p.itens.map(i => `
                <div class="order-item-row">
                  <span>${i.qty}x ${i.name}</span>
                  <span>${formatarPreco(i.price * i.qty)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('');

    el.innerHTML = `
      <div class="account-header">
        <div class="avatar avatar-lg">${iniciais}</div>
        <div>
          <div class="account-name">${nomeCompleto}</div>
          <div class="account-email">${usuarioAtual.email}</div>
        </div>
      </div>

      <div class="account-section">
        <div class="account-section-title">Dados cadastrados</div>
        <div class="account-field">
          <span class="account-field-label">Nome completo</span>
          <span class="account-field-value">${nomeCompleto}</span>
        </div>
        <div class="account-field">
          <span class="account-field-label">E-mail</span>
          <span class="account-field-value">${usuarioAtual.email}</span>
        </div>
      </div>

      <div class="account-section account-orders">
        <div class="account-section-title">Histórico de compras</div>
        <div class="account-orders-list">
          ${pedidosHtml}
        </div>
      </div>
    `;
  }

  // ===== MENU LATERAL (hambúrguer) =====
  function abrirMenu(){
    atualizarMenu();
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('menuLateral')).show();
  }

  function fecharMenu(){
    bootstrap.Offcanvas.getInstance(document.getElementById('menuLateral'))?.hide();
  }

  function irParaSecao(e, id){
    e.preventDefault();
    fecharMenu();
    const secao = document.getElementById(id);
    if(!secao) return false;
    // pequeno atraso para o offcanvas terminar de fechar antes de rolar
    setTimeout(() => {
      secao.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 280);
    return false;
  }

  function atualizarMenu(){
    const userInfoEl = document.getElementById('menuUserInfo');
    const authAreaEl = document.getElementById('menuAuthArea');
    const logoutAreaEl = document.getElementById('menuLogoutArea');

    if(isLoggedIn){
      const iniciais = usuarioAtual.nome.substring(0, 2).toUpperCase();
      userInfoEl.innerHTML = `
        <div class="menu-user-info">
          <div class="avatar">${iniciais}</div>
          <div>
            <div style="font-weight:700;color:var(--primary);">${usuarioAtual.nome}</div>
            <small style="color:var(--text);">Minha conta</small>
          </div>
        </div>
      `;
      authAreaEl.innerHTML = `
        <a href="#" class="menu-link" onclick="abrirMinhaConta(); return false;">Dados da conta</a>
      `;
      logoutAreaEl.innerHTML = `
        <button class="btn-logout" onclick="logoutUsuario()">Sair</button>
      `;
    } else {
      userInfoEl.innerHTML = `<span style="font-weight:800;color:var(--primary);">Menu</span>`;
      authAreaEl.innerHTML = `
        <button class="btn btn-primary btn-menu-auth" onclick="fecharMenu(); abrirAuth('login');">Login</button>
        <button class="btn btn-outline-secondary btn-menu-auth" onclick="fecharMenu(); abrirAuth('cadastro');">Cadastre-se</button>
      `;
      logoutAreaEl.innerHTML = '';
    }
  }

  function logoutUsuario(){
    isLoggedIn = false;
    usuarioAtual = { nome: '', nomeCompleto: '', email: '' };
    fecharMenu();
    mostrarToast('Você saiu', 'Até logo! Sua sessão foi encerrada.', 'success');
  }

  atualizarMenu();

  // ===== LOGIN =====
  function handleLogin(e){
    e.preventDefault();

    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    const emailErro = document.getElementById('loginEmailError');
    const passErro = document.getElementById('loginPasswordError');

    let valido = true;

    if(!emailInput.value || !emailInput.checkValidity()){
      emailInput.classList.add('is-invalid-custom');
      emailErro.classList.add('show');
      valido = false;
    } else {
      emailInput.classList.remove('is-invalid-custom');
      emailErro.classList.remove('show');
    }

    if(!passInput.value){
      passInput.classList.add('is-invalid-custom');
      passErro.classList.add('show');
      valido = false;
    } else {
      passInput.classList.remove('is-invalid-custom');
      passErro.classList.remove('show');
    }

    if(!valido) return false;

    // Simulação de autenticação (não há backend neste demo).
    // Se o e-mail digitado bate com a conta cadastrada, usa o nome
    // completo real; senão, cai no comportamento simulado de antes.
    const emailDigitado = emailInput.value.trim();
    const cadastrado = getUsuarioCadastrado();

    isLoggedIn = true;

    if(cadastrado && cadastrado.email.toLowerCase() === emailDigitado.toLowerCase()){
      usuarioAtual.nomeCompleto = cadastrado.nomeCompleto;
      usuarioAtual.nome = cadastrado.nomeCompleto.split(' ')[0];
    } else {
      usuarioAtual.nomeCompleto = emailDigitado.split('@')[0];
      usuarioAtual.nome = usuarioAtual.nomeCompleto;
    }
    usuarioAtual.email = emailDigitado;

    atualizarMenu();

    fecharAuth();
    e.target.reset();

    mostrarToast('Login efetuado com sucesso!', `Bem-vindo(a) de volta, ${usuarioAtual.nome}.`, 'success');

    return false;
  }

  // ===== CADASTRO =====
  function handleCadastro(e){
    e.preventDefault();

    const nome = document.getElementById('cadNome');
    const email = document.getElementById('cadEmail');
    const senha = document.getElementById('cadSenha');
    const confirm = document.getElementById('cadSenhaConfirm');
    const termos = document.getElementById('aceitarTermos');

    let valido = true;

    if(!nome.value.trim()){
      nome.classList.add('is-invalid-custom');
      document.getElementById('cadNomeError').classList.add('show');
      valido = false;
    } else {
      nome.classList.remove('is-invalid-custom');
      document.getElementById('cadNomeError').classList.remove('show');
    }

    if(!email.value || !email.checkValidity()){
      email.classList.add('is-invalid-custom');
      document.getElementById('cadEmailError').classList.add('show');
      valido = false;
    } else {
      email.classList.remove('is-invalid-custom');
      document.getElementById('cadEmailError').classList.remove('show');
    }

    // Não permite senha fraca — precisa cumprir todas as regras
    if(!senhaEhForte(senha.value)){
      senha.classList.add('is-invalid-custom');
      valido = false;
      mostrarToast('Senha muito fraca', 'Sua senha precisa atender a todos os requisitos de segurança listados abaixo do campo.', 'error');
    } else {
      senha.classList.remove('is-invalid-custom');
    }

    if(validarConfirmacao() !== true){
      valido = false;
    }

    if(!termos.checked){
      valido = false;
      mostrarToast('Termos de uso', 'É necessário aceitar os Termos de Uso para continuar.', 'error');
    }

    if(!valido) return false;

    // Salva a conta (mesmo padrão do carrinho/favoritos) e manda a
    // pessoa pra tela de login, em vez de logar automaticamente.
    const nomeCompleto = nome.value.trim();
    const emailCadastrado = email.value.trim();
    salvarUsuarioCadastrado(nomeCompleto, emailCadastrado);

    const primeiroNome = nomeCompleto.split(' ')[0];

    e.target.reset();
    atualizarForcaSenha();

    mostrarAuthView('login');
    const loginEmailInput = document.getElementById('loginEmail');
    if(loginEmailInput) loginEmailInput.value = emailCadastrado;

    mostrarToast('Conta criada com sucesso!', `Bem-vindo(a), ${primeiroNome}. Agora faça login pra continuar.`, 'success');

    return false;
  }