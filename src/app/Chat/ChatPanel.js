import React, { useState, useEffect } from 'react';
import { Layout, Space, Input, Divider, List, Card, Image } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import ViewChat from '@/app/Chat/ViewChat';
import { textForChat } from '../mockChatText';

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const dividerStyle = {
	margin: '5px',
};

export default function ChatPanel({ currentService }) {
	const [userInput, setUserInput] = useState('');
	const [chatHistory, setChatHistory] = useState([]);
	const [messageIDs, setMessageIDs] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = currentService === '0' ? textForChat : [];
				// const response = await fetch('someEndpoint');
				// const json = await response.json();
				setChatHistory(response);
				setMessageIDs(response.length);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const response = currentService === '0' ? textForChat : [];
		setChatHistory(response);
	}, [currentService]);

	const handleSearch = () => {
		const convertID = Number(messageIDs);

		const newItem = {
			id: messageIDs, // using the length of current data as id
			message: userInput, // using the length of current data as message
			user: true, // replace this with the actual username
		};
		setChatHistory((prevData) => [...prevData, newItem]);
		setUserInput('');
		setMessageIDs(messageIDs + 1);
	};

	return (
		<div
			style={{
				margin: '5px',
			}}
		>
			<ViewChat chatHistory={chatHistory} />
			<Divider style={dividerStyle} />
			<Search
				placeholder='ask Payment GPT'
				allowClear
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				onSearch={handleSearch}
				size='large'
				enterButton={<SendOutlined />}
			/>
		</div>
	);
}
