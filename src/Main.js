import React,{Component} from 'react';
import Board from './game/Board';
import Menu from './Menu';
import {connect} from 'react-redux';

class Main extends Component {
	render(){

		return (
			<div>
			<div className="game">
				<Menu/>
				<div className="game-board">
					<Board/>
			 	</div>
			</div>
			</div>
		  );
	};
};

function mapStateToProps(state, props) {
	return {
		winner: state.reducer.winner,
		squares: state.reducer.squares,
		stepNumber: state.reducer.stepNumber,
		xIsNext: state.reducer.xIsNext,
		isEnd: state.reducer.isEnd
	};
};

export default connect(mapStateToProps) (Main);