let menuIcon = document.querySelector('#menu-icon');
let linkSelectedMedia = false;
let linkSelected = false;
let mediaNav = document.querySelector('.media-nav');
let main = document.querySelectorAll('.main');
let mainMedia = document.querySelectorAll('.main-media');

toggleMain(mainMedia, true, linkSelectedMedia);
toggleMain(main, false, linkSelected);

function toggleMain(main, hoveringState, link_selected) {
    main.forEach((link, index) => {
        link.children[0].addEventListener('click', () => {
            if (!link_selected) {
                link_selected = true;
                if (hoveringState) link.style.opacity = '0.8';
                else link.children[0].style.textDecoration = 'underline';
                link.children[1].style.transform = 'rotate(180deg)';
                link.children[2].style.display = 'flex';
                for (let i = 0; i < 3; i++) {
                    if (i != index) {
                        if (hoveringState) main[i].style.opacity = '1';
                        else main[i].children[0].style.textDecoration = 'none';
                        main[i].children[1].style.transform = 'rotate(0deg)';
                        main[i].children[2].style.display = 'none';
                    }
                }
            }
            else {
                link_selected = false;
                if (hoveringState) link.style.opacity = '1';
                else link.children[0].style.textDecoration = 'none';
                link.children[1].style.transform = 'rotate(0deg)';
                link.children[2].style.display = 'none';
            }
        })
        link.children[1].addEventListener('click', () => {
            if (!link_selected) {
                link_selected = true;
                if (hoveringState) link.style.opacity = '0.8';
                else link.children[0].style.textDecoration = 'underline';
                link.children[1].style.transform = 'rotate(180deg)';
                link.children[2].style.display = 'flex';
                for (let i = 0; i < 3; i++) {
                    if (i != index) {
                        if (hoveringState) main[i].style.opacity = '1';
                        else main[i].children[0].style.textDecoration = 'none';
                        main[i].children[1].style.transform = 'rotate(0deg)';
                        main[i].children[2].style.display = 'none';
                    }
                }
            }
            else {
                link_selected = false;
                if (hoveringState) link.style.opacity = '1';
                else link.children[0].style.textDecoration = 'none';
                link.children[1].style.transform = 'rotate(0deg)';
                link.children[2].style.display = 'none';
            }
        })
    })
}

let mediaMenuSelected = false;

menuIcon.addEventListener('click', e => {
    if (mediaNav.style.display === 'none') {
        mediaMenuSelected = true;
        mediaNav.style.display = 'flex';
        menuIcon.children[0].setAttribute('src', 'images/icon-close.svg');
    }
    else {
        mediaMenuSelected = false;
        mediaNav.style.display = 'none';
        menuIcon.children[0].setAttribute('src', 'images/icon-hamburger.svg');
        mainMedia.forEach(link => {
            link.style.opacity = '1';
            link.children[1].style.transform = 'initial';
            link.children[2].style.display = 'none';
        })
    }
})

let mediaScreen = window.matchMedia('(max-width:815px)');

mediaScreen.addListener(clearAll);

function clearAll(mediaScreen) {
    if (mediaScreen.matches) {
        main.forEach(link => {
            link.children[0].style.textDecoration = 'none';
            link.children[1].style.transform = 'rotate(0deg)';
            link.children[2].style.display = 'none';
        })
    }
    else {
        mediaMenuSelected = false;
        mediaNav.style.display = 'none';
        menuIcon.children[0].setAttribute('src', 'images/icon-hamburger.svg');
        mainMedia.forEach(link => {
            link.style.opacity = '1';
            link.children[1].style.transform = 'rotate(0deg)';
            link.children[2].style.display = 'none';
        })
    }
}
