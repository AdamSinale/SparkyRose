    // scroll to top button
    let mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {mybutton.style.display = "block";} 
      else { mybutton.style.display = "none";} }
    var scrollToTopBtn = document.getElementById("scrollToTopBtn")
    var rootElement = document.documentElement
    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })}
      
    // change by chose
    function getColor(){
        document.getElementById('rcolor').innerHTML=("Rose Color: "+form.color[form.color.selectedIndex].text);
        document.getElementById('bcolor').innerHTML=("Base Color: "+form.base[form.base.selectedIndex].text);
        if(form.base.selectedIndex == 0){showSlides(slideIndex = form.color.selectedIndex*2+1);}
        else{showSlides(slideIndex = form.color.selectedIndex*2+2); } }
    
    // sidebar
    function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}
    function closeNav() {
         document.getElementById("mySidenav").style.width = "0";
         document.body.style.backgroundColor = "white";}

    //faqs open answers
    function answer1() {
        var more1Text = document.getElementById("more1");
        var head1Text = document.getElementById("head1");
        if (more1Text.style.display == "inline") {more1Text.style.display = "none";}
        else { more1Text.style.display = "inline";}}
    function answer2() {
        var more2Text = document.getElementById("more2");
        var head2Text = document.getElementById("head2");
        if (more2Text.style.display == "inline") {more2Text.style.display = "none";}
        else { more2Text.style.display = "inline";}}
    function answer3() {
        var more3Text = document.getElementById("more3");
        var head3Text = document.getElementById("head3");
        if (more3Text.style.display == "inline") {more3Text.style.display = "none";}
        else { more3Text.style.display = "inline";}}
    function answer4() {
        var more4Text = document.getElementById("more4");
        var head4Text = document.getElementById("head4");
        if (more4Text.style.display == "inline") {more4Text.style.display = "none";}
        else { more4Text.style.display = "inline";}}

    //change photos in slideshow
    let slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {showSlides(slideIndex += n);}
    function currentSlide(n) {showSlides(slideIndex = n);} 
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
  }

   
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

    
