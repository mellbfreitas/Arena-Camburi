document.addEventListener('DOMContentLoaded', () => {

    // ==========================
    // MENU RESPONSIVO
    // ==========================

    const botao = document.getElementById('menuToggle');
    const menu = document.getElementById('menuLista');
    const overlay = document.getElementById('overlay');

    function alternarMenu(abrir) {
        menu.classList.toggle('aberto', abrir);
        botao.classList.toggle('aberto', abrir);
        overlay.classList.toggle('ativo', abrir);
    }

    botao.addEventListener('click', () => {
        alternarMenu(!menu.classList.contains('aberto'));
    });

    overlay.addEventListener('click', () => {
        alternarMenu(false);
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            alternarMenu(false);
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            alternarMenu(false);
        }
    });


    // ==========================
    // 1 - VALIDAÇÃO DO CADASTRO
    // ==========================

    const formulario = document.querySelector('#cadastro form');

    formulario.addEventListener('submit', function(event) {

        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('tel').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || telefone === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos do cadastro.');
            return;
        }

        alert(`Cadastro realizado com sucesso, ${nome}!`);

        formulario.reset();
    });


    // ==========================
    // 2 - ESCOLHA DE ESPORTES
    // ==========================

    const formularioEsportes = document.querySelector('.favorito');

    formularioEsportes.addEventListener('submit', function(event) {

        event.preventDefault();

        const esportesSelecionados = document.querySelectorAll(
            'input[name="esporte"]:checked'
        );

        if (esportesSelecionados.length === 0) {
            alert('Selecione pelo menos um esporte.');
            return;
        }

        let listaEsportes = [];

        esportesSelecionados.forEach(esporte => {
            const label = document.querySelector(
                `label[for="${esporte.id}"]`
            );

            listaEsportes.push(label.textContent.trim());
        });

        alert(
            'Você escolheu: ' + listaEsportes.join(', ')
        );
    });

});