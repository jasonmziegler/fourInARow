class Game {
    constructor () {
    	this.board = new Board();
    	this.players = this.createPlayers();
    	this.ready = false;
    }


    get activePlayer() {
    	return this.players.find(player => player.active);
    }


    /** 
    * Creates two player objects
    * @return {array} An array of two player objects.
    */
    createPlayers() {
    	const playerArray = [new Player("Player 1", "#e15258", 1, true ),
    						 new Player("Player 2", "#e59a13", 2 )];
    	return playerArray;

    }


    /** 
 	* Initializes game. 
 	*/
    startGame() {
    	this.board.drawHTMLBoard();
    	this.activePlayer.activeToken.drawHTMLToken();
    	this.ready = true;

    }


    /** 
 	* Branches code, depending on what key player presses
 	* @param {Object} e - Keydown event object
 	*/
    handleKeydown(e) {
    	if (this.ready) {
	    	if (e.key === "ArrowLeft") {
	    		this.activePlayer.activeToken.moveLeft();
	    	} else if (e.key === "ArrowRight") {
	    		this.activePlayer.activeToken.moveRight(this.board.columns);
	    	} else if (e.key === "ArrowDown") {
	    		//console.log(e.key);
	    		this.playToken();
	    	}
    	}

    }


    playToken() {
    	let spaces = this.board.spaces;
    	//console.log(spaces);
    	let activeToken = this.activePlayer.activeToken;
    	//console.log(activeToken);
    	let targetColumn = spaces[activeToken.columnLocation];
    	//console.log(targetColumn);
    	let targetSpace = null;

    	
	    for (let space of targetColumn) {
	    	if (space.token === null) {
	    		targetSpace = space;
	    		//console.log(space);
	    	}
	    }

	    if (targetSpace !== null) {
	    	game.ready = false;
	    	activeToken.drop(targetSpace);
	    }
    }
}