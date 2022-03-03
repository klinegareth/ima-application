import React, { useState } from 'react';
import css from './Card.module.css';

export const Card = ({
	title,
	hoverTitle,
	hoverText,
	linkTo
}) => {
	const [isShown, setIsShown] = useState(false);

	return (
		<div className={css.Card}>
			<header>
				{title}
			</header>
			<a href={linkTo} target="_blank" rel="noopener noreferrer">
				<div className={css.reveal}>
					<header className={css.revealTitle}>{hoverTitle}</header>
					<p className={css.revealText}> {hoverText} </p>
				</div>
			</a>
		</div>
	);
};

export default Card;
