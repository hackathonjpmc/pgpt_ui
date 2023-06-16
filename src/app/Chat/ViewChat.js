import React, { useRef, useState, useEffect } from 'react';
import styles from './chat.module.css';
import {
	Layout,
	Space,
	Input,
	Divider,
	List,
	Card,
	Image,
	Avatar,
	Skeleton,
} from 'antd';
import { SmileOutlined, SettingFilled } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;
const { Search } = Input;

const listStyle = {
	padding: '15px',
};

const EmptyChat = () => {
	return (
		<>
			<SettingFilled style={{ fontSize: '300px', color: '#08c' }} />
			<h3
				style={{
					color: '#aab1e6',
					fontSize: '30px',
				}}
			>
				Empty Chat: Get started by typing a prompt below
			</h3>
		</>
	);
};

// top right bottom left
export default function ViewChat({ chatHistory }) {
	const [loading, setLoading] = useState(true);
	const endOfMessagesRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clean up the timeout on component unmount
		return () => clearTimeout(timer);
	}, []);

	const scrollToBottom = () => {
		endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(scrollToBottom, [chatHistory]);

	const buildItemStyle = (item) => {
		const styleObject = {
			display: 'flex',
			justifyContent: `flex-${item.user ? 'end' : 'start'}`,
			padding: `12px ${item.user ? '0 12px 40%' : '40% 12px 0'}`,
		};

		return styleObject;
	};

	return (
		<div
			style={{
				height: '600px',
				overflowY: 'scroll',
				border: '1px solid #455680',
				borderRadius: '5px',
			}}
		>
			<List
				dataSource={chatHistory}
				locale={{ emptyText: <EmptyChat /> }}
				style={listStyle}
				renderItem={(item) => (
					<Skeleton active loading={loading}>
						<List.Item style={buildItemStyle(item)}>
							<Card
								className={styles.chatText}
								bodyStyle={{ padding: '5px 24px' }}
							>
								{item.message ? (
									<div style={{ padding: 0 }}>
										{item.message}
									</div>
								) : item.images ? (
									item.images.map((imgSrc, index) => (
										<Image
											key={index}
											width={200}
											src={imgSrc}
										/>
									))
								) : null}
							</Card>
						</List.Item>
					</Skeleton>
				)}
			/>

			<div ref={endOfMessagesRef} />
		</div>
	);
}
