import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import Chevron from './components/Chevron'
import Layout from './components/Layout'
import Deck from './components/Deck'
import Background from './components/Background'
import YoutubeEmbed from './components/YoutubeEmbed'

ReactDOM.render(
  <React.StrictMode>
    <Layout> 
		<Chevron />
			{ /* Something like:
			<Container>
				<SidePanel />
				<Content>
				<YoutubeEmbed embedId="BDyekxHqV6Q"/> 
				<YoutubeEmbed embedId="fc_GmPxfAKw"/> 
				obvi these will be loaded auto based on what's selected in the list, just putting it all here 4 now to get a sense of what needs to be added
				</Content>
			</Container>
			*/}
		<Deck>
			<Card title="anchor" linkTo="https://anchor.klinegareth.com"/>
			<Card />
			<Card />
		</Deck>
	</Layout>
    <Layout /> 
	<Background />
  </React.StrictMode>,
  document.getElementById('root')
)
