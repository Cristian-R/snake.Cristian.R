var snake;
             
var context;
var screenWidth;
var screenHeight;

gameInitialize();

gameDraw();

function gameInitialize(){
  var canvas = document.getElementById('game-screen');
  context = canvas.getContext('2d');
  
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  
  canvas.Width = screen.Width;
  canvas.Height = screen.Height; 
}
function gameLoop(){
    
}
function gameDraw(){
  context.fillStyle = 'rgb(8, 22,63 )';
  context.fillRect(0, 0, screenWidth, screenHeight);
}