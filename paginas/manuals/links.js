const cardModelos = document.querySelectorAll('.card-modelo');
console.log(cardModelos)
cardModelos.forEach(card => {
    card.addEventListener('click', () => {
        const link = card.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
});