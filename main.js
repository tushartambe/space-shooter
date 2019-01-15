const isInBetween = function(upper, lower, number) {
  return number > lower && number < upper;
};

const generateRandom = function(maxValue, minValue) {
  let diffrence = maxValue - minValue;
  return Math.floor(Math.random() * diffrence + minValue);
};

class SpaceShip {
  constructor(width, height, left, bottom, speed) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
    this.speed = speed;
  }
  moveLeft() {
    this.left -= this.speed;
  }
  moveRight() {
    this.left += this.speed;
  }
}

class Bullet {
  constructor(width, height, left, bottom, speed) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
    this.speed = speed;
  }

  shootBullet() {
    this.bottom = this.bottom + this.speed;
    this.bottom = this.bottom;
  }
}

class Obstacle {
  constructor() {
    this.width = generateRandom(100, 90);
    // this.width = 100;
    this.height = 20;
    this.left = generateRandom(960 - this.width, 0);
    // this.left = 400;
    this.bottom = 700;
    this.speed = 5;
  }
  moveObstacle() {
    this.bottom = this.bottom - this.speed;
  }
  isShooted(bullet) {
    if (
      isInBetween(this.left + this.width, this.left, bullet.left) &&
      this.bottom > bullet.bottom &&
      isInBetween(
        this.bottom + this.height,
        this.bottom,
        bullet.bottom + bullet.height
      )
    ) {
      this.bottom = 700;
      this.left = generateRandom(960 - this.width, 0);
    }
  }
}
