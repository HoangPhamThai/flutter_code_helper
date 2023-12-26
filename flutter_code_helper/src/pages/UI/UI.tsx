
import { Layout, theme } from 'antd';

const { Content } = Layout;

type Props = {}

const UI = (props: Props) => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>

            <Layout >
                
                <Layout style={{ padding: '24px 24px' }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,

                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>

    )
}

export default UI