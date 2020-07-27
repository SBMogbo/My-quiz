var currentQuestion=0;
var currentScore=0;
var currentTime=45;
var counterTime;
var startContainer=document.getElementById("container");
var quizContainer=document.getElementById("quiz");
var questionContainer=document.getElementById("questions");
var resultsContainer=document.getElementById("results");
var scoreContainer=document.getElementById("score");

function startQuiz() {
    startContainer.setAttribute("class","hide")
    quizContainer.removeAttribute("class")
    counterTime = setInterval(function(){
   currentTime = currentTime - 1;
   scoreContainer.innerHTML= currentTime + "s";
   if (currentTime < 0) {
       clearInterval(counterTime);
       scoreContainer.innerHTML = "EXPIRED";
     }
     
   
}, 1000);
 showCurrentQuestion();

// Set the interval to run every  second
// - Update the time counter
// - Check if the time ran out
// - If the time ran out finishQuiz()
}
function checkAnswer(event) {
   
        var answer=event.target.innerText;

        var question=questions[currentQuestion];

        if(answer===question.answer) {
            alert("Correct!")
        } else {
            currentTime=currentTime-5;
            alert("Wrong!")
        }
        currentQuestion++;
        if(currentQuestion>=questions.length) {
            finishQuiz();
        } else {
            showCurrentQuestion();
        }       
        
    
};

function showHighScores() {
    //Retrieve high scores
    //Display high scores
}

function finishQuiz() {
    clearInterval(interval);
    //Display the score
    //Store in the high scores if higher than previous score
}
var questions = [
  {
    question: "What is My favorite color?",
    options: ["Green", "Yellow", "Blue", "Red"],
    answer: "Blue"
  },
  {
    question: "What month was I born in?",
    options: ["April", "July", "March", "December"],
    answer: "March"
  },
  {
    question: "Who is my favorite superhero",
    options: ["Superman", "Black Panther", "Static", "Spider-Man"],
    answer: "Spider-Man"
  },
  {
    question: "Best City",
    options: ["NYC", "Miami", "L.A.", "Tokyo"],
    answer: "NYC"
  },
]


function showCurrentQuestion() {
    var question=questions[currentQuestion];
    questionContainer.innerHTML="";

    var questionTitle=document.createElement("h1");
    questionTitle.innerText=question.question;
    questionContainer.appendChild(questionTitle);

    var optionsList=document.createElement("ul");

    for(var i=0;i<question.options.length;i++) {
        var questionLi=document.createElement("li");
        var button=document.createElement("button");
        button.addEventListener("click",checkAnswer)
        button.innerText=question.options[i];
        questionLi.appendChild(button);
        optionsList.appendChild(questionLi);

    }
    questionContainer.appendChild(optionsList);
    
}

