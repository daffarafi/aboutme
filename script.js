let scroll = 0;
let width = $("main .port .container .portfolio .image").innerWidth();
let point = $("main .port .container .portfolio .point i");
$(".left").click(function () {
    if (scroll == 0) {
        return;
    } else {
        scroll += width;
    }

    $(".image img").animate({ left: `${scroll}px` }, 300);

    let x = scroll / -width;
    point.eq(x).css("color", "turquoise");
    point.eq(x + 1).css("color", "white");
    if (scroll == 0) {
        $(".arrow .left").css("opacity", "0.5");
    } else if (scroll == -width * 4) {
        $(".arrow .right").css("opacity", "0.5");
    } else {
        $(".arrow .right").css("opacity", "1");
        $(".arrow .left").css("opacity", "1");
    }
});
$(".right").click(function () {
    if (scroll == -width * 3) {
        return;
    } else {
        scroll -= width;
    }
    $(".image img").animate({ left: `${scroll}px` }, 300);

    let x = scroll / -width;
    point.eq(x).css("color", "turquoise");
    point.eq(x - 1).css("color", "white");
    if (scroll == 0) {
        $(".arrow .left").css("opacity", "0.5");
    } else if (scroll == -width * 3) {
        $(".arrow .right").css("opacity", "0.5");
    } else {
        $(".arrow .right").css("opacity", "1");
        $(".arrow .left").css("opacity", "1");
    }
});

let shapes = Array.from(document.getElementsByClassName("shape1"));
let shapesmenu = Array.from(document.getElementsByClassName("shape2"));
let shapesParent = document.querySelector(".bg .shape");

$(".menu").click(function () {
    $("nav .container .port").toggleClass("active");
    $(".bottom .container .review").toggleClass("active");
    $("menu").toggleClass("active");
    $(".menu").toggleClass("active");
    $(".menu p").toggleClass("active");
    $(".menu a").toggleClass("active");
    $(".menu a .hamburger hr").toggleClass("active");
    $(".bg").toggleClass("active");
    $(".bg .shape .shape1").toggleClass("active");
    $(".bg .shape .shape2").toggleClass("active");
    $(".bg .squareout .sql").toggleClass("active");
    $(".bg .squareout .sqr").toggleClass("active");
    $("main").toggleClass("active");
    $("menu div").toggleClass("active");
});
