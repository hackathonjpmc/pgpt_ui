import React from 'react';
import { Layout, Space, Input, Divider, List, Tabs } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
	textAlign: 'center',
	color: '#fff',
	lineHeight: '64px',
};

export default function References() {
	return (
		<>
			<Header style={headerStyle}>References</Header>
			<Tabs
				tabPosition={'left'}
				items={new Array(3).fill(null).map((_, i) => {
					const id = String(i + 1);
					return {
						label: `Tab ${id}`,
						key: id,
						children: `Content of Tab ${id}`,
					};
				})}
			/>
		</>
	);
}
