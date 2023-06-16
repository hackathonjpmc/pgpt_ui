import React, { useState, useEffect } from 'react';
import { Layout, Space, Input, Divider, List, Image, Tabs, Card } from 'antd';
import data from '../../../public/bigLoremIpsum.json';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
	textAlign: 'center',
	color: '#fff',
	lineHeight: '64px',
};

const arr = ["data1.csv", "how-to-reduce-payment-card-interchange-fees.pdf", "how-to-optimize-interchange-fees.pdf", "data2.csv", "data3.csv", "data4.csv", "data5.csv"]

export default function References() {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await data;
				const tabElements = response.res.map((e, i) => {
					return {
						label: `${arr[i]}`,
						children: <div> {e.message.substring(0, i * 50)}</div>,
						key: i,
					};
				});

				setResources(tabElements, resources);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchData();
	}, []);

	const referenceCard = (item) => {
		// return (
		// 	<Card>
		// 		{item.message ? (
		// 			<div style={{ padding: 0 }}>{item.message}</div>
		// 		) : item.images ? (
		// 			item.images.map((imgSrc, index) => (
		// 				<Image key={index} width={200} src={imgSrc} />
		// 			))
		// 		) : null}
		// 	</Card>
		// );
	};

	return (
		<>
			<Header style={headerStyle}>References</Header>
			<Tabs tabPosition={'left'} items={resources} />
		</>
	);
}
