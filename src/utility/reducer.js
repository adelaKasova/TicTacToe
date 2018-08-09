const initialState = {
	winner: null,
	squares: Array(10).fill(Array(10).fill(null)),
	xIsNext: true,
	stepNumber: 0,
	numberOfColumns: 10,
	numberOfRows: 10,
	isEnd: false,
	playerNameX: 'X',
	playerNameO: 'O',
};

export default (state = initialState, action) => {

	switch (action.type) {

		case 'new_game':{
			return {
				...state,
				xIsNext: action.payload.xIsNext,
				squares:  action.payload.squares,
				stepNumber:  action.payload.stepNumber,
				isEnd:  action.payload.isEnd,
			}
		}

		case 'next_round': {
			return {
				...state,
				stepNumber: state.stepNumber + 1,
				squares: action.payload.squares,
				xIsNext: action.payload.xIsNext,
				isEnd: action.payload.isEnd,
				winner: action.payload.winner
				
			}
		}

		case 'change_player_name_x':{
			return {
				...state,
				playerNameX: action.payload
			}
		}

		case 'change_player_name_o':{
			return {
				...state,
				playerNameO: action.payload
			}
		}

		case 'change_number_of_rows':{
			return {
				...state,
				squares: action.payload.squares,
				numberOfRows: action.payload.numberOfRows
			}
		}

		case 'change_number_of_columns':{
			return {
				...state,
				squares: action.payload.squares,
				numberOfColumns: action.payload.numberOfColumns
			}
		}

		default: return state;
	};
};