document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('banner-img-set').classList.add('ativo');
})
document.addEventListener('scroll', () => {
    //Fixar header abaixo
    const btnTopo = document.getElementById('btn-topo');
    window.scrollY > 100 ? btnTopo.classList.add('visivel') : btnTopo.classList.remove('visivel');

    const header = document.getElementById('header');
    const head1 = document.getElementById('head1');
    const head2 = document.getElementById('head2');
    const head3 = document.getElementById('head3');

    if (window.scrollY > 100) {
        header.classList.add('visivel');
        head1.style = 'display:none';
    } else {
        header.classList.remove('visivel');
        head1.style = 'display:flex';
    }

    //opacitar o BTN Button 
    //const tela = document.getElementById('body').getBoundingClientRect().bottom;
    //O calculo abaixo precisa ser revisto;
    const tela = document.body.scrollHeight;
    const fimDatela = tela - 900;
    if (window.scrollY > fimDatela) {
        btnTopo.classList.add('opaco')
    } else {
        btnTopo.classList.remove('opaco')
    }
});

window.addEventListener('scroll', function () {
    const elementoAnimado = document.querySelectorAll('.animado');

    elementoAnimado.forEach(function (box) {
        const posicaoElemento = box.getBoundingClientRect().top;
        const areaRenderizada = window.innerHeight / 1.5; 

        if (posicaoElemento < areaRenderizada) {
            box.classList.add('ativo');
        }
    });
});