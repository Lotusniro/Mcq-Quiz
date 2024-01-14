
function printScores() {
    var scores = JSON.parse(localStorage.getItem("highscores"));
if (scores===null){
    console.log(scores);
    // or return;
}else{
    scores.forEach(item=> {
        var li=document.createElement("li");
        li.textContent = item.initials +  "  👉  "  + item.score;
        document.getElementById("highscores").appendChild(li);  
    });
        
}

    }

   
document.getElementById("clear").addEventListener("click", (clearScores)=>{
    window.localStorage.removeItem("highscores");
     window.location.reload();
});

 printScores();

