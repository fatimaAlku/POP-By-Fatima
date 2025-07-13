const questions = [
    {
        question: "Who won the 2020 Formula 1 World Championship?",
        options: ["Max Verstappen", "Lewis Hamilton", "Sebastian Vettel", "Charles Leclerc"],
        answer: "Lewis Hamilton"
    },
    {
        question: "What does DRS stand for?",
        options: ["Drag Reduction System", "Downforce Regulation System", "Dynamic Racing System", "Drive Record System"],
        answer: "Drag Reduction System"
    },
    {
        question: "Which Grand Prix takes place on an Artificial island?",
        options: ["Monaco", "Singapore", "Abu Dhabi", "Melbourne"],
        answer: "Abu Dhabi"
    },
    {
        question: "Which team has secured the most Constructors' Championships?",
        options: ["Mercedes", "Ferrari", "Red Bull", "McLaren"],
        answer: "Ferrari"
    },
    {
        question: "Which driver has the most wins in Formula 1 history?",
        options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Alain Prost"],
        answer: "Lewis Hamilton"
    },
    {
        question: "Which team ended Mercedes Unbeaten Run in the hybrid era in 2018?",
        options: ["Mercedes", "Ferrari", "Red Bull", "McLaren"],
        answer: "Red Bull"
    },
    {
        question: "What color is the flag used to indicate a slow moving car on the track?",
        options: ["Yellow", "Red", "Blue", "Green"],
        answer: "Blue"
    },
    {
        question: "What F1 grand prix is held at night?",
        options: ["Monaco", "Singapore", "Abu Dhabi", "Melbourne"],
        answer: "Singapore"
    },
    {
        question: "How many points are awarded for a race win in Formula 1?",
        options: ["25", "18", "20", "22"],
        answer: "25"
    },
    {
        question: "Which F1 grand prix takes place in the streets of Monte Carlo?",
        options: ["Monaco", "Singapore", "Abu Dhabi", "Melbourne"],
        answer: "Monaco"
    },
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and options
function displayQuestion() {
    const questionEle = document.querySelector('.question-container h2');
    const optionEle = document.querySelector('.options');

    questionEle.textContent = questions[currentQuestionIndex].question;
    optionEle.innerHTML = '';

    questions[currentQuestionIndex].options.forEach(option => {
        const listOption = document.createElement('listOption');
        listOption.textContent = option;
        listOption.className = 'option';
        listOption.onclick = () => selectAnswer(option);
        optionEle.appendChild(listOption);
    });

    document.querySelector('.score').textContent = "Score: " + score;
}

// Function to handle answer selection
function selectAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
       score++;
       changeColor(); // Change color of the answer
       document.querySelector('.score').textContent = "Correct! Your score is: " + score;
       setTimeout(nextQuestion, 1200); // Move to next question after 1 and a half seconds
    } else {
        document.querySelector('.score').textContent = "Wrong answer! Your score is: " + score;
        setTimeout(nextQuestion, 1300); // Move to next question after 1 and a half seconds
    }
}


// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else if (currentQuestionIndex === questions.length) {
        document.querySelector('.score').textContent = "Quiz over! Your final score: " + score;
        document.querySelector('.next-button').disabled = true; // Disable next button
    }
}

// Function to reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}



displayQuestion();