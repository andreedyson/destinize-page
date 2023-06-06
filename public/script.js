const hambMenu = document.querySelector('#hamb');
const links = document.querySelector('#linklist');

// Hamburger Menu & Overlay
hambMenu.addEventListener('click', () => {
    links.classList.toggle('hidden');
})

window.addEventListener('resize', hambClose);

function hambClose() {
    if(window.innerWidth > 1024) {
    links.classList.add('hidden');
    }
}

const accordionHeader = document.querySelectorAll('.accordion-header');
const accordionContainer = document.querySelector('.accordion-container');

accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', () => {
        accordionHeader.classList.toggle('active');
        
        const accordionContent = accordionHeader.nextElementSibling;
        if(accordionContent.style.display = 'hidden') {
            accordionContainer.classList.toggle('open');
            accordionContent.classList.toggle('active')
            accordionHeader.classList.toggle('borderleft')
        }
    })
})