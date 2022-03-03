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
		<TextBox isIMA={true} title="Why IMA?" text="My name is Kline Gareth. I am something something something, here are some projects, etc"/>
	</Layout>
	<Background />
  </React.StrictMode>,
  document.getElementById('root')
)
