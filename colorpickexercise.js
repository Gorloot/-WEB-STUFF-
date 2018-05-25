var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickcColor(); //try to make this random variable
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
   
   //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listerner
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent="correct"
            changeColors(clickedColor); //pass function of clicked color if guess correctly
        }else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="try again";
        }
        
    }

);
}
