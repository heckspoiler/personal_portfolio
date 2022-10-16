const slideIn = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

   //console.log(scrollTop, clientHeight);

   const topElementToTopViewport = slideIn.getBoundingClientRect().top;
   
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight *1.2) {
        slideIn.classList.add('active')
    }
})