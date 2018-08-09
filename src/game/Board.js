import React,{Component} from 'react';
import Row from './Row';
import {connect} from 'react-redux';

class Board extends Component {

	render(){
		const numberOfRows = this.props.numberOfRows;
		const rows = [];
		for (let index = 0; index < numberOfRows; index++) {
			rows.push(<Row key={index} row={index}/>);
		}
		return (
		<div>
			{rows.map((row => row))}
		</div>
		)
	};
};

function mapStateToProps(state, props) {
	return {
		numberOfRows: state.reducer.numberOfRows,
	};
};

export default connect(mapStateToProps) (Board);