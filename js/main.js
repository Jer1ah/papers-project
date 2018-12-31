// Adding navbar scroll functionality

$(window).on("scroll", () => {
    if( $(window).scrollTop() > 55 ) {
        $(".header__nav").addClass("active");
    } else {
        $(".header__nav").removeClass("active")
    }
});


// Adding slide up effect on blog divs

// first 
$(".first").on("mouseover", () => {
    $(".firstSlide").slideDown(200);
});
$(".first").on("mouseout", (evt) => {
    $(".firstSlide").slideUp(200);
});

// second
$(".second").on("mouseover", () => {
    $(".secondSlide").slideDown(200);
});
$(".second").on("mouseout", (evt) => {
    $(".secondSlide").slideUp(200);
});

// third
$(".third").on("mouseover", () => {
    $(".thirdSlide").slideDown(200);
});
$(".third").on("mouseout", (evt) => {
    $(".thirdSlide").slideUp(200);
});

