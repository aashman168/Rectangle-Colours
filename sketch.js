var fixedrectangle, movingrectangle

function setup() {  
  createCanvas(800,400);

  fixedrectangle=createSprite(200,200,60,30);
  movingrectangle=createSprite(100,300,60,30);

  fixedrectangle.shapeColor="red";
  movingrectangle.shapeColor="red";
  
  fixedrectangle.debug=true;
  movingrectangle.debug=true;
  

}

function draw() {
  background(255,255,255);  
movingrectangle.y=World.mouseY;
movingrectangle.x=World.mouseX;

if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2
  && fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2
  && movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2+movingrectangle.height/2
  && fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+movingrectangle.height/2){
movingrectangle.shapeColor="red";
fixedrectangle.shapeColor="red";
}
else{
  movingrectangle.shapeColor="green";
  fixedrectangle.shapeColor="green";

}

  drawSprites();
}