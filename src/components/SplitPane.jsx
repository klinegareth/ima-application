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

import css from './App.module.css'


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

	/* const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		console.log(scrollPosition);
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); */

	const { videos, setCurrVideo } = useContext(ContentContext);

	return (
		<div {...props} className={css.splitpaneleft}>
			<h1>Videos</h1>
			<div className={css.videolist}>
				{videos.map((el, i) => {
					return (
						<div key={i} className={css.videolistitem}>
							<a href="#" onClick={() => setCurrVideo(el.id)}>
								{el.title}
							</a>
						</div>
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
			<div className={css.videotitle}>
				<h1>{video.title}</h1>
			</div>
			<div className={css.video}>
				<YoutubeEmbed embedId={video.videoId} w={853} h={480}/>
			</div>
			<div className={css.videodescription}>
			<p> {video.description} </p>
			</div>
		</div>
	);
};

export default SplitPane;
