var currentQuestion=0;
var currentScore=0;
var currentTime=45;
var questionContainer=document.getElementById("container");
var interval;


questionContainer.addEventListener("click",function(event) {
    if(event.target.matches("li")) {
        var answer=event.target.innerText;

        var question=questions[currentQuestion];

        if(answer===question.answer) {
            currentScore++;
        } else {
            currentTime=currentTime-5;
        }
        currentQuestion++;
        if(currentQuestion>=questions.length) {
            finishQuiz();
        } else {
            showCurrentQuestion();
        }       
        
    }
});

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
        questionLi.innerText=question.options[i];
        optionsList.appendChild(questionLi);

    }
    questionContainer.appendChild(optionsList);
}

function startQuiz() {

    var counterTime = setInterval(function(){
        var countDown =60;
        var distance = countDown - 1;
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("container").innerHTML= seconds + "s";
        if (distance < 0) {
            clearInterval(counterTime);
            document.getElementById("container").innerHTML = "EXPIRED";
          }
        

    }, 1000);

    console.log(counterTime())
    // Set the interval to run every  second
    // - Update the time counter
    // - Check if the time ran out
    // - If the time ran out finishQuiz()
}