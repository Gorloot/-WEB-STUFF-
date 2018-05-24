// retrieve ids to make it into var
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Point = document.querySelector("#p1p");
var p2Point = document.querySelector("#p2p");
var reset = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;
// not over
var gameOver = false;

var winningScore = 7;

p1Button.addEventListener("click",function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
        gameOver = true;
    }
    p1Point.textContent = p1Score;
    }
});

p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
        }
        p2Point.textContent = p2Score;
        }    
});

resetB.addEventListener("click",function(){
   reset()

});

function reset(){
    p1Score=0;
    p2Score=0;
    p1Point.textContent = p1Score;
    p2Point.textContent = p2Score;
    p1Point.classList.remove("winner");
    p2Point.classList.remove("winner");
    gameOver = false;

}
;

//"change" works when value is typed in
// textcontent = inputvalue allows real time change
// set winning score as input value
// Number set numbinput into variable from string
numInput.addEventListener("change",function(){
    winningPoint.textContent=numInput.value;
    winningScore = Number(numInput.value);
    reset()
}
);
