var pos = 0;
var inicio = 0;
var inicio2 = 0;
const pacArray = [
  ['./PacMan1.png', './PacMan2.png'],
  ['./PacMan3.png', './PacMan4.png'],
];
var direction = 0;
var direction2 = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);
  let direction3 = 0;
  let direction4 = 0;
  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './PacMan1.png';
  newimg.width = 100;
  newimg.style.left = Math.random()*500 +'px';


  // TODO: set position here

  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
    direction3,
    direction4
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    item.direction3=checkCollisions(item,item.direction3);
    item.direction4=checkCollisions2(item,item.direction4);
    if(item.direction3==1){
    item.position.x -= item.velocity.x;
    }
    else{
      item.position.x += item.velocity.x;
    }
        if(item.direction4==1){
    item.position.y -= item.velocity.y;
    }
    else{
      item.position.y += item.velocity.y;
    }

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item,direction) {
  if(item.position.x>window.innerWidth-100){
    direction=1;
    return direction;
  }
  else if(item.position.x<0){
    direction=0;
    return direction;
  }
  return direction;

  // TODO: detect collision with all walls and make pacman bounce
}
function checkCollisions2(item,direction2) {
  if(item.position.y>window.innerHeight-100){
    direction2=1;
    return direction2;
  }
  else if(item.position.y<0){
    direction2=0;
    return direction2;
  }
  return direction2;

  // TODO: detect collision with all walls and make pacman bounce
}
function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
//don't change this line
  module.exports = { checkCollisions, update, pacMen };
