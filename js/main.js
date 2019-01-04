// Adding navbar scroll functionality
$(window).on("scroll", () => {
    if( $(window).scrollTop() > 55 ) {
        $(".header__nav").addClass("active");
    } else {
        $(".header__nav").removeClass("active")
    }
});

// Mobile-Nav Functionality 
$(".mobile__nav").on("click", () => {
    if($(".header__nav--list").css("display") === "none") {
        $(".header__nav--list").css("display", "block");
    } else {
        $(".header__nav--list").css("display", "none");
    }
});

$(window).resize(() => {
    if( $(window).innerWidth() > 950 ) {
        $(".header__nav--list").css("display", "flex");
    } else if( $(window).innerWidth() < 950 ) {
        $(".header__nav--list").css("display", "none");
    }
})

// Adding slide up effect on blog divs
// first 
$(".first").hover(() => {
    $(".firstSlide").slideToggle(200);
});

// second
$(".second").hover(() => {
    $(".secondSlide").slideToggle(200);
});

// third
$(".third").hover(() => {
    $(".thirdSlide").slideToggle(200);
});

// Scroll Animations
AOS.init();




