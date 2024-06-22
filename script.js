let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2=document.querySelector('h2');
let btns=['red','green','yellow','purple'];


let start=document.querySelector(".start");
start.addEventListener('click',function(){
    if(started == false){
        console.log("Game is Started.");
        started=true;
        start.style.backgroundColor="#97ff97"
        start.innerText="PLAYING"
        levelUp();
        for(let btn of allBtns){
            btn.classList.remove('disabled');
        }
    }
});
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },350);
}
function gameFlash(btn){
    btn.classList.add('white');
    setTimeout(function(){
        btn.classList.remove('white');
    },350);
}
function randBtn(){
    let randIdx=Math.floor(Math.random()*4);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randBtn.id);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    userSeq = [];
    randBtn();
}
function ansCheck(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerText="Game Over. Press the start button to play again.";
        resetGame();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    ansCheck(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(let btn of allBtns){
    btn.addEventListener('click',btnPress);
    btn.classList.add('disabled');
}
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    start.innerText = "START";
    start.style.backgroundColor = "rgb(103, 251, 103)";
    for (let btn of allBtns) {
        btn.classList.add('disabled');
    }
}