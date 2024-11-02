

const listaMenu = document.querySelector('.lista-menu');
const botaoMenu = document.querySelector('#menuToggle')
const menu = document.querySelector('.container_menu');
const listaBotoes = document.querySelectorAll('.fabricante__botao')
const icon = document.getElementById('icon')
const listaCards = document.querySelectorAll('.card-modelo')

//ocultação do menu hamburger ao clique
document.addEventListener('click', (event) => {

    if (!menu.contains(event.target) && !listaMenu.contains(event.target)) {
        botaoMenu.checked =  false;
    } 
            
})

//--- botões-------------------
const jlgBt = listaBotoes[0]
const genieBt = listaBotoes[1]
const skjBt = listaBotoes[2]
const haulotteBt = listaBotoes[3]
const dingliBt = listaBotoes[4]
//------------------------------

jlgBt.addEventListener('click', () => {
    alterarConteudo('jlg')
    jlgBt.classList.add('activ')
    
})

skjBt.addEventListener('click', () => {
    alterarConteudo('skj')
    skjBt.classList.add('activ')
})

genieBt.addEventListener('click', () => {
    alterarConteudo('genie')
    genieBt.classList.add('activ')
    
})

haulotteBt.addEventListener('click', () => {
    alterarConteudo('haulotte')
    haulotteBt.classList.add('activ')
    
})

dingliBt.addEventListener('click', () => {
    alterarConteudo('dingli')
    dingliBt.classList.add('activ')
    
})




function alterarConteudo(conteudo) {
    listaBotoes.forEach(botao => {
        console.log(conteudo)
        botao.classList.remove('activ')
        botao.classList.remove('haulotte') //botão deu bug no tamplete string não remove a classe
        botao.classList.remove('jlg','genie','skj','haulotte','dingli')
        icon.setAttribute('src', `assets/icon-${conteudo}.png`)
        botao.classList.add(`${conteudo}`)
        
    })

    listaCards.forEach(card => {
        //card.classList.remove('haulotte-card')
        card.classList.remove('jlg-card','genie-card','skj-card','haulotte-card','dingli-card')
        card.classList.add(`${conteudo}-card`)
    })

}





