'use client'
import Image from 'next/image'
import React from 'react';
import { Layout, Space, Input, Divider, List } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
export default function ChatArea() {
    return (
        <div>
            <h1> inital chat area</h1>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <p>item 1</p>
                    </List.Item>
                )}
            />
            <Divider />
            <Input/>
        </div>
    )
}