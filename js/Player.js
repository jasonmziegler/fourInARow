class Player {
    constructor(name, color, id, active) {
      this.name = name;
      this.id = id;
      this.color = color;
      this.active = false,;
      this.tokens = createTokens(21);
    }

    /**
 	* Creates token objects for player
 	* @param     {number}    num - Number of token objects to be created
 	* @returns   {Array}     An array of the newly created token objects
	 */
    createTokens(num) {
    	 const newTokenArray = [];
	 	for (let i= 0; i < num; i++){
	 		let token = new Token(i, this);
	 		newTokenArray.push(token)
	 	}
	 	return newTokenArray;
    }

    get unusedTokens() {
    	return this.tokens.filter( token => !token.dropped);
    }

    get activeToken() {
    	return this.unusedTokens[0];
    }
}
