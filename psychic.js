document.onkeyup = function(event) {

    
    if (event.keyCode == 73 && event.ctrlKey) {
        startGame();
    }

    
    else if (event.keyCode >= 65 && event.keyCode <= 90) {

        var key = event.key;
        console.log(computerChoice);
        if (guesses != 0) {
                lettersGuessed += key + ', ';
                if (key == computerChoice) {
                    wins++;
                    display.innerHTML = "You WIN! The computer chose " + computerChoice +
                                        "<br/> To play again press any button.";
                    startGame();
                }
                else if (key != computerChoice && guesses != 0) {
                    guesses--;
                    displayResults('Keep Guessing!', key, 'Not Telling!' , guesses);
                }
            }
            else if (guesses == 0) {
                losses++;
                display.innerHTML = "You LOSE! The computer chose: " + computerChoice +
                                    "<br/> To play again press any button.";
                startGame();
            }
        }

   
    else {
        alert("Only A-Z allowed.");
    }
}