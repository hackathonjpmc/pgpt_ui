import React, { useState, useEffect } from 'react';
import { Layout, Space, Input, Divider, List, Card, Image } from 'antd';
import ViewChat from '@/app/Chat/ViewChat';
import textForChat from '../mockChatText';

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const steps = [
	{
		id: '0',
		message: 'Welcome to react chatbot!',
		trigger: '1',
	},
	{
		id: '1',
		message: 'Bye!',
		end: true,
	},
];

const dividerStyle = {
	margin: '5px',
	// paddingBottom: '0',
};

export default function ChatPanel() {
	const [userInput, setUserInput] = useState('');
	const [previousMessages, setPreviousMessages] = useState([]);
	const [messageIDs, setMessageIDs] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = textForChat;
				// const response = await fetch('someEndpoint');
				// const json = await response.json();
				setPreviousMessages(response);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchData();
	}, []);

	// const handleChange = (e) => {
	// 	setUserInput(e.target.value);
	// };

	const handleSearch = () => {
		const newItem = {
			id: messageIDs, // using the length of current data as id
			message: userInput, // using the length of current data as message
			user: true, // replace this with the actual username
		};
		setPreviousMessages((prevData) => [...prevData, newItem]);
		setUserInput('');
	};

	return (
		<div>
			<ViewChat output={previousMessages} />
			<Divider style={dividerStyle} />
			<Search
				placeholder='ask Payment GPT'
				allowClear
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				onSearch={handleSearch}
				size='large'
				// enterButton="Search"
				// onSearch={onSearch}
			/>
		</div>
	);
}
