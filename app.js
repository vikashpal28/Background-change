let imgBox = document.querySelector('.img-box');
let imgWrep = document.querySelector('.img-wrep');
let originalImg = document.getElementById('originalImg');
let line = document.getElementById('line');

originalImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;
imgBox.onmousemove = function(e){
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrep.style.width = boxWidth;
    line.style.left = boxWidth;

}