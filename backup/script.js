var botao = document.querySelector('#botao-imagem');
var seccao = document.querySelector('.jlg');

botao.addEventListener('click', function() {
    if( seccao.style.display === 'flex') {
        seccao.style.display = 'none';
    } else {
        seccao.style.display = 'flex';
    }
})