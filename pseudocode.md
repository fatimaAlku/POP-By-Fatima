START the game

DISPLAY the title: "POP Quiz - Click on a category to start playing!"

DISPLAY five categories:
    1. MUSIC
    2. F1
    3. MOVIES
    4. POP CULTURE
    5. GA

WAIT for the player to CLICK on a category
SAVE the selected category

LOAD a list of questions from the chosen category

SET score = 0
SET currentQuestion = 0

WHILE currentQuestion is less than total number of questions
    DISPLAY the current question
    DISPLAY the four answer options

    WAIT for the player to CLICK on one of the options

    IF the selected option is correct
        INCREASE score by 1
    ELSE
        DO NOT change score
    END IF

    INCREASE currentQuestion by 1
    IF currentQuestion < total number of questions
        DISPLAY next question
    END IF
END WHILE

DISPLAY the player’s final score

IF score >= 6
    DISPLAY message: “You won”
ELSE
    DISPLAY message: “You lost”
END IF

SHOW two buttons:
    1. "PlayAgain" - restart quiz in same category
    2. "Home" - go back to category selection screen

WAIT for the player to CLICK a button

IF "Play Again" is clicked
    SET score = 0
    SET currentQuestion = 0
    RELOAD questions from the same category
    RESTART quiz
ELSE IF "Home" is clicked
    RETURN to category selection screen
END IF

END
