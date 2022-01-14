var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels, powerCoins;
var cars = [];
var fuelImage, powerCoinImage,lifeImage ;
var obstacle1, obstacle1Image;
//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png")
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  obstacle1 = new Group();
  obstacle2 = new Group()

  var obstaclePositions = [
    {x:width/2-150, y:height-1300, image: obstacle1Image},
    {x:width/2+250, y:height-1800, image: obstacle1Image},
    {x:width/2-180, y:height-3300, image: obstacle1Image},
    {x:width/2-150, y:height-4300, image: obstacle1Image},
    {x:width/2, y:height-5300, image: obstacle1Image},
  ]
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  if (gameState === 2) {
    game.showLeaderboard();
    //game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
