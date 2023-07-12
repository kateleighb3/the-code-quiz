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


let quizQuestions = [
    {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options:[
                "Hyper Text Preprocessor", 
                "Hyper Text Markup Language",
                "Hyper Text Multiple Language",
                "Hyper Tool Multi Language",
                ]           
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascasding Style Sheet",
        options: [
                "Common Style Sheet", 
                "Colorful Style Sheet",
                "Computer Style Sheet",
                "Cascasding Style Sheet",
                ]
    },
    { question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
      options: [ 
                "Hypertext Preprocessor",
                "Hypertext Programming",
                "Hypertext Preprogramming",
                "Hometext Preprocessor",
               ]
    },
    {
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options:[
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
        ]
    }
];


/* const quizQuestions= [
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
*/


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
    const questTitle = document.querySelector(".quiz_question");
    const optionsList = document.querySelector(".quiz_options");

    // when click start button-- first question with options appears (div class for each quizQuestion makes each question able to be a list and ',' appear but + sign does not)
    // let queTag = quizQuestions[index].question;

    document.querySelector(".quiz_question").innerHTML = quizQuestions[index].question;
    let optionTag = ['<div class="option"><span>'+ quizQuestions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ quizQuestions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ quizQuestions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ quizQuestions[index].options[3] +'</span></div>'
    
];

    /*[quizQuestions[index].options[0],
                    quizQuestions[index].options[1],
                    quizQuestions[index].options[2],
                    quizQuestions[index].options[3]
];
*/
    // questTitle.innerHTML=queTag;
    optionsList.innerHTML = optionTag;

    const option = optionsList.querySelectorAll(".option");

    for (i=0; i < option.length; i++){
        let opt = option[i];
        opt.setAttribute('onclick', "optionSelected()");
    }
}

function optionSelected(){
    let playerOption = answer.innerText;
    let correctOption = quizQuestions[quizQuestCount].answer;
    if(playerOption == correctOption){

    }
}

function startGame(){
    startTimer(); // start the timer
    startBox.style.display="none"; // hide start box
    quizBox.style.display="block"; // show quiz box
    getQuestionAndOptions(0); //calling getQuestionAndOptions function

    /*for (let i=0; i < quizQuestions.length; i++) {
        let questionAndOptions = quizQuestions[i];
        console.log(questionAndOptions);
    }

    let questions = quizQuestions[0];
    console.log ("question..", questions)
    console.log("try this...", quizQuestions.question);
    // dipslay first question with options after start quiz button clicked.
*/



/*
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

    
    */
        
    
}


let quizQuestCount = 0;

nextButton.onclick = function nextQuestion() { 
    if (quizQuestCount < quizQuestions.length-1) { //if question count is less than total question length
        quizQuestCount++; //increment the quizQuestCount value
        getQuestionAndOptions(quizQuestCount); //calling getQuestionAndOption function and passing parameters
    }
};



// when start button clicked...
startQuizBtn.addEventListener("click", startGame);
/*nextButton.addEventListener("click", function(){}*/

/*
    startBox.style.display="none";
    quizBox.style.display="block";
    generateQuestions();
    startTimer();
})*/