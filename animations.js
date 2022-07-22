
var cursor0 = document.getElementById("cursor0");
var cursor1 = document.getElementById("cursor1");
var cursor2 = document.getElementById("cursor2");
function moveDumplings(c0, c1, c2) {
    cursor0.style.left = (e.pageX+15) + "px";
    cursor0.style.top = (e.pageY+15) + "px";
    cursor1.style.left = (e.pageX+30) + "px";
    cursor1.style.top = (e.pageY+15) + "px";
    cursor2.style.left = (e.pageX+45) + "px";
    cursor2.style.top = (e.pageY+15) + "px";
    cursor0.style.display="block";
    cursor1.style.display="block";
    cursor2.style.display="block";
};
document.onscroll = function () {
    cursor0.style.display="none";
    cursor1.style.display="none";
    cursor2.style.display="none";
}