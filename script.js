var questions = [
  {
    title: "What is My favorite color?",
    choices: ["Green", "Yellow", "Blue", "Red"],
    answer: "Blue"
  },
  {
    title: "What month was I born in?",
    choices: ["April", "July", "March", "December"],
    answer: "March"
  },
  {
    title: "Who is my favorite superhero",
    choices: ["Superman", "Black Panther", "Static", "Spider-Man"],
    answer: "Spider-Man"
  },
  {
    title: "",
    choices: ["C1", "C2", "C3", "C4"],
    answer: "C3"
  },
]
var time = 60;
var currentQuestion = 0;//current question
var timmerInterval;
var highScores = [];
var questionWindow = document.getElementById("quiz");
var quizResults = document.getElementById("results")
var Submitbutton = document.getElementById("Submit")
// event to capture the user start button to capture when the user clicks the start button that calls the start game function 
//start game function 
// 1. hide the start game start game screen and the show questions screen
//2. it will start the timer
//3. it will load the first question
// 2/3 will be a new function 
// quiz
function startQuiz(questions, quizContainer, resulttsConatiner, sumbit) {

  function showQuestions(questions, quizContainer) {

    var output = [];

    var answers;

    for(var i=0; i<questions.length; i++){

      answers =[];

      for(letter in questions[i].answers){
        answers.push("<label>" + '<input type = "radio" name ="question" '+i+'"value="'+letter+'">' +letter + ';' + questions[i].answers[letter]+'</label>');
      }
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('')+ '</div>'
      );
    
  };
   quizContainer.innerHTML= output.join('');
  

  //will start when the user clicks submit
  function showResults(questions, quizContainer, resulttsConatiner) {
    var answerContainers =quizContainer.querySelectorAll('.answers');
    var userAswer ='';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++){
      userAswer =(answerContainers[i].querySelector('input[name=question'+i+']:checked'))|| {}.value;
      if(userAswer === questions[i].correctAnswer){
        numCorrect++;

        answerContainers[i].style.color= "blue";
      }
      else{
        answerContainers[i].style.color= "green";
      }
    }
    resulttsConatiner.innerHTML = numCorrect + 'out of' + questions.length;
  };
  //show questions
  showquestions(questions, quizContainer);


  submitButton.onClick = function () {
    showResults(questions, quizContainer, resulttsConatiner)

  };
};
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
//function to start the timer and to stop when time goes to 0


//function to display the question
//grab the question from the index based on the current question index(var)

//event tied to button user clicks when the user clicks on one of the question buttons
//event will call check answer function
// in the answer function
//1. will check if the answer is correct "Correct" and show it was correct and then else they got it "wrong" and dectuct 10 sec off
//2.add 1 to the question index
//3.check if "do i have more statements to display" to display the next question, then if there is no more function call one final function to end the game.
//end game function
//1. will stop the timer
//2. hide the question and show the score with abilty to add innt and save score
//3. user add name.load high score from local storage if there is a high score. else save in local storage then if user clicks on high score link to view high score page, page will show high scores from local storage. 
