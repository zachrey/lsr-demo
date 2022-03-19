import { Table } from "antd";
import React from "react";

export default function List({ data }) {
  const columns = [
  {
    title: '科目',
    dataIndex: 'subject',
    key: 'subject',
  }, {
    title: '教师',
    dataIndex: 'teacher',
    key: 'teacher',
  }, {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  }, {
    title: '投入度',
    dataIndex: 'score',
    key: 'score',
  }, {
    title: '视频',
    dataIndex: 'url',
    key: 'url',
    render: () => <a href="https://baidu.com" >视频链接</a>
  }];
  
  return (
    <Table columns={columns} dataSource={data} />
  );
}