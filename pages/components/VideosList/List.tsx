import React from 'react';
import { Card, List, Tag, Image } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import moment from 'moment';
import images from 'utils/mock/images';

export default function ListComponent({ data }: { data: any }) {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 6,
      }}
      dataSource={data}
      renderItem={(item : {subject: string, date: number, teacher: string, score: number}) => (
        <List.Item>
          <Card>
            <Image
              width={380}
              height={300}
              src={images[Math.floor(Math.random() * 3)]}
            />
            <div style={{ marginTop: 5 }}>
              <span style={{ fontSize: 16}}>科目：</span>
              <Tag color="magenta">{item.subject}</Tag>
            </div>
            <div style={{ marginTop: 5 }}>
              <span style={{ fontSize: 16}}>课程日期：</span>
              <span style={{ fontSize: 14}}>{moment(item.date).format("YYYY-MM-DD")}</span>
            </div>
            <div style={{ marginTop: 5 }}>
              <span style={{ fontSize: 16}}>授课老师：</span>
              <Tag color="#108ee9">{item.teacher}</Tag>
            </div>
            <div style={{ marginTop: 5 }}>
              <span style={{ fontSize: 16}}>课堂投入度：</span>
              {(() => {
                if (item.score < 60) {
                  return <Tag icon={<FrownOutlined />} color="error">{item.score}</Tag>;
                }
                return <Tag icon={<SmileOutlined /> } color="success">{item.score}</Tag>;
              })()}
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
}