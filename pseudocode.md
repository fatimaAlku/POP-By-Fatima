START the game

DISPLAY the title: "POP! - Test Your Knowledge and Have Fun with Every Question!"

DISPLAY four categories:
    1. MUSIC
    2. F1
    3. MOVIES
    4. POP CULTURE

WAIT for the player to CLICK on a category
SAVE the selected category

LOAD a list of questions from the chosen category

SET score = 0
SET currentQuestion = 0

WHILE currentQuestion is less than total number of questions
    DISPLAY the current question
    DISPLAY the four answer options

    WAIT for the player to CLICK on one of the options

    IF the clicked option is the correct answer
        INCREASE score by 1
    END IF

    WAIT for the player to CLICK "Next" button

    GO to the next question
    INCREASE currentQuestion by 1
END WHILE

WHEN all questions are answered
    DISPLAY the player’s final score
    DISPLAY a message like “Great job!” or “Try again!”

    SHOW two buttons:
        1. "Reset" - starts the same quiz again
        2. "Home" - goes back to the category selection screen

    WAIT for the player to CLICK on a button

    IF "Reset" is clicked
        SET score = 0
        SET currentQuestion = 0
        RELOAD questions from the same category
    ELSE IF "Home" is clicked
        GO back to the category selection screen
    END IF

END
