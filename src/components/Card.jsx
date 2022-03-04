import React, { useState } from 'react';
import css from './Card.module.css';

export const Card = ({
	title,
	desc,
	linkTo,
	children
}) => {
	return (
		<div className={css.Card}>
			<header>
				{title}
			</header>
				{children}
			<a href={linkTo} target="_blank" rel="noopener noreferrer">
				<div className={css.reveal}>
					<p className={css.revealText}> {desc} </p>
				</div>
			</a>
		</div>
	);
};

export default Card;
