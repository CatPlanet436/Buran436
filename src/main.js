window.addEventListener('load', () => {

    document.body.classList.add('loaded');
    setTimeout(() => {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
        }, 1000);
    }, 3000);
});

