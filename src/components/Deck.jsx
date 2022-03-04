import css from './Deck.module.css'

const Deck = ({children}) => {
	return (
		<div className={css.Deck}>
			<div className={css.content}>
				{children}
			</div>
		</div>
	)
}

export default Deck;
