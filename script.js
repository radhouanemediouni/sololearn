// Other code

    imgObj.style.left = '0px'; 

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 1 + 'px';
}
function stop() {
    clearTimeout(animate);
    imgObj.style.left = '0px'; 
}
window.onload =init;
//-->
