import React from 'react';
import classes from './card.module.scss';

interface CardProps {
	children: JSX.Element
}

export const Card:React.FC<CardProps> = ({ children }) => {
	return (
		<div className={classes.card_wrapper}>
			<div className={classes.card_inner}>
				{ children }
			</div>
		</div>
	);
};
