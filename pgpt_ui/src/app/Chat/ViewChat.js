import React from 'react';
import { Layout, Space, Input, Divider, List } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
export default function ViewChat() {
    return (
        <div>
            <List
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <p>item 1</p>
                    </List.Item>
                )}
            />
        </div>
    )
}