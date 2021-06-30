/** @format */

// variable are to be declared here
var box, edges;
function setup() {
  // create objects, canvas,initialize variables
  createCanvas(400, 400);
  box = createSprite(200, 200, 50, 50);
  edges = createEdgeSprites();
}

function draw() {
  // all the logic is written in function draw
  background("#eee");

  if (keyDown("right")) {
    box.x = box.x + 2;
  }

  if (keyDown("left")) {
    box.x = box.x - 2;
  }
  box.bounceOff(edges);

  drawSprites();
}
