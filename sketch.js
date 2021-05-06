var database;
var form,game,player;
var gameState=0;
var playerCount=0;
var allplayers;
var car1, car2, car3, car4;
var cars=[]
var car1img,car2img,car3img,car4img;
var trackimages;

function preload(){

car1img=loadImage("images/car1.png");
car2img=loadImage("images/car2.png");
car3img=loadImage("images/car3.png");
car4img=loadImage("images/car4.png");
trackimages=loadImage("images/track.jpg")

}

function setup(){

database=firebase.database();
createCanvas(displayWidth-20, displayHeight-30);

game=new Game();
game.start();

game.getState();

}


function draw(){

background(225);
if (playerCount===4){
    game.updateState(1);
}
if (gameState===1){

    clear();
    game.play();

}

if (gameState===2){

    game.end();

}

}