const div1 = $("#p1");
const div2 = $("#p2");
const div3 = $("#p3");
const div4 = $("#p4");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const b1 = document.getElementById("b1");

$("#b1").click(function(){
    $("#c3").animate({opacity: 0}, "slow", function() {
        c3.style.display="none";
    });
    $("#c4").animate({opacity: 0}, "slow", function() {
        c4.style.display="none";
    });
    $("#c2").animate({opacity: 0}, "slow", function() {
        c2.style.display="none";
        div2.animate({width: '3vw'}, "slow");
        div3.animate({width: '3vw'}, "slow");
        div4.animate({width: '3vw'}, "slow");
        $("#b1").animate({opacity: 0}, "slow", function() {
            b1.style.display = "none";
        });
        div1.animate({width: '91vw'}, "slow", function() {
            c2.style.display="none";
            c2.style.opacity=0;
            c3.style.display="none";
            c3.style.opacity=0;
            c4.style.display="none";
            c4.style.opacity=0;
            c1.style.display="flex";
            $("#c1").animate({opacity: 1}, "slow");
        });
    });
});

$("#b2").click(function(){
    $("#c3").animate({opacity: 0}, "slow", function() {
        c3.style.display="none";
    });
    $("#c4").animate({opacity: 0}, "slow", function() {
        c4.style.display="none";
    });
    $("#c1").animate({opacity: 0}, "slow", function() {
        c1.style.display="none";
        div1.animate({width: '3vw'}, "slow");
        div3.animate({width: '3vw'}, "slow");
        div4.animate({width: '3vw'}, "slow");
        b1.style.display="flex";
         $("#b1").animate({opacity: 0.8}, "slow");
        div2.animate({width: '91vw'}, "slow", function() {
            c1.style.display="none";
            c1.style.opacity=0;
            c3.style.display="none";
            c3.style.opacity=0;
            c4.style.display="none";
            c4.style.opacity=0;
            c2.style.display="flex";
            $("#c2").animate({opacity: 1}, "slow");
        });
    });
});

$("#b3").click(function(){
    $("#c2").animate({opacity: 0}, "slow", function() {
        c2.style.display="none";
    });
    $("#c4").animate({opacity: 0}, "slow", function() {
        c4.style.display="none";
    });
    $("#c1").animate({opacity: 0}, "slow", function() {
        c1.style.display="none";
        div1.animate({width: '3vw'}, "slow");
        div2.animate({width: '3vw'}, "slow");
        div4.animate({width: '3vw'}, "slow");
        b1.style.display="flex";
        $("#b1").animate({opacity: 0.8}, "slow");
        div3.animate({width: '91vw'}, "slow", function() {
            c1.style.display="none";
            c1.style.opacity=0;
            c2.style.display="none";
            c2.style.opacity=0;
            c4.style.display="none";
            c4.style.opacity=0;
            c3.style.display="flex";
            $("#c3").animate({opacity: 1}, "slow");
            
        });
    });
});

$("#b4").click(function(){
    $("#c3").animate({opacity: 0}, "slow");
    $("#c2").animate({opacity: 0}, "slow");
    $("#c1").animate({opacity: 0}, "slow", function() {
        c1.style.display="none";
        div1.animate({width: '3vw'}, "slow");
        div3.animate({width: '3vw'}, "slow");
        div2.animate({width: '3vw'}, "slow");
        b1.style.display="flex";
        $("#b1").animate({opacity: 0.8}, "slow");
        div4.animate({width: '91vw'}, "slow", function() {
            c1.style.display="none";
            c1.style.opacity=0;
            c3.style.display="none";
            c3.style.opacity=0;
            c2.style.display="none";
            c2.style.opacity=0;
            c4.style.display="flex";
            $("#c4").animate({opacity: 1}, "slow");
            
        });
    });
});

var cursor0 = document.getElementById("cursor0");
var cursor1 = document.getElementById("cursor1");
var cursor2 = document.getElementById("cursor2");
document.onmousemove = function (e) {
    cursor0.style.left = (e.pageX+30) + "px";
    cursor0.style.top = (e.pageY+20) + "px";
    cursor1.style.left = (e.pageX+45) + "px";
    cursor1.style.top = (e.pageY+20) + "px";
    cursor2.style.left = (e.pageX+55) + "px";
    cursor2.style.top = (e.pageY+20) + "px";
    cursor0.style.display="block";
    cursor1.style.display="block";
    cursor2.style.display="block";
};
document.onscroll = function () {
    cursor0.style.display="none";
    cursor1.style.display="none";
    cursor2.style.display="none";
}