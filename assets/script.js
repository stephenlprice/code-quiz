// Base DOM elements
var content = $("#content");

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

function init() {
    content.append( /*html*/ `
    <h1>Coding Quiz Challenge</h1><br>
    <p><strong><i>Are you ready to test your knowledge of web development?</i></strong></p><br>
    <p style="text-align: justify;">When you start, a timer will set off and you will be presented 
    with your first question. If you answer correctly you continue to the next question. Incorrect 
    answers will substract time off the clock. If you answer all questions or if the timer reaches 
    zero, the <strong>game is over.</strong>
    </p><br>
    <button id="startBtn" type="button" class="btn btn-primary btn-lg">Start Quiz</button>
    `);
}

init();

$(document).ready(function() {
    // DOM elements
    var startBtn = $("#startBtn");

    function startQuiz() {
        function randomizer() {
            ranQ = "q" + Math.floor(Math.random() * 5 + 1);
            var question = questions.ranQ;
            questionLoader(question);
        }
        randomizer();
    }

    function questionLoader() {
        content.empty();

        content.append( /*html*/ `
        <h1>Commonly used data types DO NOT include:</h1><br>
        <div id="answers" class="container">
            <div id="answer-buttons" class="class row">
                <div class="div col-12 col-sm-6 col-md-3 my-3">
                    <button type="button" class="btn btn-outline-primary btn-lg">strings</button>
                </div>
                <div class="div col-12 col-sm-6 col-md-3 my-3">
                    <button type="button" class="btn btn-outline-primary btn-lg">booleans</button>
                </div>
                <div class="div col-12 col-sm-6 col-md-3 my-3">
                    <button type="button" class="btn btn-outline-primary btn-lg">alerts</button>
                </div>
                <div class="div col-12 col-sm-6 col-md-3 my-3">
                    <button type="button" class="btn btn-outline-primary btn-lg">numbers</button>
                </div>
            </div>
            <p id="message"></p>
        </div>
        `);

        function evaluator() {
            // if (this.text )
        }

        $("#answer-buttons").on("click", evaluator);
    }

    // Event handlers
    startBtn.on("click", startQuiz);
});
