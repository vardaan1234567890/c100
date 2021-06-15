var bg
var car
var carimage
var backg
var fireball
var fireballImage

function preload(){
bg=loadImage("bg.jpg")
carimage=loadImage("car3.png")
fireballImage=loadImage("fireball.jpg")
}
function setup() {

  createCanvas(800,400);
backg=createSprite(800,200);
backg.addImage(bg);
backg.velocityX=-5
backg.scale=2.0

  car=createSprite(90,300,100,70);
  car.addImage(carimage)
  car.scale=0.5
  fireball=createSprite(90,300,100,70)
  fireball.addImage(fireballImage)
  fireball.scale=0.5
}

function draw() {
  background(0); 
if(backg.x<0){
  backg.x=800

}
  drawSprites();
}