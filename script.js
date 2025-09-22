document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('.nav-link');

    // Função para o efeito de rolagem do header
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Função para o clique no menu (efeito active)
    function handleNavClick(event) {
        // Remove a classe 'active' de todos os links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Adiciona a classe 'active' apenas no link clicado
        // Verifica se o elemento clicado ou seu pai é um link de navegação
        let targetLink = event.target.closest('.nav-link');
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }
    
    // Adiciona os "escutadores" de eventos
    window.addEventListener('scroll', handleScroll);
    
    const navList = document.querySelector('.nav-list');
    if (navList) {
        navList.addEventListener('click', handleNavClick);
    }

    const frotaCards = document.querySelectorAll('.frota-card');

        frotaCards.forEach(card => {
            card.addEventListener('click', (event) => {
                // Impede que o clique no card se propague para o document (e feche imediatamente)
                event.stopPropagation(); 

                // Alterna a classe 'active' no card clicado
                card.classList.toggle('active');

                // Fecha outros cards abertos (mantido, pois é um bom UX)
                frotaCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('active')) {
                        otherCard.classList.remove('active');
                    }
                });
            });
        });

        // NOVO: Adiciona um listener para cliques em qualquer lugar do documento
        document.addEventListener('click', (event) => {
            let cardClicked = false;
            frotaCards.forEach(card => {
                if (card.contains(event.target)) { // Verifica se o clique foi dentro de um card
                    cardClicked = true;
                }
            });

            // Se o clique não foi dentro de nenhum card, fecha todos os cards abertos
            if (!cardClicked) {
                frotaCards.forEach(card => {
                    card.classList.remove('active');
                });
            }
        });

});