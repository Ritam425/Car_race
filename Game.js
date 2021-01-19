class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide_details()
    text("Game Start", 200, 100)                                                           
    Player.playerInfo()
    if (allPlayers!==undefined){
      var posy = 130;
      for(var plr in allPlayers){

        if(plr === "player"+player.index)
        fill("red")
        else
        fill("black")

      posy = posy + 20
      text(allPlayers[plr].name + ":" + allPlayers[plr].distance)
      }
      
    }
  }
}
