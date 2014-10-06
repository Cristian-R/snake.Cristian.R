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
  
  canvas.width = screen.Width;
  canvas.height = screen.Height; 
}
function gameLoop(){
    
}
function gameDraw(){
  context.fillStyle = 'rgb(6, 89, 161)';
  context.fillRect(0, 0, screenWidth, screenHeight);
}