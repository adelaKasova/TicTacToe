import React,{Component} from 'react';
import Board from './game/Board';
import Menu from './Menu';

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

export default Main;