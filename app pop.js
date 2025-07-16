const questions = [
    {
        question: "Which celebrity famously slapped Chris Rock at the 2022 Oscars?",
        options: ["Will Smith", "Dwayne Johnson", "Kanye West", "Jason Momoa"],
        answer: "Will Smith"
    },
    {
        question: "Who broke the record for most Instagram followers in 2024?",
        options: ["Lionel Messi", "Selena Gomez", "Cristiano Ronaldo", "Kim Kardashian"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "What word did Oxford Dictionaries name as the 2023 Word of the Year?",
        options: ["Goblin mode", "Rizz", "Cheugy", "Slay"],
        answer: "Rizz"
    },
    {
        question: "Who wore the iconic meat dress at the 2010 MTV VMAs?",
        options: ["Lady Gaga", "Nicki Minaj", "Rihanna", "Katy Perry"],
        answer: "Lady Gaga"
    },
    {
        question: "Which celebrity starred in both 'Barbie' (2023) and 'Suicide Squad' (2016)?",
        options: ["Scarlett Johansson", "Margot Robbie", "Gal Gadot", "Zendaya"],
        answer: "Margot Robbie"
    },
    {
        question: "What viral Netflix series featured the game 'Red Light, Green Light'?",
        options: ["Money Heist", "Squid Game", "Stranger Things", "The Circle"],
        answer: "Squid Game"
    },
    {
        question: "Who headlined the Super Bowl halftime show in 2023?",
        options: ["The Weeknd", "Beyoncé", "Rihanna", "Dr. Dre"],
        answer: "Rihanna"
    },
    {
        question: "What is the name of Taylor Swift's devoted fanbase?",
        options: ["Swifties", "Lovelies", "Stans", "Taysters"],
        answer: "Swifties"
    },
    {
        question: "Which artist collaborated with Crocs and McDonald's in viral campaigns?",
        options: ["Post Malone", "Doja Cat", "BTS", "Travis Scott"],
        answer: "Travis Scott"
    },
    {
        question: "Which YouTuber became the most-subscribed channel in the world in 2023?",
        options: ["MrBeast", "PewDiePie", "T-Series", "Nastya"],
        answer: "MrBeast"
    }
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
        document.querySelector('.score').textContent = "Quiz over! Your final score: " + score;
        document.querySelector('.next-button').disabled = true; // Disable next button
        winOrLose(); // Check win or lose condition
    }
}


// Function to reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
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
    if ( score >= 6) {
        document.querySelector('.score').textContent = "Congratulations! You won.";
    }
    else {
        document.querySelector('.score').textContent = "You lost :( Better luck next time.";
    }
    bgMusic.pause();
    bgMusic.currentTime = 0;
}