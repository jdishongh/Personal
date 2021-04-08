var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.addEventListener("keydown",movement, false);
window.onload = loadImage;

function loadImage(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  var img = document.getElementById("bear");
  ctx.drawImage(img, x, y,50,30);
}
x = 15;
y = 10;
function movement(e){
  switch(e.keyCode){
    case 37:
      x -= 5;
      break;
    case 38:
      y -= 5;
      break;
    case 39:
      x += 5;
      break;
    case 40:
      y += 5;
      break;
  }
  if(x < 0) {
    x = 0;
  }
  if(y < 0) {
    y = 0;
  }
  if(x > canvas.width - 50){
    x = canvas.width - 50;
  }
  if(y > canvas.height - 30){
    y = canvas.height - 30;
  }
  loadImage();
}
