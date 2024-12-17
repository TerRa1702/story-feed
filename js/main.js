const swiper = new Swiper('.swiper-outer', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 80,
});


var modal = document.getElementById("myModal");
var btns = document.getElementsByClassName("feed-item");
var span = document.getElementsByClassName("close")[0];

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var swiper2 = new Swiper(".swiper-modal", {
    // effect: "coverflow",
    // coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 200,
    //     modifier: 1,
    // },
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 100,
    allowTouchMove: false,
    slideToClickedSlide: true,
    allowSlidePrew: true,
    allowSlideNext: true,
    thumbs: {
        swiper: swiper,
    },
});