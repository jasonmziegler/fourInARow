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


}