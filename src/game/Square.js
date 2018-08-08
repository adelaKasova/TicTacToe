import React from 'react';

export default function Square(props) {
		let classNames = ['square'];
		if(props.value !== null){
			var className = props.value === 'X' ? 'playermark-x' : 'playermark-o';
			classNames.push(className);
		}

		classNames = classNames.join(' ');

		return (
			<button className={`${classNames}`} onClick={props.handleClick}>
			  {props.value}
			</button>
			);
}