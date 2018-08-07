import React,{Component} from 'react';

class Menu extends Component {
	
	render() { 
		return (
		<div className="game-options">
		<div className="status">
			<span className="next-player">{this.props.status}</span><br />
			<span className="step-number">Číslo tahu: {this.props.stepNumber}</span>
		</div>
		<div>
			<span className="label">Počet řádků: </span><input value={this.props.numberOfRows} type="number" onChange={this.props.handleChangeNumberOfRows}/><br />
			<span className="label">Počet sloupců:</span><input value={this.props.numberOfColumns} type="number" onChange={this.props.handleChangeNumberOfColumns}/><br/>
		</div>
		<button onClick={this.props.startNewGame}>Nová hra</button>
		</div>
		);
	}
}
 
export default Menu;