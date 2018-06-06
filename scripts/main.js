$(document).ready(function() {
    slider();
    
});

function slider() {

  $('.slide').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3

  });
}


