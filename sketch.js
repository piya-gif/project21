var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(0, 580, 360, 30);
surface1.shapeColor = "Red";
surface2 = createSprite(295, 580, 200, 30);
surface2.shapeColor = "yellow";
surface3 = createSprite(515, 580, 200, 30);
surface3.shapeColor = "blue";
surface4 = createSprite(740, 580, 200, 30);
surface4.shapeColor = "orange";

box = createSprite(random(20, 750),100, 40, 40);
box.shapeColor = "white";
box.velocityX=4;
box.velocityY=3;

edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    box.bounceOff(edges);

if(surface1.isTouching(box)&& box.bounceOff(surface1)){
box.shapeColor = "red";
}

if(surface2.isTouching(box)&& box.bounceOff(surface2)){
box.shapeColor = "yellow";
}
if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    box.shapeColor = "blue";
}
if(surface4.isTouching(box)&& box.bounceOff(surface4)){
    box.shapeColor = "orange";
}

drawSprites()

}