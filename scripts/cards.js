
//change the background-color of the card-item when selected
const cards = document.querySelectorAll('.card-item')

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('clicked'))
        card.classList.add('clicked')
    })
})
