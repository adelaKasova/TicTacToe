export const startNewGame = (numberOfRows, numberOfColumns) =>{
	return {
		type: 'new_game',
		payload: {
			xIsNext: true,
			squares: Array(numberOfRows).fill(Array(numberOfColumns).fill(null)),
			stepNumber: 0,
			isEnd: false,
		}
	};
};

export const handleChangeNumberOfRows = (e, numberOfColumns) => {
	let value = parseInt(e.target.value, 10);
	return {
		type: 'change_number_of_rows',
		payload:{
			squares: Array(value).fill(Array(numberOfColumns).fill(null)),
			numberOfRows: value
		}		
	}
};

export const handleChangeNumberOfColumns = (e, numberOfRows) =>{
	let value = parseInt(e.target.value, 10);
	return {
		type: 'change_number_of_columns',
		payload:{
			squares: Array(numberOfRows).fill(Array(value).fill(null)),
			numberOfColumns: value
		}		
	}
};

export const handleChangeNamePlayerX = (e)=>{
	let value = e.target.value;
	return {
		type: 'change_player_name_x',
		payload:value
	}
};

export const handleChangeNamePlayerO = (e)=>{
	let value = e.target.value;
	return {
		type: 'change_player_name_o',
		payload: value
	}
};

export const handleClick = (squares, r, i, xIsNext, isEnd) => {
	let newSquares = [...squares];
	if(isEnd || newSquares[r][i]){return {type: null};}
	let row = [...newSquares[r]];
	row[i] = xIsNext ? "X" : "O";
	newSquares[r] = row;
	let winner = calculateWinner(newSquares)
	return {
		type: 'next_round',
		payload: {
			squares: newSquares,
			xIsNext: !xIsNext,
			winner: winner,
			isEnd: winner !== null ? true : false
		}
	};
 };

export const calculateWinner = (squares) => {
	for (let r = 0; r < squares.length; r++) {
		for (let s = 0; s < squares[r].length; s++) {
			if (squares[r][s] !== null) {
				//vodorovná kontrola
				if (squares[r][s - 2] === squares[r][s - 1] && squares[r][s - 1] === squares[r][s] &&  squares[r][s] === squares[r][s + 1] &&  squares[r][s + 1] === squares[r][s + 2]) {
					return squares[r][s];
					
				}

				
				if (squares[r - 2] !== undefined &&  squares[r - 1] !== undefined &&  squares[r + 1] !== undefined &&  squares[r + 2] !== undefined) {

					//svislá kontrola
					if (squares[r - 2][s] === squares[r - 1][s] && squares[r - 1][s] === squares[r][s] &&  squares[r][s] === squares[r + 1][s] &&  squares[r + 1][s] === squares[r + 2][s]) {
						return squares[r][s];
					}

					//diagonal levá-> pravá
					if (squares[r-2][s-2] === squares[r-1][s-1] && squares[r-1][s-1] === squares[r][s] && squares[r][s] === squares[r+1][s+1] && squares[r+1][s+1] === squares[r+2][s+2]){
						return squares[r][s];
					}

					//diadonal pravá ->levá
					if (squares[r-2][s+2] === squares[r-1][s+1] && squares[r-1][s+1] === squares[r][s] && squares[r][s] === squares[r+1][s-1] && squares[r+1][s-1] === squares[r+2][s-2]){
						return squares[r][s];
					}
				}
			}
		}
	}

	var arrayOfNulls = [];
	for (let i = 0; i < squares.length; i++) {
		let row = squares[i];
		const result = row.filter(square => square === null);
		arrayOfNulls = arrayOfNulls.concat(result)
	}
	if(arrayOfNulls.length === 0){
		return 'tie';
	}
	return null
	
};