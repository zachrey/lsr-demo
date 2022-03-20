import { Button, Form, Select } from "antd";
import { genTableData, subjects, teachers } from "utils/mock/mockData";
import React, { useState } from "react";
import { DatePicker } from 'antd';
import moment from 'moment';
import classnames from 'styles/videos_layout.module.css';
import ListComponent from "pages/components/VideosList/List";

const { RangePicker } = DatePicker;
const data = genTableData();

export default function Videos() {
  const [sourceData, setSourceData] = useState(data);
  const [form] = Form.useForm();
  const setFilter = (values) => {
    const {date, subject, teacher}: { date: [moment.Moment, moment.Moment], subject: string, teacher: string, id: string } = values;
    setSourceData(data.filter(item => (
      (date ? (date[0].isBefore(item.date) && date[1].isAfter(item.date)) : true) &&
      (subject ? subject === item.subject : true) &&
      (teacher ? teacher === item.teacher : true)
     )));
  };

  const Filter = () => (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={setFilter}>
      <Form.Item
        label="科目"
        name="subject"
        style={{ width: 150 }}
      >
        <Select>
          {subjects.map(name => <Select.Option value={name} key={name}>{name}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item
        label="日期范围"
        name="date"
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        label="教师"
        name="teacher"
        style={{ width: 150 }}
      >
        <Select allowClear>
          {teachers.map(name => <Select.Option value={name} key={name}>{name}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <div style={{ fontSize: 20, marginLeft: 14 }}>视频列表</div>
      <div style={{ margin: 30, display: 'flex', justifyContent: 'space-around' }}>
        <Filter />
      </div>
      <div className={classnames['container']}>
        <ListComponent data={sourceData} />
      </div>
    </>
  );
}