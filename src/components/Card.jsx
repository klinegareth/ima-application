import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import * as css from './Card.module.css';

export const Card = ({
	hoverTitle,
	hoverText,
	linkTo
}) => {
	const [isShown, setIsShown] = useState(false);

	return (
		<div className={css.Card}>
				title
			<a href={linkTo}>
				<div className={css.reveal}>
					<header className={css.revealTitle}>{hoverTitle}</header>
					<p className={css.revealText}> {hoverText} </p>
				</div>
			</a>
		</div>
	);
};

export default Card;
