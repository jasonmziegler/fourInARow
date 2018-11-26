class Board {
    constructor() {
    	this.rows = 6;
    	this.columns = 7;
    	this.spaces = this.createSpaces();

    }

    createSpaces() {
    	const spaces = [];

    	for (let x=0;x<this.rows;x++) {
    		const col = [];

    		for (let y=0;y<this.columns;y++){
    			const space = new Space(x,y);
    			col.push(space);
    		}

    		spaces.push(col);

    	}

    	return spaces;
    }

    /*
    * Draws the game board in browser.
    */
    drawHTMLBoard() {
    	for (let column of this.spaces;) {
    		for (let space of column) {
    			space.drawSVGSpace();
    		}
    	}
    }
}