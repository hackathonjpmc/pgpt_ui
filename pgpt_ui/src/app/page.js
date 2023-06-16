'use client';
import Image from 'next/image';
import React, { useState } from 'react';
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
};

const siderStyle = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#3ba0e9',
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
export default function Home() {
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
							<ClientSidebar />
						</Sider>
						<Content style={chatPanelStyle}>
							<ChatPanel />
						</Content>
						<Sider style={siderStyle}>
							<References />
						</Sider>
					</Layout>
				</Layout>
			</Space>
		</main>
	);
}
