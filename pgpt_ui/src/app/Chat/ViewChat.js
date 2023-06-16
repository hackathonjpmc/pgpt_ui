import React, { useRef, useEffect } from 'react';
import styles from './chat.module.css';
import { Layout, Space, Input, Divider, List, Card, Image, Avatar } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;
const { Search } = Input;

export default function ViewChat({ output }) {
	const endOfMessagesRef = useRef(null);

	const scrollToBottom = () => {
		endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(scrollToBottom, [output]);
	return (
		<div style={{ height: '400px', overflowY: 'scroll' }}>
			<List
				dataSource={output}
				bordered
				renderItem={(item) => (
					<List.Item
						style={{
							display: 'flex',
							justifyContent: `flex-${
								item.user ? 'end' : 'start'
							}`,
						}}
					>
						{/* <List.Item.Meta
							avatar={<Avatar icon={<SmileOutlined />} />}
						/> */}
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
