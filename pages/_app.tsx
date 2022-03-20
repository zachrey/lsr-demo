import 'styles/globals.css'
import 'antd/dist/antd.css'; 

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { HeaderTitle, LayoutLeftMenu, MenuKey } from '../common/constant';
import classnames from 'styles/home.module.css';
import dynamic from "next/dynamic";
const HomeView = dynamic(()=>import('./layout/Home'),{ ssr: false });

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const [curMenuKey, setCurMenuKey] = useState(MenuKey.TEACHER_INFO);

  const renderMenu = () => <Menu theme="dark" defaultSelectedKeys={[curMenuKey]} mode="inline">
    {
      LayoutLeftMenu.map(menu => (menu.sub?.length > 0 ?
        <SubMenu key={menu.key} icon={<UserOutlined />} title={menu.title}>
          {
            menu.sub.map(subMenu => <Menu.Item key={subMenu.key} onClick={() => setCurMenuKey(subMenu.key)} >{subMenu.title}</Menu.Item>)
          }
        </SubMenu>
        : <Menu.Item key={menu.key} icon={<UserOutlined />} onClick={() => setCurMenuKey(menu.key)} >
          {menu.title}
        </Menu.Item>
      ))
    }
  </Menu>

  return (
    <div className="home">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className={classnames.logo} > 不想弄 </div>
          {renderMenu()}
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ paddingLeft: 30, color: 'white', fontSize: 25 }} >
            {HeaderTitle}
          </Header>
          <HomeView curContentKey={curMenuKey} />
          <Footer style={{ textAlign: "center" }}>LSR-HAHA</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

