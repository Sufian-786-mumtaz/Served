window.onscroll=function(){
    myfunction()
};
var navbar = document.getElementById("mynavbar");
navbar.classList.remove("sticky");
function myfunction(){
    if(window.pageYOffset>=100){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky");
    }
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(document).ready(function() {
    $('#headerVideoLink').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });         
  });
