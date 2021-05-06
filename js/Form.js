class Form{

    constructor(){
      this.boxInput=createInput("name");
      this.submit=createButton("press");
      this.welcome=createElement('h3');
      this.reset=createButton("Reset")
   }

    display(){

       var title=createElement('h2');
       title.html("car race");
       title.position(displayWidth/2-50,0);

       this.boxInput.position(displayWidth/2-40,displayHeight/2-80);

       this.submit.position(displayWidth/2+30,displayHeight/2);

       this.submit.mousePressed(()=>{

       player.name = this.boxInput.value();

          this.submit.hide();
          this.boxInput.hide();

          this.welcome.html("welcome " + player.name);
          this.welcome.position(displayWidth/2-70,displayHeight/4);
          playerCount+=1;
          player.index=playerCount;
          player.update();
          player.updateCount(playerCount);
          
       })

          this.reset.position(displayWidth-80,50);

          this.reset.mousePressed(()=>{

              game.updateState(0);
              player.updateCount(0);
              var playerref=database.ref('players');
              playerref.remove();

          }
          )

    }

    hidden(){

      this.submit.hide();
      this.boxInput.hide();
      this.welcome.hide();
      
    }

}