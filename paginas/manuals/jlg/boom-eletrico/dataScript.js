const manualData = {
    "6RS - 10RS": [
        { text: "6RS - 10RS - Serviço", link: "/manuais/jlg/tesoura-eletrica/6RS-10RS/3123331-Serviços.pdf" },
        { text: "6RS - 10RS - Peças", link: "/manuais/jlg/tesoura-eletrica/6RS-10RS/6RS-10RS-peças.pdf" },
        { text: "6RS - 10RS - Operação", link: "/manuais/jlg/tesoura-eletrica/6RS-10RS/6RS-10RS-operações.pdf" }
    ],


}


document.querySelectorAll(".card-item").forEach(item => {
    item.addEventListener('click', () => {
        const key = item.getAttribute("data-key")
        updateManuals(key)
    })
})



function updateManuals(key) {
    const list = document.querySelector('.manuais-lista')
    list.innerHTML = ""

    if (manualData[key]) {
        manualData[key].forEach(obj => {
            const li = document.createElement("li")
            li.classList.add("manuais-item")

            const a = document.createElement("a")
            a.classList.add("manuais-link")
            a.href = obj.link
            a.innerHTML = `<strong>${key}</strong> - ${obj.text}`

            li.appendChild(a)
            list.appendChild(li)

        })
    }
}