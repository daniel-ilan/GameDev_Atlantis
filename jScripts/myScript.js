$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });
});
    var elem = document.getElementById("gameIframe");
        function openFullscreen() {
    if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();}
