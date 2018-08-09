import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../utility/actions';
import {bindActionCreators} from 'redux';

function Square(props) {
		let classNames = ['square'];
		let value = props.squares[props.rowI][props.colI]
		if(value !== null){
			var className = value === 'X' ? 'playermark-x' : 'playermark-o';
			classNames.push(className);
		}

		classNames = classNames.join(' ');

		return (
			<button className={`${classNames}`} onClick={() => props.handleClick(props.squares, props.rowI, props.colI, props.xIsNext, props.isEnd)}>
			  {value}
			</button>
		);
}

function mapStateToProps(state, props) {
	return {
		xIsNext: state.reducer.xIsNext,
		isEnd: state.reducer.isEnd,
		squares:state.reducer.squares
	};
};

function mapDispatchToProps(dispatch){
	return {
		handleClick: bindActionCreators(actions.handleClick, dispatch)
	};	
};

export default connect(mapStateToProps, mapDispatchToProps) (Square);