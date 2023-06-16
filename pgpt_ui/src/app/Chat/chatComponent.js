import React, { useState, useEffect } from 'react';
import { Layout, Space, Input, Divider, List, Card, Image } from 'antd';
import ViewChat from '@/app/Chat/ViewChat';
import textForChat from '../mockChatText';

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

// appendMsg({
//     type: "text",
//     content: { text: val },
//     position: "right",
// user: true,

//   });

// const steps = [
//     {
//       id: '0',
//       message: 'Welcome to react chatbot!',
//       trigger: '1',
//     },
//     {
//       id: '1',
//       message: 'Bye!',
//       end: true,
//     },
//   ];

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

const theme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: '#051D41',
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: '#051D41',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
};

export default function ChatArea() {
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
			<Divider />
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
