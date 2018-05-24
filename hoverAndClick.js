var lis = document.querySelectorAll("li");

for(var i = 0; i<lis.length; i++){
    lis[i].addEventListener("mouseover",function()
{
    this.style.color="green";

});
    lis[i].addEventListener("mouseout",function(){
    
    this.style.color="black";
});

    lis[i].addEventListener("click",function() //using css class to manipulate the webpage is more organized rather than declaring in JS
{
    this.classList.toggle("done");
})
};
