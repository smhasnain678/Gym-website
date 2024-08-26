{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script> */}

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
});

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
    })
})
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
      });
}

function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navImg = document.querySelector("nav img");
    var flag = 0
menu.addEventListener("click", function() {
    if(flag == 0){
        full.style.top = 0
        navImg.style.opacity = 0
        flag = 1
    }else{
        full.style.top = "-100%"
        navImg.style.opacity = 1
        flag = 0
    }
})
}

swiperAnimation();
page4Animation();
menuAnimation();

const trailer = document.getElementById("trailer");

window.onmousemove = e => {
    const x = e.clientX - trailer.offsetWidth / 6,
          y = e.clientY - trailer.offsetHeight / 6;  

    // trailer.style.transform = `translate(${x}px, ${y}px)`;

    const keyframes =   {
        transform: `translate(${x}px, ${y}px)`
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}
