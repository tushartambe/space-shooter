const addPixelSuffix = input => input + "px";

const getScreen = document => document.getElementById("screen");

const moveSpaceShip = function(document, spaceShip) {
  if (event.key == "ArrowRight" && spaceShip.left < 960 - spaceShip.width) {
    spaceShip.moveRight();
  }
  if (event.key == "ArrowLeft" && spaceShip.left > 0) {
    spaceShip.moveLeft();
  }
  drawSpaceShip(document, spaceShip);
};

const initializeSpaceShip = function(document, spaceShip) {
  let screen = getScreen(document);

  let spaceShipDiv = document.createElement("div");
  spaceShipDiv.className = "spaceShip";
  spaceShipDiv.id = "spaceShip_1";
  screen.appendChild(spaceShipDiv);
  spaceShipDiv.innerHTML =
    '<img src="ship1.png" alt="spaceship" class="space_1" />';
  screen.tabIndex = "0";
  screen.focus();
  screen.onkeydown = moveSpaceShip.bind(null, document, spaceShip);
};

const drawSpaceShip = function(document, spaceShip, image) {
  let spaceShipDiv = document.getElementById("spaceShip_1");

  spaceShipDiv.style.width = addPixelSuffix(spaceShip.width);
  spaceShipDiv.style.height = addPixelSuffix(spaceShip.height);
  spaceShipDiv.style.bottom = addPixelSuffix(spaceShip.bottom);
  spaceShipDiv.style.left = addPixelSuffix(spaceShip.left);
};

const drawBullet = function(document, bulletDiv, bullet) {
  bulletDiv.style.width = addPixelSuffix(bullet.width);
  bulletDiv.style.height = addPixelSuffix(bullet.height);
  bulletDiv.style.bottom = addPixelSuffix(bullet.bottom);
  bulletDiv.style.left = addPixelSuffix(bullet.left);
};

const initializeBullet = function(document, bullet) {
  let screen = getScreen(document);
  let bulletDiv = document.createElement("div");
  screen.appendChild(bulletDiv);
  bulletDiv.className = "bullet";
  bulletDiv.id = "bullet_1";
};

const drawObstacle = function(document, obstacleDiv, obstacle) {
  obstacleDiv.style.width = addPixelSuffix(obstacle.width);
  obstacleDiv.style.height = addPixelSuffix(obstacle.height);
  obstacleDiv.style.bottom = addPixelSuffix(obstacle.bottom);
  obstacleDiv.style.left = addPixelSuffix(obstacle.left);
};

const initializeObstacle = function(document, obstacle) {
  let screen = getScreen(document);
  let obstacleDiv = document.createElement("div");
  screen.appendChild(obstacleDiv);
  obstacleDiv.className = "obstacle";
  obstacleDiv.id = "obstacle_1";
  drawObstacle(document, obstacleDiv, obstacle);
};

const fireBullet = function(document, bullet, obstacle) {
  let bulletDiv = document.getElementById("bullet_1");
  let obstacleDiv = document.getElementById("obstacle_1");
  let start = setInterval(() => {
    if (bullet.bottom > 700) {
      let spaceShip = document.getElementById("spaceShip_1");
      let left = +spaceShip.style.left.replace("px", "") + 30;
      bullet = new Bullet(10, 20, left, 75, 10);
      initializeBullet(document, bullet);
    }
    obstacle.isShooted(bullet);
    // console.log(bullet);
    obstacle.moveObstacle();
    drawObstacle(document, obstacleDiv, obstacle);
    bullet.shootBullet();
    drawBullet(document, bulletDiv, bullet);
  }, 10);
  screen.onkeydown = start;
};

const initilize = document => {
  let spaceShip = new SpaceShip(70, 70, 430, 5, 20);
  let bullet = new Bullet(10, 20, 460, 75, 10);
  let obstacle = new Obstacle();
  initializeSpaceShip(document, spaceShip, "ship1.png");
  drawSpaceShip(document, spaceShip);
  initializeBullet(document, bullet);
  initializeObstacle(document, obstacle);
  // drawObstacle(document, obstacle);
  fireBullet(document, bullet, obstacle);
};

window.onload = initilize.bind(null, document);
