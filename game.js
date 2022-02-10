

var gamepattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
function nextSequence(){
 userClickedPattern=[];
    var randomNumber = Math.floor(Math.random()*4);
var randomChosenColour=buttonColours[randomNumber];
gamepattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
playSound("sounds/"+randomChosenColour+".mp3");
level++;
$("h1").text("Level " + level);
}
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound("sounds/"+userChosenColour+".mp3");
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name)
{
    var audio=new Audio(name);
     audio.play();
}
function animatePress(currentColour)
{
    console.log("amit");
        $("#"+currentColour).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColour).removeClass("pressed"),100}
        );
        
}
var level=0;
$(document).keydown(event=>{
  
  if(level===0)
  {   $("h1").text("Level 0");
      nextSequence();
  }
 
});
function checkAnswer(currentLevel)
{  
    if(gamepattern[currentLevel]==userClickedPattern[currentLevel])
    {
        if(gamepattern.length==userClickedPattern.length)
        {   userClickedPattern=[];
            setTimeout(function(){
                nextSequence()},1000);
        }
       
    }
    else{
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")},200);
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();
    }
    
//      for(var j=0;j<currentLevel;j++)
//     {  for(var i=0;i<userClickedPattern.length;i++)
//   {
//         if(gamepattern[i]!=userClickedPattern[i])
//         {
//             $("h1").text("Game Over, Press Any Key to Restart");
//             var audio=new Audio("sounds/wrong.mp3");
//             audio.play();
//             level=0;
//             gamepattern=[];
//             userClickedPattern=[];
//             return;
//         }
        
//   }}
//   if(gamepattern.length==userClickedPattern.length)
//    {   userClickedPattern=[];
//     setTimeout(function(){
//        nextSequence()},500);
//    }
//    if(gamepattern.length<userClickedPattern.length)
//    {
//     var audio=new Audio("sounds/wrong.mp3");
//     audio.play();
//    }
}
function startOver()
{
level=0;
gamepattern=[];
}
