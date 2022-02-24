import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import Chevron from './components/Chevron'
import Layout from './components/Layout'
import Deck from './components/Deck'
import Background from './components/Background'

ReactDOM.render(
  <React.StrictMode>
    <Layout /> 
    <Layout> 
		<Chevron />
		<Deck>
			<Card />
			<Card />
			<Card />
		</Deck>
	</Layout>
	<Background />
  </React.StrictMode>,
  document.getElementById('root')
)
