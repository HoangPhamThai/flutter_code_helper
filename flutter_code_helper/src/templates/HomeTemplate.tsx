
import { Layout } from 'antd';

import { Outlet } from 'react-router-dom';
import MenuNav from '../components/MenuNav';

import './HomeTemplate.css'

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <>
      <Layout className='h-full'>
        <MenuNav></MenuNav>
        <Layout >
          <Outlet />
        </Layout>
      </Layout>
    </>
  )
}

export default HomeTemplate