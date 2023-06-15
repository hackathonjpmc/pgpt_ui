'use client'
import Image from 'next/image'
import React, {useState} from 'react';
import { Layout, Space, Input,  Anchor, Row, Col } from 'antd';
import ChatArea from "@/app/Chat/chatComponent";
import ClientSidebar from "@/app/Clients/ClientSidebar";
import References from "@/app/References/References";
import ViewChat from "@/app/Chat/ViewChat";

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
}

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
}

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
}

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Space direction="vertical" style={{ width: '100%', height: '90%' }} >
            <Layout>
                <Header style={headerStyle}>PaymentsGPT</Header>
                <Layout hasSider>
                    <Sider style={siderStyle}>
                        <ClientSidebar/>
                    </Sider>
                    <Content style={contentStyle}>
                        <ChatArea/>
                    </Content>
                    <Sider style={siderStyle}>
                        <References/>
                    </Sider>
                </Layout>
            </Layout>

        </Space>
    </main>
  )
}
