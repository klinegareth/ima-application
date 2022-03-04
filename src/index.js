import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import VideoCard from './components/VideoCard'
import Card from './components/Card';
import Chevron from './components/Chevron';
import Layout from './components/Layout';
import ColumnLayout from './components/ColumnLayout';
import Background from './components/Background';
import TextBox from './components/TextBox'
import YoutubeEmbed from './components/YoutubeEmbed'

ReactDOM.render(
  <React.StrictMode>
	<ColumnLayout>
		<Chevron />
		<TextBox title="Hello!" text="My name is Kline Gareth. I am a poet and tech enthusiast, and I am excited to apply to Tisch IMA!"/>
	</ColumnLayout>
	<Layout>
		<Card linkTo="https://anchor.klinegareth.com" image=""></Card>
		<Card />
		<Card />
	</Layout>
	<VideoCard />
	<Layout> 
			<TextBox isIMA={true} title="Why IMA?" text="I have used interactive media to express myself my whole life. Since discovering Scratch when I was in elementary school, I have gone on to teach myself creative coding and UI/UX design. I only recently started combining my writing practice with my digital media work, and IMA is exactly the place where I can continue to bring together the two sides of my work. Having grown up with the Internet, interactive media has shaped me and my generation. It gave me a space to foster my creativity, learn new ideas, and establish my identity. At the same time, the conflict and attention-hungry online world has upended how people communicate and spend their time. When the real and virtual worlds are closer than ever before, I strive to make things that enrich people's lives, both online and off."/>
	</Layout>
	<Background />
  </React.StrictMode>,
  document.getElementById('root')
)
