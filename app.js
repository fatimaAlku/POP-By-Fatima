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

// Get DOM elements
const bgMusic = document.getElementById("backgroundMusic");
const startBtn = document.getElementById("startQuizBtn");
const startScreen = document.getElementById("startScreen");
const quizSection = document.getElementById("quizSection");



// Start the background music after clicking the Start Quiz button
  startBtn.addEventListener("click", () => {
  bgMusic.play();
  startScreen.style.display = "none";
  quizSection.style.display = "block";
  displayQuestion();
});


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
       setTimeout(nextQuestion, 1100); // Move to next question after 1 and a 1 seconds
    } else {
        handleIncorrectAnswer(); // Change color of the answer
        document.querySelector('.score').textContent = "Wrong answer! Your score is: " + score;
        setTimeout(nextQuestion, 1200); // Move to next question after 1 and a 2 seconds
    }
}


// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else if (currentQuestionIndex === questions.length) {
        document.querySelector('.score').textContent = "Quiz over! Your final score: " + score + ",";

        document.querySelector('.next-button').disabled = true; // Disable next button
        winOrLose(); // Check win or lose condition
    }
}


// Function to reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    document.querySelector('.next-button').disabled = false; // Enable next button
}


// Function to change the background color of the answer
function changeColor() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        if (option.textContent === questions[currentQuestionIndex].answer) {
            option.style.backgroundColor = 'lightgreen'; // Correct answer
        } else  {
            option.style.backgroundColor = 'lightcoral'; // Wrong answer
        }   
    });
}


// Function if chosen answer is incorrect
function handleIncorrectAnswer() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        if (option.textContent === questions[currentQuestionIndex].answer) {
            option.style.backgroundColor = 'lightgreen'; // Correct answer
        } else  {
            option.style.backgroundColor = 'lightcoral'; // Wrong answer
        } 
        
    });
}


// win & lose logic
function winOrLose() {
    if ( score >= 7) {
        const previousText = document.querySelector('.score').textContent;
        document.querySelector('.score').textContent = previousText + " Congratulations! You won.";
    }
    else {
        const previousText = document.querySelector('.score').textContent;
        document.querySelector('.score').textContent = previousText + " You lost :(";
    }
    bgMusic.pause();
    bgMusic.currentTime = 0;
}