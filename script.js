
//Time in seconds
const time = 1515, minutes = 0, seconds = 0;


var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
  ];

  updateTimer(time);

  //Set up questions
  for(let i = 0; i < questions.length; i++){
    createQuestion(questions[i], i);
  }

  $("#questions").append('<input type = "submit" id = "submit" value = "Submit">');



  $("#submit").on("click", function(e){


    //Get user's answers -- parse questions
    for(let i = 0; i < questions.length; i++){
          for(let j = 0; j < questions[i].choices.length; j++){
            if(questions[i].choices[j] != questions.answer){
              alert("Wrong answer!");
              time -= 15;
              updateTimer(time);
            }
            else{
              alert("Right answer!");
            }
          }
          
     }

    e.preventDefault();
  });



  //Helper function -- add selected question to the page
  function createQuestion(question, key){
    $("#questions").append(question.title + "<br>");
    for(let i = 0; i < question.choices.length; i++){
        $("#questions").append('<input type = "radio" name = ' + key + '>' + question.choices[i] + '<br>');
    }
    $("#questions").append("<br>");
}


//convert time (seconds) to minutes and seconds
function updateTimer(timeRemaining){
  $("#minutes").text(Math.floor(time/60));
  $("#seconds").text(time - (Math.floor(time/60)) * 60);
}
