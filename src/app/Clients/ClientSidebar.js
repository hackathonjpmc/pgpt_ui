import React from 'react';
import { Layout, Space, Input, Divider, List } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const listStyle = {
	padding: '0px 5px 15px 10px',
};

export default function ClientSidebar({
	setCurrentService,
	currentService,
	services,
}) {
	const highlightCurrentService = (id) => {
		const color = id === currentService ? 'white' : 'black';
		return color;
	};

	return (
		<>
			<List
				dataSource={services}
				style={listStyle}
				renderItem={(item) => (
					<List.Item
						onClick={() => setCurrentService(item.id)}
						style={{
							color: `${highlightCurrentService(item.id)}`,
						}}
					>
						<a>{item.name}</a>
					</List.Item>
				)}
			/>
		</>
	);
}

// TODO: Add settings to the bottom of clients bar
// TODO: Add user icon to bottom of clients bar
