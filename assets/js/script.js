// When Start button clicked:
//      -timer starts countdown
//      -quiz starts
//      -if time counts down to zero before quiz is finished, time's up screen pops up with current score. 
//       else finished screen pops up with current score and box to submit initials

// When quiz starts:
//  -a series of questions and answers appears.
//  - after choice button clicked, the next question with choice buttons appears
//  -if answer correctly- correct alert pops up
//  - else incorrect alert pops up
//  -each time an incorrect button choice is clicked- 5 points is taken off 
//  -each time a correct button choice is clicked - 10 points is added

// When quiz is done and last question answered:
//  -the finished screen pops up with score and box to submit initials

// When click submit button for initials:
//  -your score with your initials are stored

// When click view highschores button:
//  - the top 10 highest scores appear on the highscoreContainer.

const startQuizBtn = document.querySelector(".start_button");
const startBox = document.querySelector("#start_box");
const quizBox = document.querySelector("#quiz_box");
const finishedBox=document.querySelector("#finished_box");
const highScoresBox=document.querySelector("#high_scores_box");
const submitBtn=document.querySelector("#submit");
const viewHighScoreBtn=document.querySelector(".high_scores_btn");
const time=document.querySelector("#count_down");




// questions and answers array/creating an array and passing the questions, options, and answers

const quizQuestions= [
    "What does HTML stand for?",
    "What does CSS stand for?",
    "What does PHP stand for?",
    "What does SQL stand for?",
];

const quizOptions = [
    [
        ["Hyper Text Preprocessor", false], 
        ["Hyper Text Markup Language", true], 
        ["Hyper Text Multiple Language", false], 
        ["Hyper Tool Multi Language", false],
    ],
    [
        ["Common Style Sheet", false],
        ["Colorful Style Sheet", false],
        ["Computer Style Sheet", false],
        ["Cascasding Style Sheet", true],
    ],
    [
        [ "Hypertext Preprocessor", true],
        ["Hypertext Programming", false], 
        ["Hypertext Preprogramming", false],
        ["Hometext Preprocessor", false],
    ],
    [
        ["Stylish Question Language", false], 
        ["Stylesheet Query Language", false],
        ["Statement Question Language", false], 
        ["Structured Query Language", true],
    ],
];

function startTimer(){
    // sets interval in variable
    var secondsLeft = 10;
    var timerInterval=setInterval(function(){
        secondsLeft--;
        time.textContent=secondsLeft;

        if(secondsLeft === 0) {
            //stops execution of action at set interval
            clearInterval(timerInterval);
            // switches to finished quiz box screen
            quizBox.style.display="none";
            finishedBox.style.display="block";
        }
    }, 1000);

    console.log(startTimer);
};

function generateQuestions(){
    const questions=JSON.parse(JSON.stringify(quizQuestions));
    const answers=JSON.parse(JSON.stringify(quizOptions));

    console.log(questions); 
    console.log(answers);
    if (questions.length === 0) {
        return finishQuiz();
    }
   
    const questionEl = document.createElement("h2");
    questionEl.textContent = questions;

    const optionsEl = document.createElement('ul');
    optionsEl.classList.add("choices");

    // Iterate over the answer options and create list items
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i][0];
        const isCorrect = answers[i][1];

    const listItem = document.createElement("li");
    listItem.textContent = answer;

    // Add a click event listener to each option to handle the user's choice
    listItem.addEventListener('click', function () {
        if (isCorrect) {
          // Handle correct answer
        } else {
          // Handle wrong answer
        }
  
        // Move to the next question
        generateQuestions(index + 1);
      });
  
      optionsEl.appendChild(listItem);
    }

    // Append the question and options to the quiz container
    const quizTitle = document.querySelector(".quiz_question");
    const quizBody = document.querySelector(".quiz_options");

    quizTitle.appendChild(questionEl);
    quizBody.appendChild(optionsEl);
    
}

// when start button clicked...
startQuizBtn.addEventListener("click", function(){
    startBox.style.display="none";
    quizBox.style.display="block";
    generateQuestions();
    startTimer();
});

