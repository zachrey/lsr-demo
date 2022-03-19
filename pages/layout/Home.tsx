import { Breadcrumb } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { MenuKey } from 'pages/common/constant';
import { HashRouter, Route, Routes } from 'react-router-dom';
import classnames from 'styles/home.module.css';
import UploadLayout from './Upload';

interface HomeProps {
  curContentKey: MenuKey;
}

const MenukeyMap = {
  [MenuKey.UPLOAD_VIDEO]: () => <UploadLayout />,
  [MenuKey.ENGAGEMENT_ANALYSIS]: () => <div>分析</div>
};

export default function Home(props: HomeProps) {
  const ContentComp = MenukeyMap[props.curContentKey];
  return (
    <div className={classnames.content}>
      <HashRouter>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <ContentComp />
        </Content>
      </HashRouter>
    </div>
  );
}