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

});