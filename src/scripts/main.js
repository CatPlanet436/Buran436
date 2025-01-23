sectionLoadAnimate()

function sectionLoadAnimate() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, 200 * (i + 1));
    });
}