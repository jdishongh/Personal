var c = document.getElementById("smiley");
var face = c.getContext("2d");
var button = document.getElementById("moodButton");
button.addEventListener("click",chooseMood);
var mood = true;

function head(){
  face.beginPath();
  face.arc(150, 200, 100, 0, 2 * Math.PI);
  face.fillStyle = "yellow";
  face.fill();
  face.closePath();
}
function eyes(){
  face.beginPath();
  face.fillStyle = "black";
  face.arc(100,150,20,0,2 * Math.PI);
  face.arc(200,150,20,0,2 * Math.PI);
  face.fill();
  face.closePath();
}
function happy(){
  button.innerText = "Make Me Sad";
  head();
  eyes();
  face.beginPath();
  face.strokeStyle = "green";
  face.arc(150,200,30,0,Math.PI,false);
  face.stroke();
  face.closePath();
}

function sad(){
  button.innerText = "Make Me Happy";
  head();
  eyes();
  face.beginPath();
  face.strokeStyle = "green";
  face.arc(150,220,30,Math.PI,0,false);
  face.stroke();
  face.closePath();
}
function chooseMood(){
  face.clearRect(0,0,c.width,c.height);
  mood = !mood;
  if(mood){
    happy();
  }
  else{
    sad();
  }
}
happy();
