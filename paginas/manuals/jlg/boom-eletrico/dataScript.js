
const manualData = {

    "E300-E300AJ": [
        { text: "PEÇAS - PN 3120773 - 31-03-2017 - ANTERIOR A 0300138358", link: "/manuais/jlg/boom-eletrico/E300/E300A E300AJ - PEÇAS - PN 3120773 - 31-03-2017 - ANTERIOR A 0300138358.pdf" },
        { text: "PEÇAS - PN 3121254 - 18-06-18 - NO. SÉRIE 0300138358 A 0300211843", link: "/manuais/jlg/boom-eletrico/E300/E300A E300AJ - PEÇAS - PN 3121254 - 18-06-18 - NO. SÉRIE 0300138358 A 0300211843.pdf" },
        { text: "SERVIÇO - PN 3123488 - 23-08-12 – PORTUGUÊS", link: "/manuais/jlg/boom-eletrico/E300/E300A E300AJ - SERVIÇO - PN 3123488 - 23-08-12 – PORTUGUÊS.pdf" },
        { text: "SERVIÇO - PN 3120772 – 13-01-09 - INGLÊS", link: "/manuais/jlg/boom-eletrico/E300/E300A, E300AJ - SERVIÇO - PN 3120772 – 13-01-09 - INGLÊS.pdf" }
    ],

    "E400A-E450AJ": [
        { text: "PEÇAS - E400A E400AJPN M400A M400AJPN E450A E450AJ M450A M450AJ-PN 3121128-16-11-18-NO. SÉRIE 0300000100 A 0300189900", link: "/manuais/jlg/boom-eletrico/E400A-E450AJ/E400A E400AJPN M400A M400AJPN E450A E450AJ M450A M450AJ-PEÇAS-PN 3121128-16-11-18-NO. SÉRIE 0300000100 A 0300189900.pdf" },
        { text: "PEÇAS - E450A, E450AJ, M450AJ JLG - PN 3121649 - 16-11-18 - NO. SÉRIE 0300189898 A 0300208529", link: "/manuais/jlg/boom-eletrico/E400A-E450AJ/E450A, E450AJ, M450AJ JLG - PEÇAS - PN 3121649 - 16-11-18 - NO. SÉRIE 0300189898 A 0300208529.pdf" },
        { text: "SERVIÇO - E450A, E450AJ M45A M450AJ - SERVIÇO - PN 3121127 - 20-03-2014 - INGLÊS", link: "/manuais/jlg/boom-eletrico/E400A-E450AJ/E450A, E450AJ M45A M450AJ - SERVIÇO - PN 3121127 - 20-03-2014 - INGLÊS.pdf" },
        { text: "SERVIÇO - E450A, E450AJ M45A M450AJ - SERVIÇO - PN 3121714 - 30-11-2018 - INGLÊS", link: "/manuais/jlg/boom-eletrico/E400A-E450AJ/E450A, E450AJ M45A M450AJ - SERVIÇO - PN 3121714 - 30-11-2018 - INGLÊS.pdf" }
    ],

    "E600-M600JP": [
        { text: "PEÇAS - E600 E600J - PN 3121118 - 21-06-18 - NO. SÉRIE 0300000100 A 0300219270", link: "/manuais/jlg/boom-eletrico/E600-M600JP/E600 E600J - PEÇAS - PN 3121118 - 21-06-18 - NO. SÉRIE 0300000100 A 0300219270.pdf" },
        { text: "PEÇAS - E600, E600J, E600JP, M600, M600J, M600JP JLG - PN 3121712 - NO. SÉRIE 0300219271 AO ATUAL", link: "/manuais/jlg/boom-eletrico/E600-M600JP/E600, E600J, E600JP, M600, M600J, M600JP JLG - PEÇAS - PN 3121712 - NO. SÉRIE 0300219271 AO ATUAL.pdf" },
        { text: "SERVIÇO - E600, E600J, E600JP, M600, M600J, M600JP - PN 3121711 - 07-01-2019 - INGLÊS", link: "/manuais/jlg/boom-eletrico/E600-M600JP/E600, E600J, E600JP, M600, M600J, M600JP - SERVIÇO - PN 3121711 - 07-01-2019 - INGLÊS.pdf" },
        { text: "E600, E600J, E600JP, M600, M600J, M600JP - SERVIÇO - PN 3123347 - 11-02-2008 - PORTUGUÊS", link: "/manuais/jlg/boom-eletrico/E600-M600JP/E600, E600J, E600JP, M600, M600J, M600JP - SERVIÇO - PN 3123347 - 11-02-2008 - PORTUGUÊS.pdf" }
    ]
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