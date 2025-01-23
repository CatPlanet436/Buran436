sectionLoadAnimate()

function sectionLoadAnimate() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, 200 * (i + 1));
    });

    setTimeout(() => {
        const sections = document.querySelectorAll('.links__link');
        sections.forEach((section, i) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, 150 * (i + 1));
        });
    }, 600)
}