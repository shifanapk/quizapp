const questions = [
    {
        question: "Which data type is NOT supported in JavaScript? ",
        answers: [
            { text: "Number", correct: false },
            { text: "String", correct: false },
            { text: "Float", correct: true },
            { text: "Object", correct: false },
        ]
    },
    {
        question: "What is the output of typeof null in JavaScript? ",
        answers: [
            { text: "null", correct: false },
            { text: "object", correct: true },
            { text: "undefined", correct: false },
            { text: "string", correct: false },
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "Which method is used to join two or more arrays in JavaScript?",
        answers: [
            { text: "concat()", correct: true },
            { text: "push()", correct: false },
            { text: "join()", correct: false },
            { text: "merge()", correct: false },
        ]
    },
    {
        question: "What is the correct way to declare a constant in JavaScript?",
        answers: [
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "var", correct: false },
            { text: "constant", correct: false },
        ]
    },
    {
        question: "What does the `isNaN()` function do in JavaScript?",
        answers: [
            { text: "Checks if a value is a number", correct: false },
            { text: "Checks if a value is NaN", correct: true },
            { text: "Converts a value to NaN", correct: false },
            { text: "Returns the type of a variable", correct: false },
        ]
    },
    {
        question: "Which JavaScript object is used to work with dates and times?",
        answers: [
            { text: "Date", correct: true },
            { text: "Time", correct: false },
            { text: "Clock", correct: false },
            { text: "Calendar", correct: false },
        ]
    },
    {
        question: "What will the following code return: `Boolean(0)`?",
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "/*", correct: false },
            { text: "#", correct: false },
            { text: "none of the above", correct: false },
        ]
    },
    {
        question: "How do you declare a function in JavaScript?",
        answers: [
            { text: "function myFunction() {}", correct: true },
            { text: "def myFunction() {}", correct: false },
            { text: "func myFunction() {}", correct: false },
            { text: "function = myFunction() {}", correct: false },
        ]
    },
    {
        question: "What is the output of `console.log(typeof undefined)`?",
        answers: [
            { text: "'undefined'", correct: true },
            { text: "'null'", correct: false },
            { text: "'object'", correct: false },
            { text: "'boolean'", correct: false },
        ]
    },
    {
        question: "What does `==='` check in JavaScript?",
        answers: [
            { text: "Value only", correct: false },
            { text: "Type only", correct: false },
            { text: "Value and Type", correct: true },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Which of the following is not a looping structure in JavaScript?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "foreach", correct: false },
            { text: "loop", correct: true },
        ]
    },
    {
        question: "How do you add an event listener in JavaScript?",
        answers: [
            { text: "element.addEventListener('click', function)", correct: true },
            { text: "element.on('click', function)", correct: false },
            { text: "element.addListener('click', function)", correct: false },
            { text: "element.attach('click', function)", correct: false },
        ]
    },
    {
        question: "Which of the following will not throw an error in JavaScript?",
        answers: [
            { text: "x = 10;", correct: true },
            { text: "let x = 10 let y = 20;", correct: false },
            { text: "const z;", correct: false },
            { text: "var x = 10 var y;", correct: false },
        ]
    },
    {
        question: "Which method is used to convert a JSON object to a string?",
        answers: [
            { text: "JSON.parse()", correct: false },
            { text: "JSON.stringify()", correct: true },
            { text: "JSON.toString()", correct: false },
            { text: "JSON.convert()", correct: false },
        ]
    },
    {
        question: "What does the `this` keyword refer to in JavaScript?",
        answers: [
            { text: "The current object", correct: true },
            { text: "The parent object", correct: false },
            { text: "The global object", correct: false },
            { text: "A function", correct: false },
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Django", correct: false },
            { text: "Flask", correct: false },
            { text: "Spring", correct: false },
        ]
    },
    {
        question: "What is the result of `typeof NaN` in JavaScript?",
        answers: [
            { text: "'number'", correct: true },
            { text: "'NaN'", correct: false },
            { text: "'undefined'", correct: false },
            { text: "'string'", correct: false },
        ]
    },
    {
        question: "How can you create an object in JavaScript?",
        answers: [
            { text: "let obj = {};", correct: true },
            { text: "let obj = [];", correct: false },
            { text: "let obj = ();", correct: false },
            { text: "let obj = <>;", correct: false },
        ]
    },
    {
        question: "Which method is used to remove the last element of an array?",
        answers: [
            { text: "pop()", correct: true },
            { text: "shift()", correct: false },
            { text: "splice()", correct: false },
            { text: "delete()", correct: false },
        ]
    },
    {
        question: "How do you declare an arrow function in JavaScript?",
        answers: [
            { text: "() => {}", correct: true },
            { text: "function => {}", correct: false },
            { text: "function() {}", correct: false },
            { text: "() -> {}", correct: false },
        ]
    },
    {
        question: "Which built-in method is used to find the length of a string?",
        answers: [
            { text: "size()", correct: false },
            { text: "count()", correct: false },
            { text: "length", correct: true },
            { text: "index()", correct: false },
        ]
    },
    {
        question: "What will be the output of `2 + '2'` in JavaScript?",
        answers: [
            { text: "4", correct: false },
            { text: "'22'", correct: true },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ]
    },
    {
        question: "Which statement is true about JavaScript?",
        answers: [
            { text: "It is a compiled language.", correct: false },
            { text: "It is case-insensitive.", correct: false },
            { text: "It is used to create dynamic web pages.", correct: true },
            { text: "It can only run in a browser.", correct: false },
        ]
    },
    {
        question: "Which method adds one or more elements to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "unshift()", correct: false },
            { text: "concat()", correct: false },
            { text: "insert()", correct: false },
        ]
    },
    {
        question: "What is the purpose of the `setTimeout()` function in JavaScript?",
        answers: [
            { text: "To execute a function after a delay", correct: true },
            { text: "To repeat a function at intervals", correct: false },
            { text: "To stop a running function", correct: false },
            { text: "To execute a function immediately", correct: false },
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onchange", correct: false },
            { text: "onclick", correct: true },
            { text: "onhover", correct: false },
            { text: "onmouseover", correct: false },
        ]
    },
    {
        question: "What is the value of `undefined == null` in JavaScript?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "null", correct: false },
        ]
    },
    {
        question: "How can you add a comment in JavaScript?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "/// This is a comment ///", correct: false },
            { text: "# This is a comment", correct: false },
            { text: "/ This is a comment", correct: false },
        ]
    },


];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer); // Pass event object automatically
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Congragulations,You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
