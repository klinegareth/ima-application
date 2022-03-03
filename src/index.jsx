import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import Card from './components/Card';
import Chevron from './components/Chevron';
import Layout from './components/Layout';
import ColumnLayout from './components/ColumnLayout';
import Background from './components/Background';
import TextBox from './components/TextBox'

ReactDOM.render(
  <React.StrictMode>
	<ColumnLayout>
		<Chevron />
		<TextBox title="Hello!" text="My name is Kline Gareth. I am something something something, here are some projects, etc"/>
	</ColumnLayout>
	<Layout>
		<Card />
		<Card />
		<Card />
	</Layout>
	<App />
	<Layout> 
		<TextBox isIMA={true} title="Why IMA?" text="Making interactive media has been a way for me to express myself my whole life. I grew up using Scratch to make animations, games, and short videos, and then taught myself real programming languages. The opportunity to pursue my interests in a collaborative, accademic environment. Having grown up with the Internet, interactive media has shaped me and my generation. It gave me a space to foster my creativity, learn new ideas, and establish my identity. At the same time, the conflict and attention-hungry online world has upended how people communicate and spend their time. The line between the real and virtual world has never been less clear. We live in a world where emerging forms of digital media have the power to enrich people's lives both online and off."/>
	</Layout>
	<Background />
  </React.StrictMode>,
  document.getElementById('root')
)
