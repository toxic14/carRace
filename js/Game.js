class Game {

    constructor() {}

    getState() {

        var gamerefer = database.ref('gameState');
        gamerefer.on("value", function (data) {

            gameState = data.val();

        })

    }

    updateState(state) {

        database.ref('/').update({ gameState: state });

    }

    start() {

        if (gameState === 0) {

            form = new Form();
            form.display();

            player = new Player();
            player.getCount();

        }

        car1=createSprite(100,200);
        car1.addImage("car1",car1img)
        car2=createSprite(300,200);
        car2.addImage("car2",car2img)
        car3=createSprite(500,200);
        car3.addImage("car3",car3img)
        car4=createSprite(700,200);
        car4.addImage("car4",car4img)
        cars=[car1,car2,car3,car4]

    }

     play(){

         form.hidden();
         text("gamestart",420,300);

         Player.getplayerinfo();

         if (allplayers!==undefined){
            image(trackimages,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x= 150;
            var y;
            for (var i in allplayers){
              index+=1;
              x += 200;
              y = displayHeight-allplayers[i].distance;
              cars[index-1].x=x;
              cars[index-1].y=y;
                if (i==="player"+player.index){
                   
                   fill("red");
                   stroke(10);
                   ellipse(x,y,60,60);
                   camera.position.x = displayWidth/2;
                   camera.position.y = cars[index-1].y;

                }

            }

        

         }


         if (keyIsDown(UP_ARROW)&& player.index!==null){

            player.distance+=50;
            player.update();

         }

         if (player.distance>3800){

           gameState=2

         }


         drawSprites();

     }
     
         end(){
             console.log("game is over");
         }

}