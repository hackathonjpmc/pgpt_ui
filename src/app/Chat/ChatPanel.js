import React, { useState, useEffect } from 'react';
import { Layout, Space, Input, Divider, List, Card, Image } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import ViewChat from '@/app/Chat/ViewChat';
import { textForChat } from '../mockChatText';
import mockChatResponse from '../mockChatResponse';

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const dividerStyle = {
	margin: '5px',
};

export default function ChatPanel({ currentService, setCurrentResponse }) {
	const [userInput, setUserInput] = useState('');
	const [chatHistory, setChatHistory] = useState([]);
	const [messageIDs, setMessageIDs] = useState(0);
	const [storeMockResponses, setStoreMockResponses] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = currentService === '0' ? textForChat : [];
				setStoreMockResponses(mockChatResponse);
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

	const addToUserHistory = () => {
		const convertID = Number(messageIDs);

		const newItem = {
			id: messageIDs, // using the length of current data as id
			message: userInput, // using the length of current data as message
			user: true, // replace this with the actual username
		};

		return newItem;
	};

	const fakeApi = () => {
		// handlePreDeterminedInput(); // HERE
		const quickRandomIndex = Math.floor(Math.random() * 4);

		const newItem = {
			id: messageIDs, // using the length of current data as id
			message: storeMockResponses[quickRandomIndex].message, // using the length of current data as message
			user: false, // this is coming from the bot
		};

		return newItem; //
		// setChatHistory((prevData) => [...prevData, newItem]);
		// setMessageIDs(messageIDs + 1);
	};

	const checkPrompt = (input) => {
		const quickRandomIndex = Math.floor(Math.random() * 4);
		const keywords = {
			optimize: mockChatResponse[4],
			opportunities: mockChatResponse[5],
			show: mockChatResponse[6],
		};

		let reference = ['how-to-optimize-interchange-fees.pdf', 'data1.csv'];

		let message = storeMockResponses[quickRandomIndex].message;

		// Check if the input string contains each keyword
		for (const keyword in keywords) {
			if (input.includes(keyword)) {
				// If the keyword is found, return its corresponding response
				message = keywords[keyword].message;
				reference = keywords[keyword].reference;
			}
		}

		const newItem = {
			id: messageIDs, // using the length of current data as id
			message: message, // using the length of current data as message
			user: false, // this is coming from the bot
			reference: reference,
		};

		return newItem; //
	};

	const handleSearch = async () => {
		console.log(userInput);

		const userSuppliedMessage = addToUserHistory(); //returns formatted usr message
		setChatHistory((prevData) => [...prevData, userSuppliedMessage]);
		setMessageIDs(messageIDs + 1);

		const formatted = userInput.toLowerCase(); // format user input
		let response = checkPrompt(formatted); // returns real response or fake
		setUserInput(''); // reset user input
		setChatHistory((prevData) => [...prevData, response]);
		setCurrentResponse(response);
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

// Response will be
// message
// sources
