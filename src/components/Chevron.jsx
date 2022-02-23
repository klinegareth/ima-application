import React, { Component } from 'react';
import chevron from '../images/chevron.png';
import * as css from './Chevron.module.css';

const Chevron = () => {
	return (
		<img className={css.Chevron} src={chevron}/>
	)
}

export default Chevron;
