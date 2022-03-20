import { Breadcrumb } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { MenuKey } from 'common/constant';
import { HashRouter, Route, Routes } from 'react-router-dom';
import classnames from 'styles/home.module.css';
import Analysis from './Analysis';
import UploadLayout from './Upload';
import Videos from './Videos';

interface HomeProps {
  curContentKey: MenuKey;
}

const MenuKeyMap = {
  [MenuKey.UPLOAD_VIDEO]: UploadLayout,
  [MenuKey.ENGAGEMENT_ANALYSIS]: Analysis,
  [MenuKey.VIDEOS]: Videos,
  [MenuKey.CLASSROOM_EVALUATE]: () => <div>待开发</div>,
  [MenuKey.SETTING]: () => <div>待开发</div>,
};

export default function Home(props: HomeProps) {
  const ContentComp = MenuKeyMap[props.curContentKey];
  return (
    <div className={classnames.content}>
      <HashRouter>
        <Content style={{ margin: '0 16px', background: "white", padding: '10px', marginTop: 10 }}>
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