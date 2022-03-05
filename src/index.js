import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Chevron from './components/Chevron';
import Layout from './components/Layout';
import ColumnLayout from './components/ColumnLayout';
import Background from './components/Background';
import TextBox from './components/TextBox';
import TitleBox from './components/TitleBox';
import Deck from './components/Deck';
import YoutubeEmbed from './components/YoutubeEmbed';

ReactDOM.render(
  <React.StrictMode>
	<ColumnLayout>
		<Chevron />
		<TitleBox title="Hello!" text="My name is Kline Gareth. I am a poet and tech enthusiast, and I am excited to apply to Tisch IMA!"/>
	</ColumnLayout>
	<Layout>
		<TextBox title="Poems" text="some in traditional forms, others invented!"/>
		<Deck>
			<Card title="Paradelle for your mother" linkTo="https://www.klinegareth.com/index.php/2022/03/04/paradelle-for-your-mother/" desc="The most 'normal' poem I've written in a while."/>
			<Card title="anchor" linkTo="https://anchor.klinegareth.com" desc="A multimedia poem that emerged from reading about the possibilities of body modification in virtual reality. I used the digital environment to play with new ways of presenting written work."/>
			<Card title="For Sasha" linkTo="https://www.klinegareth.com/index.php/2022/03/04/for-sasha/" desc="A poem written for a dear friend."/>
			<Card title="On the news" linkTo="https://www.klinegareth.com/index.php/2022/02/06/on-the-news/" desc="This poem was written to try and process fear and anger in response to the BBC's publishing of an article accusing trans women of being sexual predators."/>
		</Deck>
	</Layout>
	<Layout>
		<TextBox title="Videos" text="like poems, but with more images"/>
		<Deck>
			<Card title="For Elly" linkTo="https://www.youtube.com/watch?v=fc_GmPxfAKw" desc="A zuihitsu made from a summer's worth of collected notes, games, images, and objects."/>
			<Card title="Queer Poem" linkTo="https://www.youtube.com/watch?v=ZL_UCAoQi1Q" desc="A self-reflection on identity. Made with TouchDesigner and recorded in one take."/>
			<Card title="Playground" linkTo="https://www.youtube.com/watch?v=BDyekxHqV6Q" desc="An experiment with OpenAI's GPT-3 natural language AI."/>
		</Deck>
	</Layout>
	<Layout> 
		<TitleBox isIMA={true} title="Why IMA?" text="I have used interactive media to express myself my whole life. Since discovering Scratch when I was in elementary school, I have gone on to teach myself creative coding and UI/UX design. I only recently started combining my writing practice with my digital media work, and IMA is exactly the place where I can continue to bring together the two sides of my work. Having grown up with the Internet, interactive media has shaped me and my generation. It gave me a space to foster my creativity, learn new ideas, and establish my identity. At the same time, the conflict and attention-hungry online world has upended how people communicate and spend their time. When the real and virtual worlds are closer than ever before, I strive to make things that enrich people's lives, both online and off."/>
	</Layout>
	<Background />
  </React.StrictMode>,
  document.getElementById('root')
)
