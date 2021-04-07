var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.play();

    //create 4 different surfaces
    block1 = createSprite(90,585,200,20);
    block1.shapeColor = rgb(51, 51, 255);
    block2 = createSprite(300,585,200,20);
    block2.shapeColor = rgb(255, 102, 0);
    block3 = createSprite(510,585,200,20);
    block3.shapeColor = rgb(204, 0, 153);
    block4 = createSprite(720,585,200,20);
    block4.shapeColor = rgb(51, 204, 51);

    //create box sprite and give velocity
    box = createSprite(400,200,50,50);
    box.velocityX = -4;
    box.velocityY = 9;
}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    if(box.bounceOff(block1)){
        box.shapeColor = rgb(51, 51, 255);

    }
    if(box.bounceOff(block2)){
        box.shapeColor = rgb(255, 102, 0);

    }
    if(box.bounceOff(block3)){
        box.shapeColor = rgb(204, 0, 153);

    }
    if(box.bounceOff(block4)){
        box.shapeColor = rgb(51, 204, 51);
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }
   
    //add condition to check if box touching surface and make it box

    drawSprites();
}
