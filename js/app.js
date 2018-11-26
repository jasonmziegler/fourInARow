const game = new Game();

const beginButton = document.getElementById('begin-game');

/** 
* Listens for click on `#begin-game` and calls startGame() on game object
*/
beginButton.addEventListener('click', function(){
	game.startGame();
	this.style.display = 'none';
	document.getElementById('play-area').style.opacity = '1';
});
