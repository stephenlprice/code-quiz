$(document).ready(function() {
    // DOM elements
    var content = $("#content");
    var startBtn = $("#startBtn");

    // Questions object containing questions, incorrect and correct answers
    var questions = {
        q1: {question: "Commonly used data types DO NOT include:",
            answer1: "strings", answer2: "booleans", answer3: "alerts", answer4: "numbers", correct: "alerts"},
        q2: {question: "The condition in an if / else statement is enclosed within ___.", 
            answer1: "quotes", answer2: "curly brackets", answer3: "parentheses", answer4: "square brackets", correct: "parentheses"},
        q3: {question: "Arrays in Javascript can be used to store ____.",
            answer1: "numbers and strings", answer2: "other arrays", answer3: "booleans", answer4: "all of the above", correct: "all of the above"},
        q4: {question: "String values must be enclosed within ___ when being assigned to variables",
            answer1: "commas", answer2: "curly brackets", answer3: "quotes", answer4: "parentheses", correct: "quotes"},
        q5: {question: "A useful tool for development and debugging, used to print content to the debugger is:",
            answer1: "JavaScript", answer2: "terminal/bash", answer3: "for loops", answer4: "console.log", correct: "console.log"}
    };

    function startQuiz() {

    }


    // Event handlers
    startBtn.on("click", startQuiz);

});
