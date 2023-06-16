import React, { useState, useEffect } from 'react';
import { Layout, Space, Input, Divider, List, Image, Tabs, Card } from 'antd';
import data from '../../../public/bigLoremIpsum.json';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
	textAlign: 'center',
	color: '#fff',
	lineHeight: '64px',
};

export default function References({ currentResponse }) {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		if (currentResponse.reference) {
			const tabElements = currentResponse.reference.map((e, i) => {
				return {
					label: `Resource ${i + 1}`,
					children: <div> {e}</div>,
					key: i,
				};
			});

			setResources(tabElements);
		}
		console.log('RESPONSE!!!! \n\n\n\n\n', currentResponse);
		console.log('STATE?!?!!? \n\n\n\n\n\n', resources);
	}, [currentResponse]);

	return (
		<>
			<Header style={headerStyle}>References</Header>
			<Tabs tabPosition={'left'} items={resources} />
		</>
	);
}
