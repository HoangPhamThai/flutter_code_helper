import React from 'react'

import { Layout } from 'antd';

import Workspace from './Workspace';


type Props = {}

const CodeBlock = (props: Props) => {

    return (
        <Layout style={{ paddingTop: '24px', paddingLeft: '24px', paddingRight: '24px' }}>
            <Workspace></Workspace>
        </Layout>

    )
}

export default CodeBlock