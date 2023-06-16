'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Layout, Space, Input, Anchor, Row, Col } from 'antd';
import ChatPanel from '@/app/Chat/ChatPanel';
import ClientSidebar from '@/app/Clients/ClientSidebar';
import References from '@/app/References/References';
import ViewChat from '@/app/Chat/ViewChat';

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const headerStyle = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
};

const chatPanelStyle = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '70px',
	color: '#fff',
	backgroundColor: '#108ee9',
	flex: 1,
};

const siderStyle = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#3ba0e9',
	width: '33%',
};

const spaceStyle = {
	width: '100%',
	height: '100%',
	display: 'flex',
	flexGrow: 1,
};

const contentStyle = {
	display: 'flex',
	flexGrow: 1,
	height: '100%',
	// height: '1000px', // height can be hardcoded here
};

const fakeServices = [
	{
		id: '0',
		name: 'Portfolio Benchmark',
	},
	{
		id: '1',
		name: 'Portfolio Summary',
	},
	{
		id: '2',
		name: 'Optimality',
	},
	{
		id: '3',
		name: 'Key Insights',
	},
	{
		id: '4',
		name: 'Internal Profitability',
	},
];

export default function Home() {
	const [currentService, setCurrentService] = useState('');
	const [services, setServices] = useState([]);
	const [currentResponse, setCurrentResponse] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fakeServices;
				// const response = await fetch('!someEndpoint!');
				// const json = await response.json();
				setServices(response);
				setCurrentService('0');
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<main className='flex min-h-screen flex-col items-center'>
			<Space direction='vertical' style={spaceStyle}>
				<Layout
					style={{
						height: '100%',
						display: 'flex',
						flexGrow: 1,
					}}
				>
					<Header style={headerStyle}>PaymentsGPT</Header>
					<Layout hasSider style={contentStyle}>
						<Sider style={siderStyle}>
							<ClientSidebar
								currentService={currentService}
								services={services}
								setCurrentService={setCurrentService}
							/>
						</Sider>
						<Content style={chatPanelStyle}>
							<ChatPanel
								currentService={currentService}
								setCurrentResponse={setCurrentResponse}
							/>
						</Content>
						<Sider style={siderStyle} width='25%'>
							<References currentResponse={currentResponse} />
						</Sider>
					</Layout>
				</Layout>
			</Space>
		</main>
	);
}
