

function setup() 
{
  createCanvas (windowWidth, windowHeight);
}


function draw() 
{
  //isto é só para mim
  background( random(0, 255), random(0, 255), random(0, 255) );

  fill (255);
  stroke (255, 0, 0);
  strokeweight (8);
  rectMode (CENTER);
  rect (width/2, height/2, 250, 250);

  fil (0, 255, 0);
  noFill ();
  ellipseMode (CORNER);
  ellipse(width/2, height/2, 200, 200);

  line (width/2, 0, width/2, height);

  point (20,20);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
