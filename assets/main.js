function setAttributeOnScrollRange(elementSel, attribute, value, startPoint, endPoint) {
    let elem = document.querySelector(elementSel);

    function toggle() {
        if(window.scrollY >= startPoint && window.scrollY <= endPoint) {
            elem.setAttribute(attribute, value);
            console.log('set')
        } else {
            elem.removeAttribute(attribute);
        }
    }

    window.addEventListener('scroll', () => toggle());
}

function toggleMenu(buttonSel, menuSel, droppedAttr = 'data-dropped', breakpoint = 1024) {
    let button = document.querySelector(buttonSel);
    let menu = document.querySelector(menuSel);


    function toggle() {
        if(menu.hasAttribute(droppedAttr)) {
            menu.removeAttribute(droppedAttr);
            button.removeAttribute(droppedAttr);
        } else {
            menu.setAttribute(droppedAttr, '');
            button.setAttribute(droppedAttr, '');
        }
    }

    button.addEventListener('click', () => toggle());

    window.addEventListener('resize', () => {
        if(window.innerWidth >= 1200) menu.removeAttribute(droppedAttr);
    });
}