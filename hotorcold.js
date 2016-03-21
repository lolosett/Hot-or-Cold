var Game = {};
Game.createAnswer= function createAnswer() { 
        return Math.floor((Math.random() * 100) + 1);
        };
Game.answer= Game.createAnswer();
Game.prevGuesses= [];
Game.submit = function submit(guess) {
 		console.log(guess);
		var output;
		var diff = Game.answer - guess ;
		    diff = (diff < 0)? diff*-1:diff ;
		if (guess === undefined) {
			output = 'Guess a number';
		} else if (guess < 1 || guess > 100) {
		    output = 'Guess a number 1-100';
		} else {
        	if (guess === Game.answer) {
        	    output = 'You got it!';
    		} else if ( diff > 50) {
    			output = 'Ice Cold'; 
    		} else if (diff > 30 ) {
    			output = 'Cold';		
    		} else if (diff > 20) {
    			output = 'Warm';
    		} else if (diff > 10 ) {
    		    output = "Hot";
    		} else if (diff > 1) {
    		    output = 'Very Hot';
    		} else {
    			output = 'nope...guess again';
    		} 
    		Game.prevGuesses.push(guess);
    		console.log('Your past guesses',Game.prevGuesses);
    		console.log('You have made',Game.prevGuesses.length,'guesses');
		}
		console.log(output);
		if (guess === Game.answer) {
		    Game.newGame();
		}
    };
Game.newGame = function newGame() {
    Game.prevGuesses=[];
	Game.answer= Game.createAnswer();
	console.log("The number is " + Game.answer);
	console.log("Submit a number by using 'Game.submit(guess)' ");
	};

Game.newGame();