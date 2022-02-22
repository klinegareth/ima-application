import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import * as css from './Card.module.css';

export const Card = ({
	hoverText,
	onClick
}) => {
	const [isShown, setIsShown] = useState(false);

	return (
		<div className={css.wrapper}>
				title
				<div className={css.reveal}>
					<p> This will appear on hover! </p>
				</div>
		</div>
	);
};

export default Card;
