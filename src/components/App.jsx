import React, { useState, useEffect, useNavigate } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import SplitPane, {
	SplitPaneLeft,
	SplitPaneRight,
} from './SplitPane';
import ContentContext from './ContentContext';
import { videos } from '/src/content/videos';
import Layout from './Layout';
import * as css from './App.module.css';

function App() {
	const [currVideo, setCurrVideo] = useState(0);

	return (
		<Layout>
			<SplitPane className={css.splitpane}>
		<ContentContext.Provider value={{ videos, currVideo, setCurrVideo }}>
				<SplitPaneLeft className={css.splitpaneleft}/>
				<SplitPaneRight className={css.splitpaneright}/>
		</ContentContext.Provider>
			</SplitPane>
		</Layout> 
	)
}

export default App;
