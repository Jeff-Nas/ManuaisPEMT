const manualData = {
    "6RS - 10RS": [
        { text: "6RS - 10RS - Serviço", link: "/manuais/jlg/tesoura-eletrica/6RS-10RS/3123331-Serviços.pdf" },
        { text: "6RS - 10RS - Peças", link: "/manuais/jlg/tesoura-eletrica/6RS-10RS/6RS-10RS-peças.pdf" },
        { text: "6RS - 10RS - Operação", link: "/manuais/jlg/tesoura-eletrica/6RS-10RS/6RS-10RS-operações.pdf" }
    ],

    "1930ES-3246ES": [
        { text: "1930ES -> 3246ES - Serviço", link: "/manuais/jlg/tesoura-eletrica/1930ES-A-3246ES/Manual-serviços-manutenção.pdf" },
        { text: "1930ES - Peças – PN 3121681 - 10-08-20 - NO. SÉRIE 0200239382 A 0200266334 E B200020297 AO ATUAL", link: "/manuais/jlg/tesoura-eletrica/1930ES-A-3246ES/1930ES JLG - PEÇAS – PN 3121681 - 10-08-20 - NO. SÉRIE 0200239382 A 0200266334 E B200020297 AO ATUAL.pdf" },
        { text: "1930ES -> 3246ES - Peças - PN 3121248 - NO. SÉRIE 0200152825 A 0200198014.pdf", link: "/manuais/jlg/tesoura-eletrica/1930ES-A-3246ES/1930 2030 2630 2646 3246ES - PEÇAS - PN 3121248 - 01-02-18 - NO. SÉRIE 0200152825 A 0200198014.pdf" },
        { text: "1930ES -> 3246ES - Peças - PN 3121275-01-02-18 - NO. SÉRIE 0200198014 A 0200239381 E NO. SÉRIE B200000100 A B200020296", link: "/manuais/jlg/tesoura-eletrica/1930ES-A-3246ES/1930 2030 2630 2646 3246ES-PEÇAS-PN 3121275-01-02-18 - NO. SÉRIE 0200198014 A 0200239381 E NO. SÉRIE B200000100 A B200020296.pdf" },
        { text: "1930ES -> 3246ES - Peças – PN 3121683 - 10-08-20 - NO. SÉRIE 0200239382 A 0200266434 E B200020297 AO ATUAL", link: "/manuais/jlg/tesoura-eletrica/1930ES-A-3246ES/2646ES,3246ES JLG - PEÇAS - PN 3121683 - 10-08-20 - NO. SÉRIE 0200239382 A 0200266434 E B200020297 AO ATUAL.pdf" },
        { text: "1930ES -> 3246ES - Operação - Global", link: "/manuais/jlg/tesoura-eletrica/1930ES-A-3246ES/3122377_05-01-13_Global---Operações.pdf" },
        { text: "1930ES -> 3246ES - Operação", link: "/manuais/jlg/tesoura-eletrica/1930ES-A-3246ES/3123697_I_ES-Scissors_JLG--Operações.pdf" }
    ],

    "3369LE-M4069LE": [
        { text: "Parts - JLG 3369LE-4069LE service-manual", link: "/manuais/jlg/tesoura-eletrica/M4069LE/3369LE 4069LE M3369 M4069 - PEÇAS - PN 3121123 - 08-31-2016 - ANTERIOR 0200230092.pdf" },
        { text: "Service - 3369LE 4069LE M3369 M4069 - PEÇAS - PN 3121123 - 08-31-2016 - ANTERIOR 0200230092", link: "/manuais/jlg/tesoura-eletrica/M4069LE/JLG 3369LE 4069LE service manual.pdf" }
    ]

}

//>>>ESTRUTURA QUE SE REPETE

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