import React, {  useContext } from 'react';
import { Store } from '../../store/index';
import SideListItem from '../SideListItem/SideListItem';

import Style from './SideList.module.scss';

const SideList = () => {
	const { globalState } = useContext(Store);

	return (
		<div className={Style.sidenav}>
			{globalState.related.map ? (
				globalState.related.map((video) => {
					const id = video.id.videoId;
					// const title = video.snippet.title
				
					// const url = video.snippet.thumbnails.medium.url
					return (
						<SideListItem
							id={id}
							key={id}
							// title={title}
							// src={url}
						/>
					);
				})
			) : (
				<span>no data</span>
			)}
		</div>
	);
};

export default SideList;
