import React from 'react';
import Square from './Square';
import {connect} from 'react-redux';

function Row(props) {
	let squares = [];
	for (let index = 0; index < props.numberOfColumns; index++) {
		squares.push(<Square key={`${props.row}${index}`} colI={index} rowI={props.row}/>);
	}
	return (
		<div className="board-row">
			{squares.map((square => square))}
		</div>
	);
};

function mapStateToProps(state, props) {
	return {
		numberOfColumns: state.reducer.numberOfColumns,
	};
};

export default connect(mapStateToProps) (Row);