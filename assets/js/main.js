$(window).ready(function(){
   // FlexSlider
   var flexNavigation = $(".wc-slideshow__navigation a");
   var flexPagination = $(".wc-slideshow__pagination");

   $("#wc-slideshow").flexslider({
      selector: ".wc-slideshow__slides > li",
      controlsContainer: flexPagination,
      customDirectionNav: flexNavigation
   });
});
