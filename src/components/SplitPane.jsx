import React, {
	createRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';

import ContentContext from './ContentContext';
import SplitPaneContext from './SplitPaneContext';

import YoutubeEmbed from './YoutubeEmbed';
import {videos} from '../content/videos';

import * as css from './App.module.css'

const SplitPane = ({ children, ...props }) => {
	const [clientHeight, setClientHeight] = useState(null);
	const [clientWidth, setClientWidth] = useState(null);

	return (
		<div {...props}>
			<SplitPaneContext.Provider
				value={{
					clientHeight,
					setClientHeight,
					clientWidth,
					setClientWidth,
				}}
			>
				{children}
			</SplitPaneContext.Provider>
		</div>
	);
};

export const SplitPaneLeft = (props) => {
	const { videos, setCurrVideo } = useContext(ContentContext);

	return (
		<div {...props} className="split-pane-left">
			<h1>Videos</h1>
			<div className="video-list">
				{videos.map((el, i) => {
					return (
						<li key={i}>
							<a href="#" onClick={() => setCurrVideo(el.id)}>
								{el.title}
							</a>
						</li>
					);
				})}
			</div>
		</div>
	)
}

export const SplitPaneRight = (props) => {
	const { videos, currVideo } = useContext(ContentContext);
	const video = videos.find((el) => el.id === currVideo);

	return (
		<div {...props} className={css.splitpaneright}>
			<div className={css.video}>
				<YoutubeEmbed embedId={video.videoId} />
			</div>
		</div>
	);
};

export default SplitPane;
