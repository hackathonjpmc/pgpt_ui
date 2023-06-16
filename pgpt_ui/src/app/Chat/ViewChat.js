import React, { useRef, useEffect } from 'react';
import styles from './chat.module.css';
import { Layout, Space, Input, Divider, List, Card, Image, Avatar } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;
const { Search } = Input;

const listStyle = {
	padding: '15px',
};

export default function ViewChat({ output }) {
	const endOfMessagesRef = useRef(null);

	const scrollToBottom = () => {
		endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(scrollToBottom, [output]);
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
				dataSource={output}
				// bordered
				style={listStyle}
				renderItem={(item) => (
					<List.Item
						style={{
							display: 'flex',
							justifyContent: `flex-${
								item.user ? 'end' : 'start'
							}`,
						}}
					>
						<Card
							className={styles.chatText}
							bodyStyle={{ padding: '5px 24px' }}
						>
							{item.message ? (
								<div style={{ padding: 0 }}>{item.message}</div>
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
				)}
			/>
			<div ref={endOfMessagesRef} />
		</div>
	);
}

// return (
//     <div>
//         <List
//             bordered
//             dataSource={data}
//             renderItem={(item) => (
//                 <List.Item>
//                     <p>item 1</p>
//                 </List.Item>
//             )}
//         />
//     </div>
// )
// }
