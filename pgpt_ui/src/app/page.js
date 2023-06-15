'use client'
import Image from 'next/image'
import React from 'react';
import { Layout, Space, Input,  Anchor, Row, Col } from 'antd';
import ChatArea from "@/app/Chat/chatComponent";

const { Header, Footer, Sider, Content } = Layout;

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
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Header style={headerStyle}>PGPT</Header>
                <Layout hasSider>
                    <Sider style={siderStyle}>Sider</Sider>
                    <Content style={contentStyle}>
                        <ChatArea/>
                    </Content>
                </Layout>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>

        </Space>
    </main>
  )
}
