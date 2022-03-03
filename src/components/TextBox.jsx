import css from './TextBox.module.css';

const TextBox = (props) => {
	const isIMA = props.isIMA;
	if (isIMA) {
		return (
			<div className={css.TextBox}>
				<h1 className={css.imah1}>
					{props.title}
				</h1>
				<p className={css.imap}>
					{props.text}
				</p>
			</div>
		)
	} else {
		return (
			<div className={css.TextBox}>
				<h1>
					{props.title}
				</h1>
				<p>
					{props.text}
				</p>
			</div>
		)
	}
};

export default TextBox
