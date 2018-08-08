import React,{Component} from 'react';

class Menu extends Component {
	
	render() { 
		const winner = this.props.winner;
		const xIsNext = this.props.xIsNext;

		let isTie = winner === 'Remíza' ? true : false;
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
			<div className="label">Počet řádků: <input value={this.props.numberOfRows} type="number" onChange={this.props.handleChangeNumberOfRows}/></div><br />
			<div className="label">Počet sloupců:<input value={this.props.numberOfColumns} type="number" onChange={this.props.handleChangeNumberOfColumns}/></div><br/>

			<div className="label">Hráč X: <input value={this.props.playerNameX} type="text" onChange={this.props.handleChangeNamePlayerX}/></div><br />
			<div className="label">Hráč O:<input value={this.props.playerNameO} type="text" onChange={this.props.handleChangeNamePlayerO}/></div><br/>
		</div>
		<button onClick={this.props.startNewGame}>Nová hra</button>
		</div>
		);
	}
}
 
export default Menu;