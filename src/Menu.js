import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as actions from './utility/actions';
import {bindActionCreators} from 'redux';

class Menu extends Component {
	
	render() { 
		const winner = this.props.winner;
		const xIsNext = this.props.xIsNext;

		let isTie = winner === 'tie' ? true : false;
		let winnerName = winner === 'X' ? this.props.playerNameX : this.props.playerNameO;

		let winnerClass = 'winner ';
		winnerClass += winner === 'X' ? 'playermark-x' : 'playermark-o'

		return (
		<div className="game-options">
		<div className="status">
			{winner ? (
				isTie ? (
					<span className="tie"> Hra skončila remízou. </span>
				) : (
					<span className={`${winnerClass}`}>Vítěz je: {winnerName}</span>
				)
      		) : (
        		<span className="next-player">Na řadě je hráč: {xIsNext ? this.props.playerNameX : this.props.playerNameO}</span>
      		)}
			<br />
			<span className="step-number">Číslo tahu: {this.props.stepNumber}</span>
		</div>
		<div>
			<div className="label">Počet řádků: <input value={this.props.numberOfRows} type="number" onChange={(e) => this.props.handleChangeNumberOfRows(e, this.props.numberOfColumns)}/></div><br />
			<div className="label">Počet sloupců:<input value={this.props.numberOfColumns} type="number" onChange={(e) => this.props.handleChangeNumberOfColumns(e, this.props.numberOfRows)}/></div><br/>

			<div className="label">Hráč X: <input value={this.props.playerNameX} type="text" onChange={(e) => this.props.handleChangeNamePlayerX(e)}/></div><br />
			<div className="label">Hráč O:<input value={this.props.playerNameO} type="text" onChange={(e) => this.props.handleChangeNamePlayerO(e)}/></div><br/>
		</div>
		<button onClick={() => this.props.startNewGame(this.props.numberOfRows, this.props.numberOfColumns)}>Nová hra</button>
		</div>
		);
	}
};

function mapStateToProps(state, props) {
	return {
		winner: state.reducer.winner,
		xIsNext: state.reducer.xIsNext,
		stepNumber: state.reducer.stepNumber,
		numberOfColumns: state.reducer.numberOfColumns,
		numberOfRows: state.reducer.numberOfRows,
		playerNameX: state.reducer.playerNameX,
		playerNameO: state.reducer.playerNameO,
	};
};

function mapDispatchToProps(dispatch){
	return {
		handleChangeNumberOfRows: bindActionCreators(actions.handleChangeNumberOfRows, dispatch),
		handleChangeNumberOfColumns: bindActionCreators(actions.handleChangeNumberOfColumns, dispatch),
		handleChangeNamePlayerX: bindActionCreators(actions.handleChangeNamePlayerX, dispatch),
		handleChangeNamePlayerO: bindActionCreators(actions.handleChangeNamePlayerO, dispatch),
		startNewGame: bindActionCreators(actions.startNewGame, dispatch),
	};	
};
 
export default connect(mapStateToProps, mapDispatchToProps) (Menu);