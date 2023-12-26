
import { Layout, Menu, theme } from 'antd';
import { labelCodeBlocks, labelCustom, labelEntity, labelEntityModel, labelFromJson, labelModel, labelUIComponent, navPath, labelFeatureGeneration } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

type Props = {}

const MenuNav = (props: Props) => {


  const navigate = useNavigate()

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={230} style={{ background: colorBgContainer }}  >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
        theme='dark'
      >
        <Menu.SubMenu title={labelCodeBlocks} key={labelCodeBlocks}>

          <Menu.SubMenu title={labelEntityModel} key={labelEntityModel}>
            {/* Models */}
            <Menu.SubMenu title={labelModel} key={labelModel}>
              <Menu.Item key={labelFromJson}
                onClick={() => {
                  navigate(navPath.block)
                }}
              >{labelFromJson}</Menu.Item>
              <Menu.Item key={labelCustom}>{labelCustom}</Menu.Item>
            </Menu.SubMenu>
            {/* Entity */}
            <Menu.SubMenu title={labelEntity} key={labelEntity}>

            </Menu.SubMenu>
          </Menu.SubMenu>


          <Menu.Item title={labelFeatureGeneration} onClick={() => {
            navigate(navPath.featureGeneration)
          }} key={labelFeatureGeneration}>{labelFeatureGeneration}

          </Menu.Item>

        </Menu.SubMenu>

        <Menu.SubMenu title={labelUIComponent} key={labelUIComponent} >

        </Menu.SubMenu>

      </Menu>


    </Sider>
  )
}

export default MenuNav