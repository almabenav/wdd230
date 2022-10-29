let myObserver = new IntersectionObserver((myListA, myObserver) => { 
    myListA.forEach(cupX => {
    if(cupX.isIntersecting){
        cupX.target.src = cupX.target.dataset.src;
        cupX.target.removeAttribute('data-src');
        myObserver.unobserve(cupX.target);
    }
    });
}, {rootMargin: "0px 0px -100px 0px"});

document.querySelectorAll('img[data-src]').forEach(img => {myObserver.observe(img) });
