$("a[href^='#']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    }, 1000);
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
