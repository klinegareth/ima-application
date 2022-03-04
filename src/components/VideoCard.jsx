import React, { useState, useEffect, useNavigate } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import SplitPane, {
	SplitPaneLeft,
	SplitPaneRight,
} from './SplitPane';
import ContentContext from './ContentContext';
import { videos } from '../content/videos';
import Layout from './Layout';
import css from './VideoCard.module.css';

function VideoCard() {
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

export default VideoCard;
