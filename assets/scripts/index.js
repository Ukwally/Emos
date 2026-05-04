document.addEventListener('scroll', () => {
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