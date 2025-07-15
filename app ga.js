const questions = [
    {
        question: "Which year did Jameela attend GA software engineering bootcamp?",
        options: ["2022", "2023", "2024", "2025"],
        answer: "2023"
    },
    {
        question: "Who loves kunafa bites the most?",
        options: ["Hussain Folath", "Mohammed Adel", "Hasan Alsebea", "Fatima Alzaki"],
        answer: "Hussain Folath"
    },
    {
        question: "Who leaves class every 10 minutes?",
        options: ["Yaseen Alzeiny", "Husain Saleh", "Hussain Alkaabi", "All of them"],
        answer: "All of them"
    },
    {
        question: "Who is a dentist here?",
        options: ["Mohamed Ali", "Hussain Folath", "Mohammed Adel", "Sakeena S"],
        answer: "Mohammed Adel"
    },
    {
        question: "Two that can't go a day without drinking karak?",
        options: ["Yaseen Alzeiny & Husain Saleh", "Abdulla Alshaikh & Ahmed Alshaikh","Yaseen Alzeiny  & Fatima Alzaki", "Abdulrazaq & Salman"],
        answer: "Yaseen Alzeiny & Husain Saleh"
    },
    {
        question: "Who’s dream is it to run a flower shop?",
        options: ["Fatima", "Jameela", "Alia", "Zainab"],
        answer: "Jameela"
    },
    {
        question: "Whose favorite anime character is Vegeta?",
        options: ["Hasan", "Salman", "Hamza", "Arthur"],
        answer: "Arthur"
    },
    {
        question: "How many frogs are in the classroom?",
        options: ["14", "15", "16", "12"],
        answer: "16"
    },
    {
        question: "Who famously said on the first day that his name is 'Sushi'?",
        options: ["Ali", "Aqeel", "Salman", "Hamza"],
        answer: "Salman"
    },
    {
        question: "Who would most likely survive a zombie apocalypse — by coding a solution?",
        options: ["Kristina", "Arthur", "Abdullah", "All of them, obviously"],
        answer: "All of them, obviously"
    },
    {
        question: "Who was in module united nations?",
        options: ["Aqeel Muslem", "Mohammed Ali", "Abdullah Alshaikh", "Mahmood Fadhel"],
        answer: "Abdullah Alshaikh"
    },
    {
        question: "Who likes participating in cycling races?",
        options: ["Mohammed Kadem", "Mohammed Ali", "Abdullah Alshaikh", "Mahmood Fadhel"],
        answer: "Mohammed Kadem"
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