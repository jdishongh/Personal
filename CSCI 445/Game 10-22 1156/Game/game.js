
$(document).ready(function(){
  var can = document.getElementById("myCanvas");
  var ctx = can.getContext('2d');
  var playerImg = document.getElementById("player");
  var crosshairImg = document.getElementById("crosshair");
  var enemyImg = document.getElementById("enemy");
  var bulletImg = document.getElementById("bullet");
  var groundImg = document.getElementById("ground");


  menuOpen = false;

  playerX = 50;
  playerY = 50;
  pSpeed = 3;
  pHeight = 40;
  pWidth = 40;
  crosshairSize = 25;
  enemyHeight = 40;
  enemyWidth = 40;
  projectileWidth = 10;
  projectileHeight = 10;
  bulletLimit = 20;
  playerHealth = 3;
  $("#limit").html("Bullet Limit: " + bulletLimit);
  $("#health").html("Player Health: " + playerHealth);

  numberOfEnemies = 1;
  levelNumber = 1;
  var mousex = 0;
  var mousey = 0;

  var moveUp = false;
  var moveDown = false;
  var moveRight = false;
  var moveLeft = false;

  var projectileList=[];
  var enemyProjectileList=[];
  var enemyList=[];

  class Enemy {
    constructor(startX, startY) {
      this.X = startX;
      this.Y = startY;
      this.shouldDraw = true;
    }
    update() {

    }
    draw() {
      ctx.drawImage(enemyImg, this.X, this.Y, pWidth, pHeight);
    }
    getX() {
      return this.X;
    }
    getY() {
      return this.Y;
    }
  }

  class Projectile{
      constructor(startX,startY,endX,endY, enemyBoolean){
          this.X = startX;
          this.Y = startY;
          dx = endX - startX;
          dy = endY - startY;
          this.shouldDraw = true;
          this.enemyProjectile = enemyBoolean;

          var magnitude = Math.sqrt(dx * dx + dy * dy);
          this.dx = dx / magnitude;
          this.dy = dy / magnitude;
          console.log(this.dx,this.dy,magnitude);
      }
      update(){
        if(this.getX() >= 0 && this.getY() >= 0 && this.getX() <= can.width && this.getY() <= can.height) {
          this.X += this.dx;
          this.Y += this.dy;
        }
        else {
          this.shouldDraw = false;
        }
      }
      draw(){
          ctx.drawImage(bulletImg, this.X, this.Y, 10, 10);
      }
      getX() {
        return this.X;
      }
      getY() {
        return this.Y;
      }
      getDrawBool() {
        return this.shouldDraw;
      }
      collide() {
        for(i of enemyList) {
          if(i.shouldDraw && this.getX() <= i.X + enemyWidth && this.getX() + projectileWidth >= i.X && this.getY() <= i.Y + enemyHeight && this.getY() + projectileHeight >= i.Y) {
            this.shouldDraw = false;
            i.shouldDraw = false;
            numberOfEnemies--;
          }
        }
      }

      collide2() {
        if(this.getX() <= playerX + pWidth && this.getX() + projectileWidth >= playerX && this.getY() <= playerY + pHeight && this.getY() + projectileHeight >= playerY) {
            this.shouldDraw = false;
            playerHealth--;
            $("#health").html("Player Health: " + playerHealth);
            $("#health").slideUp(200).slideDown(200);
        }
      }
  }

  $(window).keydown(function(e){
      //console.log(e.keyCode);
      switch(e.keyCode) {
          case 65:
              // left key pressed
              moveLeft = true;
              break;
          case 87:
              // up key pressed
              moveUp = true;
              break;
          case 68:
              // right key pressed
              moveRight = true;
              break;
          case 83:
              // down key pressed
              moveDown = true;
              break;
          case 77:
            // m pressed
            if(menuOpen){
                menuOpen = false;
                $("#menuArea").css("display", "none");
                $("#gameArea").css("display", "grid");
                $("#info").css("display", "grid");
                $("#animation").css("display", "grid");
            }else{
                menuOpen = true;
                $("#menuArea").css("display", "grid");
                $("#gameArea").css("display", "none");
                $("#info").css("display", "none");
                $("#animation").css("display", "none");
            }

            break;
      }
  });

  $(window).keyup(function(e){
      //console.log(e.keyCode);
      switch(e.keyCode) {
          case 65:
              // left key pressed
              moveLeft = false;
              break;
          case 87:
              // up key pressed
              moveUp = false;
              break;
          case 68:
              // right key pressed
              moveRight = false;
              break;
          case 83:
              // down key pressed
              moveDown = false;
              break;
      }
  });

  function generateTargets(levelCount){
      switch(levelCount){
          case 1:
              enemyList = [];
              enemyList.push(new Enemy(100,100), new Enemy(250, 250), new Enemy(350, 350));
              numberOfEnemies = 3;
              break;
          case 2:
              enemyList = [];
              enemyList.push(new Enemy(400, 400),new Enemy(500,100),new Enemy(450,500),new Enemy(250, 250),new Enemy(250, 500));
              numberOfEnemies = 5;
              break;
          case 3:
            enemyList = [];
            enemyList.push(new Enemy(200,100),new Enemy(100,500),new Enemy(400,550),new Enemy(400,100),new Enemy(100,300),new Enemy(500,550),new Enemy(50,100), new Enemy(100,50));
            numberOfEnemies = 8;
              break;
          default:
              break;
      }

  }
  function drawBackground(){
      ctx.clearRect(0, 0, can.width, can.height);
      ctx.drawImage(groundImg, 0, 0, can.width, can.height);
  }

  function drawPlayer(){
      ctx.drawImage(playerImg, playerX, playerY, pWidth, pHeight);
      ctx.drawImage(crosshairImg, mousex-crosshairSize/2, mousey-crosshairSize/2, crosshairSize, crosshairSize);
  }

  can.addEventListener('mousemove', function(e){
      var rect = can.getBoundingClientRect();
      mousex = e.clientX - rect.left;
      mousey = e.clientY - rect.top;
  });

  can.addEventListener('click',function(e){
    if(bulletLimit > 0) {
      let playerProjectile = new Projectile(playerX,playerY,mousex,mousey, false);
      projectileList.push(playerProjectile);

      for(i of enemyList) {
        if(i.shouldDraw) {
          enemyProjectileList.push(new Projectile(i.getX(), i.getY(), playerX, playerY, true));
          enemyProjectileList.push(new Projectile(i.getX(), i.getY(), can.width/2, can.height/2, true));
        }
      }

      bulletLimit--;
      $("#limit").html("Bullet Limit: " + bulletLimit);
    }
  });

  function updateProjectiles(){
      for(i of projectileList){
        if(i.shouldDraw) {
          i.update();
          i.draw();
          i.collide();
        }
      }
  }

  function updateEnemies(){
      for(i of enemyList){
          if(i.shouldDraw) {
            i.update();
            i.draw();
          }
      }
  }

  function updateEnemeyProjectiles(){
      for(i of enemyProjectileList){
        if(i.shouldDraw) {
          i.update();
          i.draw();
          i.collide2();
        }
      }
  }

  window.main = function () {

      if( playerHealth == 0) {
        $("#gameArea").css("display", "none");
        $("#info").css("display", "none");
        $("#animation").css("display", "none");
        $("#menuArea").css("display", "grid");
        $("#playButton").css("display", "none");
        $("#title").css("display", "none");
        $("#end").text("Game Over").css("data-text","Game Over");
        $("#end").css("display","grid"); 
        $("#lose").css("display","grid");
      }

      if(numberOfEnemies == 0) {
        levelNumber++;
        generateTargets(levelNumber);
      }

      window.requestAnimationFrame( main );
      dx = 0;
      dy = 0;

      if(moveUp){
          dy -= pSpeed;
      }
      if(moveDown){
          dy += pSpeed;
      }
      if(moveLeft){
          dx -= pSpeed;
      }
      if(moveRight){
          dx += pSpeed;
      }

      drawBackground();

      updateProjectiles();
      updateEnemies();
      updateEnemeyProjectiles();

      playerX += dx;
      playerY += dy;

      if(playerX<0)playerX=0;
      if(playerY<0)playerY=0;
      if(playerX>can.width-pWidth)playerX=can.width-pWidth;
      if(playerY>can.height-pHeight)playerY=can.height-pHeight;

      if(levelNumber == 3 && numberOfEnemies == 0){
        $("#gameArea").css("display", "none");
        $("#info").css("display", "none");
        $("#animation").css("display", "none");
        $("#menuArea").css("display", "grid");
        $("#playButton").css("display", "none");
        $("#title").css("display", "none");
        $("#end").text("Game Over").css("data-text","Game Over");
        $("#end").css("display","grid"); 
        $("#win").css("display","grid");
      }

      // Whatever your main loop needs to do
      drawPlayer();
  }

  generateTargets(1);
  $("#playButton").click(function(){
    $("#menuArea").css("display", "none");
    $("#gameArea").css("display", "grid");
    $("#info").css("display", "grid");
    $("#animation").css("display", "grid");
  });
  $("#menuArea").css("display", "grid");
  $("#gameArea").css("display", "none");
  $("#info").css("display", "none");
  $("#animation").css("display", "none");
  main(); // Start the cycle
});
