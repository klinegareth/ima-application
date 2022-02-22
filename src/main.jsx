import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Card from './components/Card'
import Chevron from './components/Chevron'
import Layout from './components/Layout'

ReactDOM.render(
  <React.StrictMode>
	<Layout>
		<Chevron />
	</Layout>
    <Layout> 
		<Card />
		<Card />
	</Layout>
    <Layout> 
		<Card />
		<Card />
	</Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
