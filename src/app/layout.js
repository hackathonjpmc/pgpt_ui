import './globals.css';
import styles from './styles.module.css';
import { Inter } from 'next/font/google';
import { Layout, Space, Input, Anchor, Row, Col } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Payment GPT',
	description: 'Hackathon',
};

// This is the topmost component, the root component
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
