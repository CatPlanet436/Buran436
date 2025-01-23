sectionLoadAnimate()

function sectionLoadAnimate() {
    let sections = Array.from(document.getElementsByClassName('section'));

    for(let i = 0; i < sections.length; i++) {
        setTimeout(() => {
            sections[i].style.opacity = "1";
            sections[i].style.transform = "translateX(0)";
        }, 300 * (i + 1))
    }
}