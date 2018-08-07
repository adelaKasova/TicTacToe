import React,{Component} from 'react';
import Board from './game/Board';
import Menu from './Menu';

class Main extends Component {
	render(){
		const squares = this.state.squares;
		const winner = calculateWinner(squares);
		
		let status;
		if(winner){
			status = 'Winner: ' + winner;
		}else{
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<div>
			<div className="game">
				<Menu status={status} stepNumber={this.state.stepNumber} numberOfRows={this.state.numberOfRows} handleChangeNumberOfRows={(e) => this.handleChangeNumberOfRows(e)} numberOfColumns={this.state.numberOfColumns} handleChangeNumberOfColumns={(e) => this.handleChangeNumberOfColumns(e)} startNewGame={this.startNewGame}/>
				<div className="game-board">
					<Board numberOfColumns={this.state.numberOfColumns} numberOfRows={this.state.numberOfRows} squares={squares} handleClick={(r, i) => this.handleClick(r, i)}/>
			 	</div>
			</div>
			</div>
		  );
	};

	constructor(){
		super();
		this.state = {
			xIsNext: true,
			squares: Array(10).fill(Array(10).fill(null)),
			stepNumber: 0,
			numberOfColumns: 10,
			numberOfRows: 10,
			isEnd: false
		}
	};

	startNewGame = () =>{
		this.setState({
			xIsNext: true,
			squares: Array(this.state.numberOfRows).fill(Array(this.state.numberOfColumns).fill(null)),
			stepNumber: 0,
			isEnd: false
		});
	};

	handleChangeNumberOfRows = (e) =>{
		let value = parseInt(e.target.value, 10);
		this.setState({
			squares: Array(value).fill(Array(this.state.numberOfColumns).fill(null)),
			numberOfRows: value
		});
	};

	handleChangeNumberOfColumns = (e) =>{
		let value = parseInt(e.target.value, 10);
		this.setState({
			squares: Array(this.state.numberOfRows).fill(Array(value).fill(null)),
			numberOfColumns: value
		});
	};

	handleClick (r, i) {
		let squares = [...this.state.squares];
		if(this.state.isEnd || squares[r][i]){return;}
		if (calculateWinner(squares)) {
			this.setState({
				isEnd: true
			});
		  return;
		}
		let row = [...squares[r]];
		row[i] = this.state.xIsNext ? "X" : "O";
		squares[r] = row;
		this.setState({
			squares: squares,
		  	stepNumber: this.state.stepNumber + 1,
		  	xIsNext: !this.state.xIsNext
		});
	 };
};


function calculateWinner(squares){
	
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
		return 'Remíza';
	}
	return null;
	
};
export default Main;