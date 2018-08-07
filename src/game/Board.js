import React,{Component} from 'react';
import Row from './Row';

export default class Board extends Component {

	render(){
		const numberOfRows = this.props.numberOfRows;
		const numberOfColumns = this.props.numberOfColumns;
		const rows = [];
		for (let index = 0; index < numberOfRows; index++) {
			rows.push(<Row key={index} row={index} numberOfColumns={numberOfColumns} squares={this.props.squares} handleClick={this.props.handleClick}></Row>);
		}
		return (
		<div>
			{rows.map((row => row))}
		</div>
		)
	};
}