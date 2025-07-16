const questions = [
    {
        question: "Who is known as the 'King of Pop'?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Timberlake"],
        answer: "Michael Jackson"
    },
    {
        question: "Which artist holds the record for most Grammy Awards won?",
        options: ["Beyoncé", "Taylor Swift", "Kanye West", "Adele"],
        answer: "Beyoncé"
    },
    {
        question: "Which band released the album 'Abbey Road' in 1969?",
        options: ["The Rolling Stones", "The Beatles", "Pink Floyd", "Queen"],
        answer: "The Beatles"
    },
    {
        question: "What hit song by Luis Fonsi and Daddy Yankee featured Justin Bieber in its remix?",
        options: ["Bailando", "Despacito", "Gasolina", "Mi Gente"],
        answer: "Despacito"
    },
    {
        question: "Who sang the 2021 global hit 'drivers license'?",
        options: ["Billie Eilish", "Olivia Rodrigo", "Selena Gomez", "Doja Cat"],
        answer: "Olivia Rodrigo"
    },
    {
        question: "Which rock band was Freddie Mercury the lead singer of?",
        options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Who"],
        answer: "Queen"
    },
    {
        question: "Which pop star’s real name is Stefani Joanne Angelina Germanotta?",
        options: ["Lady Gaga", "Madonna", "Katy Perry", "Dua Lipa"],
        answer: "Lady Gaga"
    },
    {
        question: "Which song starts with the lyric 'Hello, it's me'?",
        options: ["Someone Like You", "Easy On Me", "Rolling in the Deep", "Hello"],
        answer: "Hello"
    },
    {
        question: "Which artist made history as the first rapper to win the Pulitzer Prize for Music?",
        options: ["Kendrick Lamar", "Jay-Z", "Drake", "Nas"],
        answer: "Kendrick Lamar"
    },
    {
        question: "Who topped the Billboard Hot 100 with 'Anti-Hero' in 2022?",
        options: ["Ariana Grande", "Dua Lipa", "Taylor Swift", "SZA"],
        answer: "Taylor Swift"
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