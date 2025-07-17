const questions = [
    {
        question: "Which year did Jameela attend GA software engineering bootcamp?",
        options: ["2022", "2023", "2024", "2025"],
        answer: "2023"
    },
    {
        question: "Who loves شعيريه bites the most?",
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
        question: "Who has 741K followers on instagram?",
        options: ["Zahra", "Fatima", "Hamza", "Arthur"],
        answer: "Arthur"
    },
    {
        question: "How many frogs are in the classroom?",
        options: ["14", "15", "16", "12"],
        answer: "16"
    },
    {
        question: "Who likes participating in cycling races?",
        options: ["Mohammed Kadem", "Mohammed Ali", "Abdullah Alshaikh", "Mahmood Fadhel"],
        answer: "Mohammed Kadem"
    },
    {
        question: "Who is a Marshal at the Bahrain International Circuit?",
        options: ["Abdulrazaq Mohammed", "Ali Jawad", "Abdullah Alshaikh", "Abdullah Hisham"],
        answer: "Abdullah Hisham"
    },
    {
        question: "Who famously said on the first day that his name is 'Sushi'?",
        options: ["Ali", "Salman", "Aqeel", "Hamza"],
        answer: "Salman"
    },
    {
        question: "Who was in module united nations?",
        options: ["Mahmood Fadhel", "Mohammed Ali", "Abdullah Alshaikh", "Aqeel Muslem"],
        answer: "Abdullah Alshaikh"
    },
    {
        question: "Who came to bibf at 2 am because he forgot his charger?",
        options: ["Husain Folath", "Yaseen Alzeiny", "Husain Saleh", "Hussain Alkaabi"],
        answer: "Husain Saleh"
    },
    {
        question: "I am a nerd who loves coding and anime",
        options: ["Husain Saleh", "Ahmed Alshaikh", "Ali Jawad", "Arthur Bernier"],
        answer: "Arthur Bernier"
    },
    {
        question: "Has been to 15 concerts?",
        options: ["Fatima", "Mahmood", "Alia", "Abdulrazaq"],
        answer: "Fatima"
    },
    {
        question: "Had the prime minister visit his family's estate",
        options: ["Abdulla Alshaikh", "Mohammed Adel", "Hussain Alkaabi", "Mohammed Kadem"],
        answer: "Hussain Alkaabi"
    },
    {
        question: "Who would most likely survive a zombie apocalypse — by coding a solution?",
        options: ["Kristina", "Arthur", "Abdullah", "All of them, obviously"],
        answer: "All of them, obviously"
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
    bgMusic.currentTime = 0; // Reset background music to the start
    bgMusic.play(); // Play background music again
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
    if ( score >= 10) {
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