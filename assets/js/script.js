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
const cardBox = document.querySelector(".card");
const nextButton = document.querySelector(".next_button");

// Global Variables

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
    var secondsLeft = 59;
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

function getQuestionAndOptions(index){


}

function startGame(){
    startTimer();
    startBox.style.display="none";
    quizBox.style.display="block";


    for (let i = 0; i < quizQuestions.length; i++) {
        let question = quizQuestions[i];
        let options = quizOptions[i]; //length of quiz questions and quiz options are the same so ok to use i for both
        console.log("a question...", question);
        console.log("options...", options);
        
        for (let j = 0; j < options.length; j++) {
            let lineOpt = options[j];
            let stringOpt = lineOpt[0];
            console.log("option string...", stringOpt);
        }
    }

    
    

    
        
    
}


// when start button clicked...
startQuizBtn.addEventListener("click", startGame);
/*nextButton.addEventListener("click", function(){}*/

/*
    startBox.style.display="none";
    quizBox.style.display="block";
    generateQuestions();
    startTimer();
})*/