$(document).ready(function(){
    $('.your-class').slick({
      dots:true,
      autoplay:true,
      speed:2000,
    });

    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      dots: false,
      slidesToScroll: 3,
    });
  });
