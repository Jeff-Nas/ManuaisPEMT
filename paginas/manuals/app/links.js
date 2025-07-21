//correção de bug na abertura do link

const cardModelos = document.querySelectorAll('.card-modelo');
cardModelos.forEach(card => {
    card.addEventListener('click', () => {
        const link = card.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
});