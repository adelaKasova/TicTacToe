import React from 'react';
import Square from './Square';

export default function Row(props) {
	let squares = [];
	for (let index = 0; index < props.numberOfColumns; index++) {
		squares.push(<Square key={`${props.row}${index}`} value={props.squares[props.row][index]} handleClick={() => props.handleClick(props.row, index)}/>);
	}
	return (
		<div className="board-row">
			{squares.map((square => square))}
		</div>
	);
}