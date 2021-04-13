const taco = $(".image-container").find("img").attr("src");

$(".small-image").hover(function (a) {
    $(".image-container").find("img").attr("src",a.target.src);
}, function (a) {
    $(".image-container").find("img").attr("src",taco);
});