import { Button, Form, Select } from "antd";
import Table from "pages/components/Analysis/Table";
import { genTableData, ids, subjects, teachers } from "pages/mock/mockData";
import React, { useState } from "react";
// import { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import classnames from 'styles/analysis_layout.module.css';
import Charts from "pages/components/Analysis/Charts";

const { RangePicker } = DatePicker;
const data = genTableData();

export default function Analysis() {
  const [sourceData, setSourceData] = useState(data);
  const [form] = Form.useForm();
  const setFilter = (values) => {
    const {date, subject, teacher, id}: { date: [moment.Moment, moment.Moment], subject: string, teacher: string, id: string } = values;
    setSourceData(data.filter(item => ( 
      date[0].isBefore(item.date) &&
      date[1].isAfter(item.date) &&
      subject === item.subject &&
      (teacher ? teacher === item.teacher : true) &&
      (id ? id === item.id : true)
     )));
  };

  const Filter = () => (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={setFilter}>
      <Form.Item
        label="科目"
        name="subject"
        rules={[
          {
            required: true,
            message: '请选择科目',
          },
        ]}
        style={{ width: 150 }}
      >
        <Select>
          {subjects.map(name => <Select.Option value={name} key={name}>{name}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item
        label="日期范围"
        name="date"
        rules={[
          {
            required: true,
            message: '请选择范围',
          },
        ]}
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
        label="工号"
        name="id"
        style={{ width: 150 }}
      >
        <Select allowClear>
          {ids.map(name => <Select.Option value={name} key={name}>{name}</Select.Option>)}
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
      <div style={{ fontSize: 20, marginLeft: 14 }}>投入度分析</div>
      <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'space-around' }}>
        <Filter />
      </div>
      <div className={classnames['container']}>
        <Table data={sourceData} />
        <Charts data={sourceData}/>
      </div>
    </>
  );
}