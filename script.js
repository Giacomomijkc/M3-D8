//funzioni per gestire i carousel item (3 per ognuna altrimenti andavano in conflitto alcune immagini)
let carouselTrending = document.querySelectorAll('.carousel-trending .carousel-item')

carouselTrending.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = carouselTrending[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let carouselWatch = document.querySelectorAll('.carousel-watch .carousel-item')

carouselWatch.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = carouselWatch[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let carouselNew = document.querySelectorAll('.carousel-new .carousel-item')

carouselNew.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = carouselNew[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//funzione per far comparire la section New Release a metà scroll di pagina

let newReleases = document.getElementById('newReleases');

document.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (scrollPosition > pageHeight / 2) {
    newReleases.style.display = 'block';
  } else {
    newReleases.style.display = 'none';
  }
});





