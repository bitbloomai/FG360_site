// js/form-handler.js

document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os dois formulários pelos seus IDs
    const formTrabalheConosco = document.getElementById('trabalhe-conosco-form');
    const formSejaAgregado = document.getElementById('seja-agregado-form');

    // Função genérica para lidar com o envio
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const form = event.target;
        const feedbackDiv = form.nextElementSibling; // Pega o div de feedback logo após o form

        // Mostra uma mensagem de sucesso
        feedbackDiv.textContent = 'Dados enviados com sucesso! Agradecemos o seu contato.';
        feedbackDiv.className = 'form-feedback success';

        // Limpa o formulário
        form.reset();

        // Esconde a mensagem após 5 segundos
        setTimeout(() => {
            feedbackDiv.style.display = 'none';
        }, 5000);
        
        // --- AVISO IMPORTANTE ---
        // Este código apenas simula o envio no front-end.
        // Para receber os dados de verdade, você precisará de um script no backend (PHP, Node.js, etc.)
        // ou usar um serviço como Formspree. O código para enviar os dados de verdade seria assim:
        /*
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                feedbackDiv.textContent = 'Dados enviados com sucesso!';
                feedbackDiv.className = 'form-feedback success';
                form.reset();
            } else {
                throw new Error('Erro no envio.');
            }
        }).catch(error => {
            feedbackDiv.textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
            feedbackDiv.className = 'form-feedback error';
        });
        */
    };

    // Adiciona o "escutador" de evento para cada formulário, se ele existir na página
    if (formTrabalheConosco) {
        formTrabalheConosco.addEventListener('submit', handleFormSubmit);
    }

    if (formSejaAgregado) {
        formSejaAgregado.addEventListener('submit', handleFormSubmit);
    }
});