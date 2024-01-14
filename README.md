# Mcq-Quiz
This is a Multiple Choice Question Project

## Description
This is a Multiple Choice Question Project. This project is developed using Javascript,Html and Css. This project is a MCQ Quiz. In this project, there are 5 questions with 4 options. You have to select the right option to get the score. If you lose,your score will be deducted by 10 from the time count.
You can also see your score at the end of the quiz.

```
- style css is already given with the starter folder.
- there are 3 javascriot files and two html files.
- questions.js file contains the questions and options.
- logic.js file contains the main logic of the quiz.
- score.js file contains the score of the quiz.
- index.html file contains the main html code.
- highscore.html file contains the highscore of the quiz.
- also sfx with audios are given in the assets folder.
```

```
1. addEventListener is used to start the quiz.
- when we click start button timer will be started.
- Timer is set to 100 seconds and it will be cleared when it meets the condition.(timer<=0)
- main screen will be hidden using hide class.
- questions will be displayed using remove hide class.
- hide is already given in the style.css file.(display:none)
- startQuiz() function is called when we click start button.

```

```
2. function startQuiz() is used to start the quiz.
- current question index is set to 0.
- there are 5 questions set in the array.[0,1,2,3,4]
- each time when each question index runs it will access the question property.
- this will attach to the h1 tag in the html file.
- the div tag below h1 tag will be cleared using innerHTML,if not cleared it will display the previous options.
- for loop/for each will used to access the answer options.Because its an array.
- it will always attach to the mkain index
- The demo which is given to us is showing answers as buttons.
- so I created a button tag and attached the answer options to the button tag.
- when choice button is clicked the value of the button will be passed to the choiceClick() function.
- And it will compare the value with the correct answer.
- so we call the questionClick() function to check the answer.

```

```
3. function questionClick() is used to check the answer.
- if the answer is wrong it will deduct 10 seconds from the timer and make a sound.
- if the answer is correct it will make a sound and display the next question.
- if the index of array is equal to the length of the array it will call the endQuiz() function.
```

```
4. function endQuiz() is used to end the quiz.
- it will clear the timer.
- it will hide the questions and display the score using endscreen element.
```

```
5. function saveHighscore() is used to save the highscore.
- if the user's score is already in the local storage get the score from the local storage.
- or get a new array push the score to the array and set the array to the local storage.

```

```
6.score.js file is used to display the highscore.
- get the highscore from the local storage.
- if the highscore is null do nothing.
- else create a list element and display the highscore.
- when user click the clear button clear/remove the highscore from the local storage.
- window.reload() is used to reload the page.
- if not  highscore will be displayed in the list.
```

## Credits
- Edx Teachers
- [w3schools](https://www.w3schools.com/)
- [MDN web docs](https://developer.mozilla.org/en-US/)
- [Stack Overflow](https://stackoverflow.com/)
- [Youtube](https://www.youtube.com/)


## License
[MIT]

## contact
- github:lotusNiro
## url for quiz
[
](https://lotusniro.github.io/Mcq-Quiz/)https://lotusniro.github.io/Mcq-Quiz/

[
](https://github.com/Lotusniro/Mcq-Quiz)https://github.com/Lotusniro/Mcq-Quiz


