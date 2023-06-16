import React, {useState} from 'react';
import { Layout, Space, Input, Divider, List } from 'antd';
import ViewChat from "@/app/Chat/ViewChat";
import textForChat from "../mockChatText"

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

export default function ChatArea() {

    const [userInput, setUserInput ] = useState('')
    const [x, setX ] = useState([])


    const onChange =(e) => {
        setUserInput(e.target.value)
    }

    const handleSearch = (value) => {
        console.log(value);
    }

    return (
        <div>
            <ViewChat
            output={textForChat}
            />
            <Divider />
            <Search
                placeholder="ask Payment GPT"
                allowClear
                onChange={e => setSearchTerm(e.target.value)}
                onSearch={handleSearch}
                size="large"
                // enterButton="Search"
                // onSearch={onSearch}
            />
        </div>
    )
}