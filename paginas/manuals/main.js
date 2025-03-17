

const listaMenu = document.querySelector('.lista-menu');
const botaoMenu = document.querySelector('#menuToggle')
const menu = document.querySelector('.container_menu');
const listaBotoes = document.querySelectorAll('.fabricante__botao')
const icon = document.getElementById('icon')
const listaCards = document.querySelectorAll('.card-modelo')



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
        botao.classList.remove('activ')
        botao.classList.add(`${conteudo}`)
        icon.setAttribute('src', `assets/icon-${conteudo}.png`)
    })

}




