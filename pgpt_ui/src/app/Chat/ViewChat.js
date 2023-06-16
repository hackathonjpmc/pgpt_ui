import React from 'react';
import { Layout, Space, Input, Divider, List, Card, Image } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

    export default function ViewChat({output}) {
    return (
        <div style={{ height: '400px', overflowY: 'scroll' }}>
            <List
                dataSource={output}
                bordered
                renderItem={item => (
                    <List.Item>
                        <Card title={item.text ? item.text : 'Image'}>
                            {item.text ?
                                <div>{item.text}</div> :
                                item.images.map((imgSrc, index) => (
                                    <Image
                                        key={index}
                                        width={200}
                                        src={imgSrc}
                                    />
                                ))
                            }
                        </Card>
                    </List.Item>
                )}
            />
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
