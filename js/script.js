$(document).ready(function(){
       $('.my-carousel').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.my-carousel2'
        });
      $('.my-carousel2').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          asNavFor: '.my-carousel',
          prevArrow:'<i class="fa fa-chevron-left"></i>',
          nextArrow:'<i class="fa fa-chevron-right"></i>',
          dots: false,
          centerMode: true,
          focusOnSelect: true
        });
});