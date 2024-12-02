let generateCreature = false;
let creatureW = 0;
let creatureH = 0;
let creatureM = 50;
let eyeSize = 35;
let mustacheStroke =25
function preload (){
  eye1 = loadImage ("file.png")
  eye2 = loadImage ("file1.png")
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width/2, height/2 )
 
  if(generateCreature){
    creatureBuilder(creatureW, creatureH, creatureM);
}
}
function creatureBuilder( creatureWidth, creatureHeight, creatureMouth ){
  //body
  fill(200,10,450)
  noStroke()
  ellipse(0,0,creatureHeight,creatureWidth)
  
  
  //Eyes
   fill(0)
  image(eye1, -creatureWidth / 8 - eyeSize / 2, -creatureHeight / 4 - eyeSize / 2, eyeSize, eyeSize);
  image(eye2, creatureWidth / 8 - eyeSize / 2, -creatureHeight / 4 - eyeSize / 2, eyeSize, eyeSize);

   circle(0, creatureHeight/4, creatureMouth);
  
  //mustache 
  stroke(255)
  strokeWeight(3)
   line(-creatureWidth/3 - mustacheStroke, -creatureHeight/4 +mustacheStroke,5,5);
  line (creatureWidth/3 + mustacheStroke , -creatureHeight/8 - mustacheStroke,5,5);
  
  //cheeks
  fill(450,50,150)
  noStroke()
  circle(creatureWidth/3, -creatureHeight/12, 25)
  circle(-creatureWidth/3, -creatureHeight/12, 25)
   
}


function mousePressed() {
  generateCreature = true;
  
  if(mouseX > width/2) {
    creatureM = random(25, 50);

  }
  if(mouseX < width/2) {
    creatureM = random(0, 25);
  }

  creatureW = 250

  if(mouseY < height/2) {
    creatureH = random(250, 500)
  }

  if(mouseY > height/2) {
    creatureH = random(50, 250)
  }

  eyeSize = random(30,120);
  mustacheStroke = random(80);
  

}