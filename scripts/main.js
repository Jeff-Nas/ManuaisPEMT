
export function updateManuals(key) {
    const list = document.querySelector('.manuais-lista')

    list.innerHTML = ""

    list.classList.remove('fade-in-up')
    void list.offsetWidth

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

            list.classList.add('fade-in-up')
        })

    }
}