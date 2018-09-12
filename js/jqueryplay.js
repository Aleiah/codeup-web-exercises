$(function() {
    //
    // $("#panel2").slideup(1000).slideDown(1500).hide(1200);
    // $("#panel3")
    $("#btn1").click(function() {
        $("#panel1").slideToggle(1000).delay(950).slideToggle(1000);
        $("#panel2").slideToggle(1000).delay(1000).slideToggle(1000);
        $("#panel3").slideToggle(1000).delay(1050).slideToggle(1000);
        $("#panel4").slideToggle(1000).delay(1090).slideToggle(1000);

    });

    $("#btn2").dblclick(function () {
        $("#panel2").toggle(1000);
    });

    $("#btn3").mouseover(function () {
        $("#panel3").toggleClass("highlighted");
    });

    $("#btn4").mouseover(function() {
        $("#panel4").toggleClass("highlighted");
    });

    //
    // slideUp, slideDown, slideToggle
    // show, hide, toggle
    // deley
    // fadeIn, fadeOut, fadeToggle
    // addClass, removeClass, toggleClass
    // on, click, dblclick, mouseover, hover


});
