



/* Navbar */

$('.bars').click(function () {
    $('.sm-ul').slideToggle(500);
})

/* End Navbar */


/* Start Bx-slider */

$(document).ready(function () {

    $('.bxslider').bxSlider({
    controls:false,
    pager: true,
    pause:4000,
    auto: true,
    infiniteLoop : true,
    touchEnabled: false,
    autoDirection: 'next',    
});

});

/* End Bx-slider */

/* Start Features */

/*
var feat = document.querySelector('.feat');
var feat1 = document.querySelector('.feat1');
var feat2 = document.querySelector('.feat2');
var feat3 = document.querySelector('.feat3');
var featLi = document.querySelector('.feat-li');

function featScroll() {
    if (window.pageYOffset >= feat.offsetTop - 150) {
        feat.setAttribute('style', 'opacity:1');
        featLi.setAttribute('style', 'padding:3px 10px;border:2px solid #e6b707;border-left:none;border-top:none;color:#e6b707;border-radius:50%;');
        feat1.setAttribute('style', 'margin-top:40px;');
        feat2.setAttribute('style', 'margin-top:40px;');
        feat3.setAttribute('style', 'margin-top:40px;');
    } 

} addEventListener('scroll', featScroll);

*/


/* End Features */


/* Start Our Work */


/* End Our Work */
