const ICON_CHECK = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  const ICON_WARN = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>';
  const ICON_X = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  const ICON_BAG_CART = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>';
  const ICON_INFO = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';

  // ===== IDIOMA (i18n) =====
  // Dicionário central de textos da interface. Cada chave é usada em um ou
  // mais elementos via atributo data-i18n (texto) ou data-i18n-placeholder
  // (placeholder de input). Nomes de produtos e o conteúdo vindo do banco
  // de dados (via Django) não são traduzidos aqui — isso exigiria i18n no
  // backend (ex: django.utils.translation) ou campos traduzidos no modelo.
  const IDIOMA_KEY = 'lastore_idioma';
  const BANDEIRAS_IDIOMA = { 'pt-br': '🇧🇷', 'en': '🇺🇸', 'es': '🇪🇸' };
  const CODIGOS_IDIOMA = { 'pt-br': 'BR', 'en': 'EN', 'es': 'ES' };

  const TRADUCOES = {
    'pt-br': {
      nav_home: 'Início', nav_products: 'Produtos', nav_contact: 'Contato',
      search_placeholder: 'Buscar produtos...',
      hero_title: 'Tecnologia para o seu dia a dia',
      hero_subtitle: 'Os melhores smartphones, notebooks e acessórios com preços competitivos e entrega rápida para todo o Brasil.',
      hero_cta: 'Ver Produtos',
      products_title: 'Produtos em Destaque',
      offers_title: 'Ofertas do Dia',
      offers_subtitle: 'Arraste para o lado e confira os destaques de hoje.',
      offer_badge: 'Oferta do dia',
      cat_placeholder: 'Qual produto procura?', cat_all: 'Todos os produtos',
      cat_notebook: 'Notebook', cat_celular: 'Celular', cat_fone: 'Fone', cat_smartwatch: 'SmartWatch',
      add_to_cart: 'Adicionar ao Carrinho', added_to_cart: 'Adicionado',
      no_products_in_category: 'Nenhum produto encontrado nessa categoria.',
      no_search_results: 'Nenhum produto encontrado para "{termo}".',
      contact_title: 'Central de Atendimento',
      contact_heading: 'Fale Conosco',
      contact_intro: 'Estamos prontos para ajudar você a encontrar os melhores produtos de tecnologia.',
      support_title: 'Suporte',
      support_intro: 'Respostas rápidas para as dúvidas mais comuns. Não encontrou o que precisava? Fale com a gente pelo WhatsApp ao lado.',
      faq_shipping_q: 'Qual o prazo de entrega?',
      faq_shipping_a: 'O prazo médio é de 3 a 7 dias úteis, variando conforme a sua região. Você recebe o código de rastreio assim que o pedido é despachado.',
      faq_returns_q: 'Como funciona a troca ou devolução?',
      faq_returns_a: 'Você tem até 7 dias corridos após o recebimento para solicitar troca ou devolução, sem custo adicional, desde que o produto esteja na embalagem original.',
      faq_payment_q: 'Quais formas de pagamento vocês aceitam?',
      faq_payment_a: 'Aceitamos cartão de crédito em até 12x, Pix e boleto bancário. Pix e boleto têm aprovação mais rápida.',
      faq_warranty_q: 'Os produtos têm garantia?',
      faq_warranty_a: 'Sim, todos os produtos têm garantia mínima de 12 meses contra defeitos de fabricação, além da garantia legal do fabricante.',
      faq_tracking_q: 'Como acompanho meu pedido?',
      faq_tracking_a: 'Acesse "Minha Conta" e consulte o status atualizado dos seus pedidos, do processamento até a entrega.',
      name_placeholder: 'Seu nome',
      footer_tagline: 'Sua loja online de tecnologia.',
      footer_copyright: '©️ 2026 LaStore - Todos os direitos reservados.',
      cart_title: 'Seu Carrinho',
      cart_empty: 'Seu carrinho está vazio.<br>Adicione produtos para vê-los aqui.',
      cart_total_label: 'Total', checkout_button: 'Finalizar Compra', per_unit: '/ un.',
      fav_title: 'Meus Favoritos',
      fav_empty: 'Você ainda não tem favoritos.<br>Toque no coração dos produtos para salvá-los aqui.',
      account_title: 'Minha Conta', account_data_section: 'Dados cadastrados',
      account_orders_section: 'Histórico de compras',
      account_no_orders: 'Você ainda não fez nenhuma compra.<br>Seus pedidos aparecerão aqui.',
      menu_label: 'Menu', menu_my_account_small: 'Minha conta', account_link: 'Dados da conta',
      login_button_menu: 'Login', signup_button_menu: 'Cadastre-se', logout_button: 'Sair',
      lang_label: 'Idioma',
      login_title: 'Bem-vindo de volta', login_subtitle: 'Acesse sua conta para continuar',
      email_label: 'E-mail', email_placeholder: 'seuemail@exemplo.com',
      password_label: 'Senha', password_placeholder: 'Sua senha',
      error_email_invalid: 'Informe um e-mail válido.', error_password_required: 'Informe sua senha.',
      remember_me: 'Lembrar-me', forgot_password: 'Esqueceu a senha?', login_button: 'Entrar',
      new_here_divider: 'novo por aqui?', no_account_text: 'Ainda não tem conta?',
      create_account_link: 'Criar conta grátis',
      signup_title: 'Criar minha conta', signup_subtitle: 'Leva menos de um minuto',
      fullname_label: 'Nome completo', confirm_password_label: 'Confirmar senha',
      password_create_placeholder: 'Crie uma senha forte', password_confirm_placeholder: 'Repita a senha',
      error_name_required: 'Informe seu nome.', error_password_mismatch: 'As senhas não coincidem.',
      terms_text: 'Li e aceito os Termos de Uso e a Política de Privacidade',
      signup_button: 'Criar conta', has_account_text: 'Já tem conta?', login_link: 'Fazer login',
      rule_min_length: 'Mínimo de 8 caracteres', rule_uppercase: 'Uma letra maiúscula',
      rule_lowercase: 'Uma letra minúscula', rule_number: 'Um número',
      rule_special: 'Um caractere especial (!@#$%...)',
      password_strength_default: 'Digite uma senha', password_strength_weak: 'Senha fraca',
      password_strength_fair: 'Senha razoável', password_strength_good: 'Senha boa',
      password_strength_strong: 'Senha forte'
    },
    'en': {
      nav_home: 'Home', nav_products: 'Products', nav_contact: 'Contact',
      search_placeholder: 'Search products...',
      hero_title: 'Technology for your everyday life',
      hero_subtitle: 'The best smartphones, laptops and accessories at competitive prices, with fast delivery across Brazil.',
      hero_cta: 'View Products',
      products_title: 'Featured Products',
      offers_title: 'Deals of the Day',
      offers_subtitle: "Drag sideways to browse today's picks.",
      offer_badge: 'Deal of the day',
      cat_placeholder: 'What product are you looking for?', cat_all: 'All products',
      cat_notebook: 'Laptop', cat_celular: 'Phone', cat_fone: 'Headphones', cat_smartwatch: 'SmartWatch',
      add_to_cart: 'Add to Cart', added_to_cart: 'Added',
      no_products_in_category: 'No products found in this category.',
      no_search_results: 'No products found for "{termo}".',
      contact_title: 'Customer Support',
      contact_heading: 'Get in Touch',
      contact_intro: "We're ready to help you find the best tech products.",
      support_title: 'Support',
      support_intro: "Quick answers to the most common questions. Didn't find what you needed? Reach us on WhatsApp.",
      faq_shipping_q: 'What is the delivery time?',
      faq_shipping_a: "Average delivery time is 3 to 7 business days, depending on your region. You'll get a tracking code as soon as the order ships.",
      faq_returns_q: 'How do exchanges and returns work?',
      faq_returns_a: 'You have up to 7 calendar days after delivery to request an exchange or return, at no extra cost, as long as the item is in its original packaging.',
      faq_payment_q: 'What payment methods do you accept?',
      faq_payment_a: 'We accept credit cards in up to 12 installments, plus instant bank transfer and bank slip, which are approved faster.',
      faq_warranty_q: 'Do the products come with a warranty?',
      faq_warranty_a: "Yes, every product comes with a minimum 12-month warranty against manufacturing defects, in addition to the manufacturer's legal warranty.",
      faq_tracking_q: 'How can I track my order?',
      faq_tracking_a: 'Go to "My Account" to check the live status of your orders, from processing to delivery.',
      name_placeholder: 'Your name',
      footer_tagline: 'Your online tech store.',
      footer_copyright: '©️ 2026 LaStore - All rights reserved.',
      cart_title: 'Your Cart',
      cart_empty: 'Your cart is empty.<br>Add products to see them here.',
      cart_total_label: 'Total', checkout_button: 'Checkout', per_unit: '/ each',
      fav_title: 'My Favorites',
      fav_empty: "You don't have any favorites yet.<br>Tap the heart on products to save them here.",
      account_title: 'My Account', account_data_section: 'Account details',
      account_orders_section: 'Order history',
      account_no_orders: "You haven't placed any orders yet.<br>Your orders will appear here.",
      menu_label: 'Menu', menu_my_account_small: 'My account', account_link: 'Account details',
      login_button_menu: 'Log in', signup_button_menu: 'Sign up', logout_button: 'Log out',
      lang_label: 'Language',
      login_title: 'Welcome back', login_subtitle: 'Sign in to your account to continue',
      email_label: 'Email', email_placeholder: 'youremail@example.com',
      password_label: 'Password', password_placeholder: 'Your password',
      error_email_invalid: 'Enter a valid email.', error_password_required: 'Enter your password.',
      remember_me: 'Remember me', forgot_password: 'Forgot your password?', login_button: 'Log In',
      new_here_divider: 'new here?', no_account_text: "Don't have an account?",
      create_account_link: 'Create a free account',
      signup_title: 'Create my account', signup_subtitle: 'It takes less than a minute',
      fullname_label: 'Full name', confirm_password_label: 'Confirm password',
      password_create_placeholder: 'Create a strong password', password_confirm_placeholder: 'Repeat the password',
      error_name_required: 'Enter your name.', error_password_mismatch: "Passwords don't match.",
      terms_text: "I've read and accept the Terms of Use and Privacy Policy",
      signup_button: 'Create Account', has_account_text: 'Already have an account?', login_link: 'Log in',
      rule_min_length: 'At least 8 characters', rule_uppercase: 'One uppercase letter',
      rule_lowercase: 'One lowercase letter', rule_number: 'One number',
      rule_special: 'One special character (!@#$%...)',
      password_strength_default: 'Enter a password', password_strength_weak: 'Weak password',
      password_strength_fair: 'Fair password', password_strength_good: 'Good password',
      password_strength_strong: 'Strong password'
    },
    'es': {
      nav_home: 'Inicio', nav_products: 'Productos', nav_contact: 'Contacto',
      search_placeholder: 'Buscar productos...',
      hero_title: 'Tecnología para tu día a día',
      hero_subtitle: 'Los mejores smartphones, notebooks y accesorios con precios competitivos y entrega rápida a todo Brasil.',
      hero_cta: 'Ver Productos',
      products_title: 'Productos Destacados',
      offers_title: 'Ofertas del Día',
      offers_subtitle: 'Desliza hacia el lado para ver los destacados de hoy.',
      offer_badge: 'Oferta del día',
      cat_placeholder: '¿Qué producto buscas?', cat_all: 'Todos los productos',
      cat_notebook: 'Notebook', cat_celular: 'Celular', cat_fone: 'Auriculares', cat_smartwatch: 'SmartWatch',
      add_to_cart: 'Añadir al Carrito', added_to_cart: 'Añadido',
      no_products_in_category: 'No se encontraron productos en esta categoría.',
      no_search_results: 'No se encontraron productos para "{termo}".',
      contact_title: 'Atención al Cliente',
      contact_heading: 'Contáctanos',
      contact_intro: 'Estamos listos para ayudarte a encontrar los mejores productos de tecnología.',
      support_title: 'Soporte',
      support_intro: '¿No encontraste lo que necesitabas? Respuestas rápidas a las dudas más comunes o escríbenos por WhatsApp.',
      faq_shipping_q: '¿Cuál es el plazo de entrega?',
      faq_shipping_a: 'El plazo promedio es de 3 a 7 días hábiles, según tu región. Recibirás el código de seguimiento en cuanto se despache el pedido.',
      faq_returns_q: '¿Cómo funcionan los cambios y devoluciones?',
      faq_returns_a: 'Tienes hasta 7 días corridos después de la entrega para solicitar un cambio o devolución, sin costo adicional, siempre que el producto esté en su empaque original.',
      faq_payment_q: '¿Qué formas de pago aceptan?',
      faq_payment_a: 'Aceptamos tarjeta de crédito en hasta 12 cuotas, transferencia instantánea y boleto bancario, con aprobación más rápida.',
      faq_warranty_q: '¿Los productos tienen garantía?',
      faq_warranty_a: 'Sí, todos los productos tienen garantía mínima de 12 meses contra defectos de fabricación, además de la garantía legal del fabricante.',
      faq_tracking_q: '¿Cómo puedo rastrear mi pedido?',
      faq_tracking_a: 'Ve a "Mi Cuenta" para consultar el estado actualizado de tus pedidos, desde el procesamiento hasta la entrega.',
      name_placeholder: 'Tu nombre',
      footer_tagline: 'Tu tienda online de tecnología.',
      footer_copyright: '©️ 2026 LaStore - Todos los derechos reservados.',
      cart_title: 'Tu Carrito',
      cart_empty: 'Tu carrito está vacío.<br>Añade productos para verlos aquí.',
      cart_total_label: 'Total', checkout_button: 'Finalizar Compra', per_unit: '/ ud.',
      fav_title: 'Mis Favoritos',
      fav_empty: 'Aún no tienes favoritos.<br>Toca el corazón de los productos para guardarlos aquí.',
      account_title: 'Mi Cuenta', account_data_section: 'Datos registrados',
      account_orders_section: 'Historial de compras',
      account_no_orders: 'Aún no has realizado ninguna compra.<br>Tus pedidos aparecerán aquí.',
      menu_label: 'Menú', menu_my_account_small: 'Mi cuenta', account_link: 'Datos de la cuenta',
      login_button_menu: 'Iniciar sesión', signup_button_menu: 'Regístrate', logout_button: 'Salir',
      lang_label: 'Idioma',
      login_title: 'Bienvenido de nuevo', login_subtitle: 'Accede a tu cuenta para continuar',
      email_label: 'Correo electrónico', email_placeholder: 'tucorreo@ejemplo.com',
      password_label: 'Contraseña', password_placeholder: 'Tu contraseña',
      error_email_invalid: 'Ingresa un correo válido.', error_password_required: 'Ingresa tu contraseña.',
      remember_me: 'Recordarme', forgot_password: '¿Olvidaste tu contraseña?', login_button: 'Entrar',
      new_here_divider: '¿nuevo por aquí?', no_account_text: '¿Aún no tienes cuenta?',
      create_account_link: 'Crear cuenta gratis',
      signup_title: 'Crear mi cuenta', signup_subtitle: 'Toma menos de un minuto',
      fullname_label: 'Nombre completo', confirm_password_label: 'Confirmar contraseña',
      password_create_placeholder: 'Crea una contraseña segura', password_confirm_placeholder: 'Repite la contraseña',
      error_name_required: 'Ingresa tu nombre.', error_password_mismatch: 'Las contraseñas no coinciden.',
      terms_text: 'Leí y acepto los Términos de Uso y la Política de Privacidad',
      signup_button: 'Crear Cuenta', has_account_text: '¿Ya tienes cuenta?', login_link: 'Iniciar sesión',
      rule_min_length: 'Mínimo 8 caracteres', rule_uppercase: 'Una letra mayúscula',
      rule_lowercase: 'Una letra minúscula', rule_number: 'Un número',
      rule_special: 'Un carácter especial (!@#$%...)',
      password_strength_default: 'Escribe una contraseña', password_strength_weak: 'Contraseña débil',
      password_strength_fair: 'Contraseña regular', password_strength_good: 'Contraseña buena',
      password_strength_strong: 'Contraseña fuerte'
    }
  };

  let idiomaAtual = localStorage.getItem(IDIOMA_KEY) || 'pt-br';
  // Guarda a CHAVE do rótulo do seletor de categoria (não o texto), para
  // conseguir re-traduzi-lo corretamente ao trocar de idioma.
  let categoriaLabelKeyAtual = 'cat_placeholder';

  function t(chave){
    return (TRADUCOES[idiomaAtual] && TRADUCOES[idiomaAtual][chave]) || TRADUCOES['pt-br'][chave] || chave;
  }

  // Aplica as traduções a todo elemento estático marcado com data-i18n /
  // data-i18n-placeholder. É seguro chamar de novo após re-renderizar
  // qualquer trecho (ex: grade de produtos), pois faz uma busca "ao vivo".
  function aplicarTextosEstaticos(){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
  }

  function atualizarRotuloCategoria(){
    const labelEl = document.getElementById('categorySearchLabel');
    if(labelEl) labelEl.textContent = t(categoriaLabelKeyAtual);
  }

  function atualizarGatilhoIdioma(){
    const flagEl = document.getElementById('menuLangFlag');
    if(flagEl) flagEl.textContent = BANDEIRAS_IDIOMA[idiomaAtual] || '🌐';
    const codeEl = document.getElementById('menuLangCode');
    if(codeEl) codeEl.textContent = CODIGOS_IDIOMA[idiomaAtual] || idiomaAtual.toUpperCase();
    const triggerEl = document.getElementById('menuLangTrigger');
    if(triggerEl) triggerEl.setAttribute('aria-label', t('lang_label'));
    document.querySelectorAll('.menu-lang-option').forEach(opt => {
      const ativo = opt.dataset.lang === idiomaAtual;
      opt.classList.toggle('active', ativo);
      opt.closest('li')?.setAttribute('aria-selected', String(ativo));
    });
  }

  function aplicarIdioma(lang){
    idiomaAtual = TRADUCOES[lang] ? lang : 'pt-br';
    localStorage.setItem(IDIOMA_KEY, idiomaAtual);
    document.documentElement.setAttribute('lang', idiomaAtual === 'pt-br' ? 'pt-BR' : idiomaAtual);

    aplicarTextosEstaticos();
    atualizarRotuloCategoria();
    atualizarGatilhoIdioma();

    // re-renderiza os trechos montados dinamicamente em JS, que têm
    // textos próprios (carrinho, favoritos, menu lateral)
    atualizarMenu();
    renderCart();
    renderFavs();
  }

  // ===== SELETOR DE IDIOMA (hambúrguer) — mesmo padrão do seletor de categoria =====
  function toggleLangMenu(forcarEstado){
    const wrap = document.getElementById('menuLang');
    const trigger = document.getElementById('menuLangTrigger');
    if(!wrap || !trigger) return;

    const abrir = typeof forcarEstado === 'boolean' ? forcarEstado : !wrap.classList.contains('open');
    wrap.classList.toggle('open', abrir);
    trigger.setAttribute('aria-expanded', String(abrir));

    if(abrir){
      document.addEventListener('click', fecharLangMenuAoClicarFora);
      document.addEventListener('keydown', fecharLangMenuNoEsc);
    } else {
      document.removeEventListener('click', fecharLangMenuAoClicarFora);
      document.removeEventListener('keydown', fecharLangMenuNoEsc);
    }
  }

  function fecharLangMenuAoClicarFora(e){
    const wrap = document.getElementById('menuLang');
    if(wrap && !wrap.contains(e.target)) toggleLangMenu(false);
  }

  function fecharLangMenuNoEsc(e){
    if(e.key === 'Escape'){
      toggleLangMenu(false);
      document.getElementById('menuLangTrigger')?.focus();
    }
  }

  function selecionarIdioma(lang, btn){
    toggleLangMenu(false);
    aplicarIdioma(lang);
  }

  document.getElementById('menuLangTrigger')?.addEventListener('keydown', function(e){
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      toggleLangMenu(true);
      document.querySelector('#menuLangMenu .menu-lang-option')?.focus();
    }
  });

  // ===== INTEGRAÇÃO COM A API DO DJANGO =====
  // Lê o cookie 'csrftoken' que o Django coloca no navegador — precisa
  // ser reenviado em todo POST/DELETE, senão o Django rejeita a requisição
  // (proteção padrão contra CSRF).
  function getCookie(nome){
    const valor = `; ${document.cookie}`;
    const partes = valor.split(`; ${nome}=`);
    if(partes.length === 2) return partes.pop().split(';').shift();
    return null;
  }

  async function apiFetch(url, options = {}){
    const opts = Object.assign({ credentials: 'same-origin' }, options);
    opts.headers = Object.assign({
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    }, options.headers || {});
    return fetch(url, opts);
  }

  // Catálogo usado pela busca (autocomplete) — antes era uma lista escrita
  // à mão no JS (e estava desatualizada, faltavam 2 dos 5 produtos!). Agora
  // é montada a partir dos próprios cards renderizados pelo Django, então
  // nunca fica desincronizada do banco de dados.
  // Usa um Map por id pra não duplicar: o mesmo produto pode aparecer tanto
  // na grade principal quanto no carrossel de Ofertas do Dia.
  const PRODUTOS = Array.from(
    new Map(
      Array.from(document.querySelectorAll('.btn-cart, .btn-cart-offer')).map(btn => [
        btn.dataset.id,
        { id: btn.dataset.id, name: btn.dataset.name, img: btn.dataset.img }
      ])
    ).values()
  );

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

  // ===== CATÁLOGO POR CATEGORIA =====
  // Monta os cards de produto a partir dos dados vindos da API, usando
  // a mesma estrutura HTML que o Django gera no carregamento inicial.
  function renderizarProdutos(produtos){
    const grid = document.getElementById('produtosGrid');
    if(!grid) return;

    if(!produtos.length){
      grid.innerHTML = `<p class="text-center w-100" data-i18n="no_products_in_category">${t('no_products_in_category')}</p>`;
      return;
    }

    grid.innerHTML = produtos.map(p => {
      const precoNum = parseFloat(p.preco);
      const precoFmt = formatarPreco(precoNum);
      return `
        <div class="col-6 col-lg-4">
          <div class="card card-clickable" onclick="abrirDetalhesProduto(event)">
            <button
              class="fav-btn"
              onclick="event.stopPropagation(); toggleFavorito(this)"
              data-id="${p.id}"
              data-name="${p.nome}"
              data-price="${p.preco}"
              data-img="${p.imagem_url}"
              title="Favoritar">
              <svg class="icon-outline" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path></svg>
              <svg class="icon-filled" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21s-6.7-4.35-9.3-8.1C1 10.1 1.6 6.6 4.6 5a5.4 5.4 0 0 1 7.4 1.7A5.4 5.4 0 0 1 19.4 5c3 1.6 3.6 5.1 1.9 7.9C18.7 16.65 12 21 12 21z"></path></svg>
            </button>
            <img src="${p.imagem_url}" class="card-img-top">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${p.nome}</h5>
              <p class="price">${precoFmt}</p>
              <button
                class="btn btn-cart mt-auto"
                onclick="event.stopPropagation(); addToCart(this)"
                data-id="${p.id}"
                data-name="${p.nome}"
                data-price="${p.preco}"
                data-img="${p.imagem_url}">
                ${ICON_BAG_CART}
                <span data-i18n="add_to_cart">${t('add_to_cart')}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    atualizarBotoesFavoritos();
    aplicarPrecosOferta();
  }

  // ===== SELETOR DE CATEGORIA (estilo "barra de busca") =====
  // O gatilho funciona como um input de busca: ao clicar, revela a lista
  // de categorias; ao escolher uma, filtra os produtos e fecha o menu.

  function toggleCategoryMenu(forcarEstado){
    const wrap = document.getElementById('categorySearch');
    const trigger = document.getElementById('categorySearchTrigger');
    if(!wrap || !trigger) return;

    const abrir = typeof forcarEstado === 'boolean' ? forcarEstado : !wrap.classList.contains('open');
    wrap.classList.toggle('open', abrir);
    trigger.setAttribute('aria-expanded', String(abrir));

    if(abrir){
      document.addEventListener('click', fecharCategoryMenuAoClicarFora);
      document.addEventListener('keydown', fecharCategoryMenuNoEsc);
    } else {
      document.removeEventListener('click', fecharCategoryMenuAoClicarFora);
      document.removeEventListener('keydown', fecharCategoryMenuNoEsc);
    }
  }

  function fecharCategoryMenuAoClicarFora(e){
    const wrap = document.getElementById('categorySearch');
    if(wrap && !wrap.contains(e.target)) toggleCategoryMenu(false);
  }

  function fecharCategoryMenuNoEsc(e){
    if(e.key === 'Escape'){
      toggleCategoryMenu(false);
      document.getElementById('categorySearchTrigger')?.focus();
    }
  }

  async function selecionarCategoria(categoria, labelKey, btn){
    document.querySelectorAll('.category-option').forEach(b => {
      b.classList.remove('active');
      b.closest('li')?.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.closest('li')?.setAttribute('aria-selected', 'true');

    categoriaLabelKeyAtual = labelKey;
    const wrap = document.getElementById('categorySearch');
    atualizarRotuloCategoria();
    wrap?.classList.toggle('has-value', !!categoria);

    toggleCategoryMenu(false);

    const url = categoria ? `/api/produtos/?categoria=${categoria}` : '/api/produtos/';
    const resp = await apiFetch(url);
    if(!resp.ok){
      mostrarToast('Erro ao carregar', 'Não foi possível carregar os produtos dessa categoria.', 'error');
      return;
    }
    const produtos = await resp.json();
    renderizarProdutos(produtos);
  }

  // Setinha para baixo com o foco no gatilho também abre o menu e leva
  // o foco à primeira opção — atalho útil para quem navega via teclado.
  document.getElementById('categorySearchTrigger')?.addEventListener('keydown', function(e){
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      toggleCategoryMenu(true);
      document.querySelector('#categorySearchMenu .category-option')?.focus();
    }
  });

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
    btn.innerHTML = ICON_CHECK + `<span>${t('added_to_cart')}</span>`;
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

  async function finalizarCompra(){
    const cart = getCart();
    if(cart.length === 0) return;

    if(!isLoggedIn){
      bootstrap.Offcanvas.getInstance(document.getElementById('carrinho'))?.hide();
      mostrarToast('Faça login pra continuar', 'Você precisa estar logado pra finalizar a compra.', 'error');
      abrirAuth('login');
      return;
    }

    const total = cart.reduce((soma, i) => soma + i.price * i.qty, 0);

    const resp = await apiFetch('/api/pedidos/', {
      method: 'POST',
      body: JSON.stringify({
        total: total.toFixed(2),
        itens: cart.map(i => ({
          nome_produto: i.name,
          preco_unitario: i.price,
          quantidade: i.qty
        }))
      })
    });

    if(!resp.ok){
      mostrarToast('Erro ao finalizar', 'Não foi possível registrar seu pedido. Tente novamente.', 'error');
      return;
    }

    alert('Pedido confirmado! Total: ' + formatarPreco(total) + '\n\n(Essa é uma loja de demonstração — nenhum pagamento real foi processado.)');
    saveCart([]);
    bootstrap.Offcanvas.getInstance(document.getElementById('carrinho'))?.hide();
  }

  // ===== FAVORITOS (curtidos) — agora vêm da API, exigem login =====

  async function getFavs(){
    if(!isLoggedIn) return [];
    const resp = await apiFetch('/api/favoritos/');
    if(!resp.ok) return [];
    const data = await resp.json();
    return data.map(f => ({
      id: String(f.produto.id),
      name: f.produto.nome,
      price: parseFloat(f.produto.preco),
      img: f.produto.imagem_url
    }));
  }

  async function toggleFavorito(btn){
    if(!isLoggedIn){
      mostrarToast('Faça login pra continuar', 'Você precisa estar logado pra favoritar produtos.', 'error');
      abrirAuth('login');
      return;
    }

    const id = btn.dataset.id;
    const favs = await getFavs();
    const existe = favs.find(f => f.id === id);

    if(existe){
      await apiFetch(`/api/favoritos/${id}/`, { method: 'DELETE' });
    } else {
      await apiFetch('/api/favoritos/', {
        method: 'POST',
        body: JSON.stringify({ produto_id: id })
      });
    }

    await renderFavs();
    await atualizarBotoesFavoritos();
  }

  async function removerFavorito(id){
    await apiFetch(`/api/favoritos/${id}/`, { method: 'DELETE' });
    await renderFavs();
    await atualizarBotoesFavoritos();
  }

  async function atualizarBotoesFavoritos(){
    const favs = await getFavs();
    document.querySelectorAll('.fav-btn').forEach(btn => {
      const isFav = favs.some(f => f.id === btn.dataset.id);
      btn.classList.toggle('active', isFav);
    });
  }

  async function renderFavs(){
    const favs = await getFavs();
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

  renderCart();
  renderFavs();
  atualizarBotoesFavoritos();

  // ===== OFERTAS DO DIA: carrossel horizontal =====
  // Toque/swipe já funciona nativamente (overflow-x + scroll-snap).
  // O JS abaixo só adiciona "clicar e arrastar" pro mouse no desktop,
  // que não tem gesto de toque, e evita que o arraste dispare o clique
  // do card (que abriria os "detalhes do produto").
  (function initOfertasCarousel(){
    const carrossel = document.getElementById('offersCarousel');
    if(!carrossel) return;

    let arrastando = false;
    let jaMoveu = false;
    let inicioX = 0;
    let scrollInicial = 0;

    carrossel.addEventListener('pointerdown', (e) => {
      if(e.pointerType !== 'mouse') return; // toque/caneta usam o scroll nativo
      arrastando = true;
      jaMoveu = false;
      inicioX = e.clientX;
      scrollInicial = carrossel.scrollLeft;
      carrossel.classList.add('dragging');
      carrossel.setPointerCapture(e.pointerId);
    });

    carrossel.addEventListener('pointermove', (e) => {
      if(!arrastando) return;
      const delta = e.clientX - inicioX;
      if(Math.abs(delta) > 5) jaMoveu = true;
      carrossel.scrollLeft = scrollInicial - delta;
    });

    function soltarArraste(){
      arrastando = false;
      carrossel.classList.remove('dragging');
    }
    carrossel.addEventListener('pointerup', soltarArraste);
    carrossel.addEventListener('pointerleave', soltarArraste);
    carrossel.addEventListener('pointercancel', soltarArraste);

    // impede que o "soltar" do arraste seja interpretado como clique no card
    carrossel.addEventListener('click', (e) => {
      if(jaMoveu){
        e.preventDefault();
        e.stopPropagation();
        jaMoveu = false;
      }
    }, true);
  })();

  function scrollOfertas(direcao){
    const carrossel = document.getElementById('offersCarousel');
    if(!carrossel) return;
    const card = carrossel.querySelector('.offer-card');
    const larguraCard = card ? card.getBoundingClientRect().width : 190;
    const gap = 16; // precisa bater com o "gap" do CSS .offers-carousel
    carrossel.scrollBy({ left: direcao * (larguraCard + gap) * 2, behavior: 'smooth' });
  }

  // ===== OFERTAS DO DIA: refletir o preço promocional na grade =====
  // O preço com desconto agora é calculado no backend (campos em_oferta /
  // desconto_percentual do Produto, em models.py) e já vem pronto nos
  // cards do carrossel. Esta função só LÊ esse valor e o replica nos
  // cards correspondentes da grade "Produtos em Destaque" — que é
  // carregada à parte, via /api/produtos/, e não sabe por si só quais
  // produtos estão em oferta.
  function aplicarPrecosOferta(){
    const idsComOferta = {};

    document.querySelectorAll('.offer-card').forEach(card => {
      const precoAntigoEl = card.querySelector('.offer-price-old');
      const cartBtn = card.querySelector('.btn-cart-offer');
      const favBtn = card.querySelector('.fav-btn');
      if(!precoAntigoEl || !cartBtn) return;

      const precoOriginal = parseFloat(precoAntigoEl.dataset.priceOld);
      const precoComDesconto = parseFloat(cartBtn.dataset.price);
      if(isNaN(precoOriginal) || isNaN(precoComDesconto)) return;

      const id = cartBtn.dataset.id;
      if(id){
        idsComOferta[id] = { original: precoOriginal, comDesconto: precoComDesconto };
      }
    });

    // Reflete o mesmo desconto nos cards correspondentes de "Produtos em
    // Destaque". Roda de novo sempre que a grade é re-renderizada (ex: ao
    // filtrar por categoria), então funciona com os cards mais recentes.
    document.querySelectorAll('#produtosGrid .btn-cart').forEach(cartBtn => {
      const oferta = idsComOferta[cartBtn.dataset.id];
      if(!oferta) return;

      const card = cartBtn.closest('.card');
      if(!card) return;

      cartBtn.dataset.price = oferta.comDesconto.toFixed(2);
      const favBtn = card.querySelector('.fav-btn');
      if(favBtn) favBtn.dataset.price = oferta.comDesconto.toFixed(2);

      const priceEl = card.querySelector('.price');
      if(priceEl && !priceEl.classList.contains('price-has-offer')){
        priceEl.classList.add('price-has-offer');
        priceEl.innerHTML = `
          <span class="price-old">${formatarPreco(oferta.original)}</span>
          <span class="price-new">${formatarPreco(oferta.comDesconto)}</span>
        `;
      }

      if(!card.querySelector('.product-offer-tag')){
        const tag = document.createElement('span');
        tag.className = 'product-offer-tag';
        tag.textContent = t('offer_badge');
        card.prepend(tag);
      }
    });
  }
  aplicarPrecosOferta();

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
  // Antes isso era simulado no localStorage. Agora é a sessão de verdade
  // do Django (cookie de sessão) — verificarSessao() checa se já existe
  // uma sessão ativa sempre que a página carrega (ex: após um F5).
  let isLoggedIn = false;
  let usuarioAtual = { nome: '', nomeCompleto: '', email: '' };

  async function verificarSessao(){
    const resp = await apiFetch('/api/auth/me/');
    if(resp.ok){
      const dados = await resp.json();
      if(dados.autenticado){
        isLoggedIn = true;
        usuarioAtual.nomeCompleto = dados.nome;
        usuarioAtual.nome = dados.nome.split(' ')[0];
        usuarioAtual.email = dados.email;
      }
    }
    atualizarMenu();
    atualizarBotoesFavoritos();
  }

  function formatarDataPedido(iso){
    const d = new Date(iso);
    const data = d.toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' });
    const hora = d.toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' });
    return `${data} às ${hora}`;
  }

  // ===== ABA "MINHA CONTA" =====
  async function abrirMinhaConta(){
    if(!isLoggedIn){
      fecharMenu();
      mostrarToast('Faça login pra continuar', 'Você precisa estar logado pra ver os dados da conta.', 'error');
      abrirAuth('login');
      return;
    }
    await renderMinhaConta();
    fecharMenu();
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('minhaConta')).show();
  }

  async function renderMinhaConta(){
    const el = document.getElementById('minhaContaBody');
    const resp = await apiFetch('/api/pedidos/');
    const pedidos = resp.ok ? await resp.json() : [];
    const nomeCompleto = usuarioAtual.nomeCompleto || usuarioAtual.nome;
    const iniciais = (usuarioAtual.nome || '').substring(0, 2).toUpperCase();

    const pedidosHtml = pedidos.length === 0
      ? '<div class="cart-empty">Você ainda não fez nenhuma compra.<br>Seus pedidos aparecerão aqui.</div>'
      : pedidos.map(p => `
          <div class="order-card">
            <div class="order-card-header">
              <span class="order-date">${formatarDataPedido(p.criado_em)}</span>
              <span class="order-total">${formatarPreco(parseFloat(p.total))}</span>
            </div>
            <div class="order-items">
              ${p.itens.map(i => `
                <div class="order-item-row">
                  <span>${i.quantidade}x ${i.nome_produto}</span>
                  <span>${formatarPreco(i.preco_unitario * i.quantidade)}</span>
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
          <div style="min-width:0;">
            <div style="font-weight:700;color:var(--primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px;">${usuarioAtual.nome}</div>
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

  async function logoutUsuario(){
    await apiFetch('/api/auth/logout/', { method: 'POST' });
    isLoggedIn = false;
    usuarioAtual = { nome: '', nomeCompleto: '', email: '' };
    fecharMenu();
    atualizarMenu();
    atualizarBotoesFavoritos();
    mostrarToast('Você saiu', 'Até logo! Sua sessão foi encerrada.', 'success');
  }

  verificarSessao();

  // ===== LOGIN =====
  async function handleLogin(e){
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

    const resp = await apiFetch('/api/auth/login/', {
      method: 'POST',
      body: JSON.stringify({ email: emailInput.value.trim(), senha: passInput.value })
    });

    if(!resp.ok){
      mostrarToast('Não foi possível entrar', 'E-mail ou senha inválidos.', 'error');
      return false;
    }

    const dados = await resp.json();
    isLoggedIn = true;
    usuarioAtual.nomeCompleto = dados.nome;
    usuarioAtual.nome = dados.nome.split(' ')[0];
    usuarioAtual.email = dados.email;

    atualizarMenu();
    await atualizarBotoesFavoritos();

    fecharAuth();
    e.target.reset();

    mostrarToast('Login efetuado com sucesso!', `Bem-vindo(a) de volta, ${usuarioAtual.nome}.`, 'success');

    return false;
  }

  // ===== CADASTRO =====
  async function handleCadastro(e){
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

    const nomeCompleto = nome.value.trim();
    const emailCadastrado = email.value.trim();

    const resp = await apiFetch('/api/auth/registro/', {
      method: 'POST',
      body: JSON.stringify({ nome: nomeCompleto, email: emailCadastrado, senha: senha.value })
    });

    if(!resp.ok){
      const erro = await resp.json().catch(() => ({}));
      const msg = (erro.email && erro.email[0]) || 'Não foi possível criar a conta. Tente novamente.';
      mostrarToast('Erro ao cadastrar', msg, 'error');
      return false;
    }

    const primeiroNome = nomeCompleto.split(' ')[0];

    e.target.reset();
    atualizarForcaSenha();

    mostrarAuthView('login');
    const loginEmailInput = document.getElementById('loginEmail');
    if(loginEmailInput) loginEmailInput.value = emailCadastrado;

    mostrarToast('Conta criada com sucesso!', `Bem-vindo(a), ${primeiroNome}. Agora faça login pra continuar.`, 'success');

    return false;
  }