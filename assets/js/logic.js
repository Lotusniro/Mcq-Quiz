
//select all the important elements
var startBtn = document.querySelector("#start");
var timeBtn = document.querySelector("#time");
var feedback = document.querySelector("#feedback");
var screen =document.querySelector("#start-screen");
let title = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
var questionDiv =document.querySelector("#questions")

//main variables
  let qIndex = 0;
  let clock = 100;
  let timing;
//when start button is clicked
//four main things will happen 
//timer will start, screen will hide, question will appear, and starttheQuiz function will run
//time interval will start at 100 and will clear when quiz is over
//start timer will reduce by 1 second

startBtn.addEventListener("click",()=>{

 timing = setInterval(()=>{
  //run and set the timer
  //when time meets 0 end the quiz by calling endtheQuiz function
  //to hide the screen add the hide class from css
 clock--;
 timeBtn.textContent = clock;

if(clock==0){
    endtheQuiz()
}


 },1000)
 screen.setAttribute("class","hide");
 questionDiv.removeAttribute("class");
 starttheQuiz();
})

//start the quiz function
//get the question element and set the text content to the question
function starttheQuiz() {
  var currentQuestion = questions[qIndex];
var title = document.getElementById("question-title")
title.textContent = currentQuestion.question;
//choices.innerHTML = ""; will clear the choices 
//if not cleared it will keep adding the choices to the previous question
//also we need to add the choices to choices div
  choices.innerHTML = "";
  currentQuestion.answers.forEach(function(item) {
      var choiceBtn = document.createElement("button");

      choiceBtn.setAttribute("value", item);
     
     
      choiceBtn.textContent = item;
      choiceBtn.addEventListener("click", choiceClick);
     
      choices.appendChild(choiceBtn);
  });
}



function choiceClick() {
  
  if (this.value !== questions[qIndex].correctAnswer) {
  //   console.log(this.value);
  //  console.log(this.value===questions[qIndex].correctAnswer);
//set audio sound for wrong answer
var audio = new Audio('assets/sfx/incorrect.wav');
audio.play();

   clock -= 10;
    if (clock < 0) {
      clock = 0;
    }
   
   
    feedback.textContent = "Wrong!";
} else {
  var audio = new Audio('assets/sfx/correct.wav');
audio.play();
   feedback.textContent = "Correct!";
  }
  feedback.setAttribute("class", "feedback");

    // setTimeout(() => {
    //     feedback.setAttribute("class", " hide");
    // }, 1000);
     qIndex++;
   
    if (qIndex === questions.length) {
        endtheQuiz();
    } else {
        starttheQuiz();
    }
} 

function endtheQuiz() {
  clearInterval(timing);
  var endScreen = document.querySelector("#end-screen");
  endScreen.removeAttribute("class");
  var finalScore = document.querySelector("#final-score");
  finalScore.textContent = clock;
  questionDiv.setAttribute("class", "hide");
};
// -----------------save high score-----------------
document.getElementById("submit").addEventListener("click", saveHighScore);

function saveHighScore() {
  var initial = initials.value.trim();
  //trim will remove the white space
  if (initial !== "") {
    //if the initials are already in the local storage(user already played the game)
    //then get the initials and score from the local storage
    //else set the initials and score to empty array
    //then push the new score to the local storage as an object using JSON.stringify

var highscores =JSON.parse(window.localStorage.getItem("highscores")) || [];
//if there is highscores already in the local store get it or return empty array to push the new score

      var newScore = {
          score: clock,
          initials: initials.value.trim()//trimm all the white space
      };
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));

  }else{
    alert("please enter your initials")
  }

};
 





