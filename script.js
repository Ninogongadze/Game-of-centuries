const playerscore=0;
const computerscore=0;
const playerscore_span = document.getElementById("player-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".Result");
const Archeer_div = document.getElementById("A");
const cavalry1_div = document.getElementById("C");
const pikeman_div = document.getElementById("P");



 function getcomputerchoice() {
     const choices =['A', 'C', 'P'];
 }


const obe = [0,1,2];

function getRandomInt(numb) {
    // console.log(numb[Math.floor(Math.random()*numb.length)]);
    return numb[Math.floor(Math.random()*numb.length)];
}


document.querySelectorAll('.img').forEach((element, id) => {
    element.addEventListener('click', function() {
        getRandomInt(obe);
        
        console.log(element, id, getRandomInt(obe))
        if(id > getRandomInt(obe)){
            console.log('moige')
        }
        
        if (id == getRandomInt(obe)){
            console.log('orivem waaget')
        }
        
        if(id < getRandomInt(obe)){
            console.log('luzeri xar, waage')
        }
        
    })
});
