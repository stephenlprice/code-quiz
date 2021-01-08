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

// Stores player scores
var highScores = { players : [
    {initials: "sp", score: 50},
    {initials: "tv", score: 20}
]};

// Initializes the page
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

// Initializes functions after page load
$(document).ready(function() {
    
    // DOM elements
    var startBtn = $("#startBtn");
    var timeOut = 1000;
    var timer = 0;
    var score = 0;

    // When a user click on Start Game load the first question, start the timer and track it.
    function startQuiz() {
        timer = 15;
        q1();
        var chrono = setInterval(stopwatch, 1000);

        function stopwatch() {
            timer--;
            console.log("seconds left: " + timer);
    
            if (timer <= 0 || timer === 0){
                clearInterval(chrono);
                gameOver();
            }
        }
    }

    // First question
    function q1(){
        content.empty();
        var correct = "alerts";
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

        $(":button").on("click", function(b){
            if (b.target && b.target.nodeName == "BUTTON") {
                if (this.textContent == correct) {
                    success();
                    setTimeout(q2, timeOut);
                }
                else {
                    failure();
                    setTimeout(q2, timeOut);
                }
            }
        });
    }

    // Second question
    function q2(){
        content.empty();
        var correct = "parentheses";
        content.append( /*html*/ `
            <h1>The condition in an if / else statement is enclosed within ___.</h1><br>
            <div id="answers" class="container">
                <div id="answer-buttons" class="class row">
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">quotes</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">curly brackets</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">parentheses</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">square brackets</button>
                    </div>
                </div>
                <p id="message"></p>
            </div>
        `);

        $(":button").on("click", function(b){
            if (b.target && b.target.nodeName == "BUTTON") {
                if (this.textContent == correct) {
                    success();
                    setTimeout(q3, timeOut);
                }
                else {
                    failure();
                    setTimeout(q3, timeOut);
                }
            }
        });
    }

    // Third question
    function q3(){
        content.empty();
        var correct = "all of the above";
        content.append( /*html*/ `
            <h1>Arrays in Javascript can be used to store ____.</h1><br>
            <div id="answers" class="container">
                <div id="answer-buttons" class="class row">
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">numbers and strings</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">other arrays</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">booleans</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">all of the above</button>
                    </div>
                </div>
                <p id="message"></p>
            </div>
        `);

        $(":button").on("click", function(b){
            if (b.target && b.target.nodeName == "BUTTON") {
                if (this.textContent == correct) {
                    success();
                    setTimeout(q4, timeOut);
                }
                else {
                    failure();
                    setTimeout(q4, timeOut);
                }
            }
        });
    }

    // Fourth question
    function q4(){
        content.empty();
        var correct = "quotes";
        content.append( /*html*/ `
            <h1>String values must be enclosed within ___ when being assigned to variables</h1><br>
            <div id="answers" class="container">
                <div id="answer-buttons" class="class row">
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">commas</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">curly brackets</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">quotes</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">parentheses</button>
                    </div>
                </div>
                <p id="message"></p>
            </div>
        `);

        $(":button").on("click", function(b){
            if (b.target && b.target.nodeName == "BUTTON") {
                if (this.textContent == correct) {
                    success();
                    setTimeout(q5, timeOut);
                }
                else {
                    failure();
                    setTimeout(q5, timeOut);
                }
            }
        });
    }

    // Fifth question
    function q5(){
        content.empty();
        var correct = "console.log";
        content.append( /*html*/ `
            <h1>A useful tool for development and debugging, used to print content to the debugger is:</h1><br>
            <div id="answers" class="container">
                <div id="answer-buttons" class="class row">
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">JavaScript</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">terminal/bash</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">for loops</button>
                    </div>
                    <div class="div col-12 col-sm-6 col-md-3 my-3">
                        <button type="button" class="btn btn-outline-primary btn-lg">console.log</button>
                    </div>
                </div>
                <p id="message"></p>
            </div>
        `);

        $(":button").on("click", function(b){
            if (b.target && b.target.nodeName == "BUTTON") {
                if (this.textContent == correct) {
                    success();
                    setTimeout(gameOver, timeOut);
                }
                else {
                    failure();
                    setTimeout(gameOver, timeOut);
                }
            }
        });
    }

    // Success message and score tracking
    function success() {
        content.append( /*html*/ `
            <br><br>
            <div class="alert alert-success" role="alert">
                Your Answer is Correct!
            </div>
        `);
        score = score + 10;
        console.log("Score: " + score);
    }

    // Failure message and deducts time
    function failure() {
        content.append( /*html*/ `
            <br><br>
            <div class="alert alert-danger" role="alert">
                Your Answer is Wrong!
            </div>
        `);
        timer = timer - 2.5;
    }

    // Ends the game, sets time to 0.
    function gameOver() {
        content.empty();
        content.append( /*html*/ `
            <section id="gameOver">
                <br><br>
                <div class="alert alert-primary" role="alert">
                    Game Over!
                </div><br><br>
                <h2>Your Final Score is: ${score}</h2><br><br>
                <p>Submit your initials to save your score</p>
                <div class="row input-group input-group-lg">
                    <span class="col-12 col-md-3 input-group-text">First and last initials:</span>
                    <input id="fn" type="col-12 col-md-3 text" aria-label="First name" class="form-control">
                    <input id="ln" type="col-12 col-md-3 text" aria-label="Last name" class="form-control">
                    <button type="submit" class="col-12 col-md-3 btn btn-primary">Submit</button>
                </div>
            </section> 
        `);
        timer = 0;
        var fn = "";
        var ln = "";

        // Add initials and score to highscores
        $("#fn").on("input", function(){
            fn = this.value;
        });

        $("#ln").on("input", function(){
            ln = this.value;
        });

        $(":button").on("click", function(b) {
            if (b.target && b.target.nodeName == "BUTTON") {
                var ini = fn + ln;
                highScores.players.push(
                    {initials: ini , score}
                );
                
                // Adds a highscores button for visibility
                content.append( /*html*/ `
                    <button id="highScores" type="button" class="btn btn-primary btn-lg">Go To High Scores</button>
                `);

                $("#highScores").on("click", function(){
                    content.empty();
                    content.append( /*html*/ `
                        <h1>High Scores</h1><br><br>
                        <ul class="list-group"></ul>
                    `);
                    for (player in highScores.players) {
                        var pers = highScores.players[player];
                        var hs = pers.initials;
                        var sco =  pers.score;
                        var playSco = "Player: " + hs + ", Score: " + sco;
                        $("ul").append( /*html*/ `
                            <li class="list-group-item">${playSco}</li>
                        `);    
                    }
                });
            }
        });
    }

    // Event handlers
    startBtn.on("click", startQuiz);
});

