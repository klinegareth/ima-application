import { useState } from 'react'
import * as css from './Deck.module.css'

const Deck = ({ children }) => {
	return (
		<div className={css.container}>
			<div className={css.content}>
			{children}
			</div>
		</div>
  );
};

export default Deck
