//B1: Xác định phần tử bị tác động
var jFruit     = document.getElementById("txtFruit");
var jShowFruit = document.getElementById("btnShowFruit");
var jImgFruit  = document.getElementById("imgFruit");

//B2: Bat su kien
jShowFruit.addEventListener('click',showresult);

//B3: Khai bao chi tiet ham xu li su kien
function showresult ()
{
    var getFruit = jFruit.nodeValue;
    jImgFruit.setAttribute('src', 'images/'+getFruit+'.jpg');
}