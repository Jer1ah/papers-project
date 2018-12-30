// Adding navbar scroll functionality

$(window).on("scroll", () => {
    if( $(window).scrollTop() > 55 ) {
        $(".header__nav").addClass("active");
    } else {
        $(".header__nav").removeClass("active")
    }
});