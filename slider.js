var $sc = $(".slider-container")            // Carousel Container (div)
var $lArrow = $(".left-arrow-click");       // Left Arrow Icon's class
var $rArrow = $(".right-arrow-click");      // Right Arrow Icon's class
var $slides = $(".slides");                 // 'Slide' Container (ul)
var slideCounter = 1;                       // Intial position of slider
var animLen = 500;                          // Length of time for animation to complete
var first = 1;                              // Marker for first element
var last = $slides.children('li').length;   // Marker of last element
var width = $sc.css("width").slice(0,-2);   // Width of container with 'px' removed
var bigWidth = width * (last - 1);          // Width * total number of images - 1. For cycling.
/*
    On a click of the right-arrow. Slide the image to the image on the right.
    If on the last image in the set, slide to the first.
*/
$rArrow.click(function() {
    if($slides.children("li").filter(".img" + slideCounter).hasClass("last-image")) {
         $(".slides").animate({"margin-left":'+=' + bigWidth + "px"}, animLen);
        slideCounter = first;
    } else {
        $(".slides").animate({"margin-left":"-=" + width  + "px"}, animLen);
        slideCounter++;
    }
});

/*
    Same priciples as the previous function, but instead checks if we are on
    the first image.
*/
$lArrow.click( function() {
    if($slides.children("li").filter(".img" + slideCounter).hasClass("first-image")) {
        $(".slides").animate({"margin-left":"-=" + bigWidth + "px"}, animLen)
        slideCounter = last;
    } else {
        $(".slides").animate({"margin-left":"+=" + width  + "px"}, animLen);
        slideCounter--;
    }
    
});