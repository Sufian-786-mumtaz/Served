window.onscroll=function(){
    myfunction()
};
var navbar = document.getElementById("mynavbar");
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
    margin:15,
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


