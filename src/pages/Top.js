import React, { useContext, useEffect } from 'react';
import { fetchPopularData } from '../apis';
import Layout from '../components/Layout/Layout';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem';
import { Store } from '../store/index';

const Top = () => {
	const { globalState, setGlobalState } = useContext(Store);

	useEffect(() => {
		fetchPopularData().then((res) => {
			//reducerを実行するための呼び出し関数
			setGlobalState({
				type: 'SET_POPULAR',
				payload: { popular: res.data.items },
			});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout>
			<VideoGrid>
				{globalState.popular &&
					globalState.popular.map((popular) => {
						return (
							<VideoGridItem
								id={popular.id}
								key={popular.id}
								src={popular.snippet.thumbnails.standard.url}
								title={popular.snippet.title}
							/>
						);
					})}
			</VideoGrid>
		</Layout>
	);
};

export default Top;
