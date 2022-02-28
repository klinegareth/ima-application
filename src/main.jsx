import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import Card from './components/Card';
import Chevron from './components/Chevron';
import Layout from './components/Layout';
import Background from './components/Background';

ReactDOM.render(
  <React.StrictMode>
	<Layout>
		<Chevron />
	</Layout>
	<Layout>
		<Card />
		<Card />
		<Card />
	</Layout>
	<App />
	<Layout> 
	</Layout>
	<Background />
  </React.StrictMode>,
  document.getElementById('root')
)
