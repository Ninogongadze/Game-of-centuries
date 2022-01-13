var player=null;
var computer=null;
var playerscore=0;
var compscore=0;
var gameLevel=0
const userscoreSpan=document.getElementById("Player-score");
const compiutercoreSpan=document.getElementById("Computer-score");
const userplayerlabel=document.getElementById("userplayerlabel");
const computerplayerlabel=document.getElementById("computerplayerlabel");
const gameLevelLable=document.getElementById("gameLevelLable");
const winnerLabel=document.getElementById("winnerLabel");

 document.getElementById('archer').addEventListener('click',function ()
 {
  chooseArcher();
  });

  document.getElementById('cavalry').addEventListener('click',function () {
   
    chooseCavalry();
  
    });

    document.getElementById('pikeman').addEventListener('click',function () {
   
      choosePikeman();
    
      });

  function choosecomputerPlayer()
  {
    var randomnumber=Math.floor(Math.random() * 4).toString();


    switch (randomnumber) {
   
      case "0":
        computer=new warrior("cavalry","archer","pikeman");
        break;
    
        case "1":
          computer=new warrior("archer","pikeman","cavalry");
        break;
        case "2":
          computer=new warrior("pikeman","cavalry","archer");
        break;

       

      default:
        break;
    }
  }

  function chooseArcher()
  {
   
    player=new warrior("cavalry","archer","pikeman");
    
    choosecomputerPlayer();

    userplayerlabel.innerHTML=player.name;
    computerplayerlabel.innerHTML=computer.name;
    StartGame();

  }

  function choosePikeman()
  {

    player=new warrior("cavalry","archer","pikeman");
    choosecomputerPlayer();

    userplayerlabel.innerHTML=player.name;
    computerplayerlabel.innerHTML=computer.name;

    StartGame();

  }

  function chooseCavalry()
  {

    player=new warrior("archer","pikeman","cavalry");
    choosecomputerPlayer();

    userplayerlabel.innerHTML=player.name;
    computerplayerlabel.innerHTML=computer.name;

    StartGame();
  }

function StartGame()
{

  gameLevel+=1;

  gameLevelLable.innerHTML=gameLevel;

 if(player.defeats==computer.name)
{
  playerscore+=1;

  if(compscore>0)
  compscore-=1;
}
else if(player.defeated==computer.name)
{
 
  if(playerscore>0)
  playerscore-=1;

  compscore+=1;
}
else if(player.name==computer.name) 
{
  if(playerscore>0)
  playerscore-=1;

  if(compscore>0)
  compscore-=1;


}

  compiutercoreSpan.innerHTML=compscore;
  userscoreSpan.innerHTML=playerscore;

  if(gameLevel==20)
  {
  
    debugger;

if(playerscore>compscore)
{
  winnerLabel.innerHTML="Winner is Player";
}
else if(playerscore<compscore) 
{
  winnerLabel.innerHTML="Winner is Computer";

}
else if (playerscore==compscore)
{
  winnerLabel.innerHTML="It is draw";

}

playerscore=0;
compscore=0;
winnerLabel.innerHTML=".";

gameLevel=0;

  }

}

function Game(player,comuter)
{
while (player.power>0) {
  
  player.power-=computer.power

}  
}

class warrior
{
  constructor(defeats, defeated,name){

    this.defeats=defeats;
    this.defeated=defeated;
    this.name=name;
  }
  
}

class archer {
  
  defeats="pikeman";
  defeated="cavalry";
  name="archer";
}

class cavalry {

  defeats="archer";
  defeated="pikeman";
  name="cavalry";

}

class pikeman {
  defeats="cavalry";
  defeated="archer";

  name="pikeman";

}

function winner() {
  if(gameLevel==20)
    document.getElementById("winner").innerHTML = "Game is Over!";
} 