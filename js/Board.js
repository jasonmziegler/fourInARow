class Board {
    constructor() {
    	this.rows = 6,
    	this.columns = 7,
    	this.spaces = createSpaces();

    }

    createSpaces() {
    	const newSpacesArray = [];

    	for (let x=0;x<this.rows;x++) {
    		const column = [];

    		for (let y=0;y<this.columns;y++){
    			const space = new Space(x,y);
    			column.push(space);
    		}

    		newSpaceArray.push(column);

    	}

    	return newSpaceArray;
    }
}