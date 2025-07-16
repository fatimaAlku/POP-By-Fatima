const questions = [
    {
        question: "Which movie features the quote, 'I'll be back'?",
        options: ["Die Hard", "The Terminator", "Predator", "RoboCop"],
        answer: "The Terminator"
    },
    {
        question: "Who directed the movie 'Inception'?",
        options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],
        answer: "Christopher Nolan"
    },
    {
        question: "Which actress played Hermione Granger in the Harry Potter series?",
        options: ["Emma Roberts", "Emma Stone", "Emma Watson", "Emily Blunt"],
        answer: "Emma Watson"
    },
    {
        question: "Which movie won Best Picture at the Oscars in 2020?",
        options: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
        answer: "Parasite"
    },
    {
        question: "Who played Jack Dawson in 'Titanic'?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Matt Damon", "Orlando Bloom"],
        answer: "Leonardo DiCaprio"
    },
    {
        question: "What movie features the quote, 'Why so serious?'",
        options: ["The Dark Knight", "Joker", "Batman Begins", "Suicide Squad"],
        answer: "The Dark Knight"
    },
    {
        question: "Which film franchise features a character named Dominic Toretto?",
        options: ["Mission: Impossible", "Transformers", "Fast & Furious", "John Wick"],
        answer: "Fast & Furious"
    },
    {
        question: "Which animated movie features the song 'Let It Go'?",
        options: ["Tangled", "Moana", "Frozen", "Encanto"],
        answer: "Frozen"
    },
    {
        question: "In which movie did Tom Hanks play a man stranded on an island?",
        options: ["The Terminal", "Cast Away", "Captain Phillips", "Sully"],
        answer: "Cast Away"
    },
    {
        question: "Which Marvel movie first featured the character Black Panther?",
        options: ["Black Panther", "Avengers: Endgame", "Captain America: Civil War", "Iron Man 3"],
        answer: "Captain America: Civil War"
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