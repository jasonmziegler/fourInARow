class Token {
    constructor() {
    	this.owner = owner;
    	this.id = `token-${index}-${owner-id}`;
    	this.dropped = false;

    }

    /*
    * This method will draw a token.
    */
    drawHTMLToken() {
    	const newDiv = document.createElement("div");
    	document.getElementById('game-board-underlay').appendChild(token);
    	newDiv.setAttribute("id", this.id);
    	newDiv.setAttribute("class", "token");
    	newDiv.style.backgroundColor = this.owner.color;

    }

    get htmlToken() {
    	return this.drawHTMLToken;
    }
}