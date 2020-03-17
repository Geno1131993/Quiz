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



  //Set up questions
  for(let i = 0; i < questions.length; i++){
    createQuestion(questions[i], i);
  }

  $("#questions").append('<input type = "submit" id = "submit" value = "Submit">');



  $("#submit").on("click", function(e){


    //Get user's answers
    for(let i = 0; i < questions.length; i++){
      console.log($("#input[name = " + i + "]").val());
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