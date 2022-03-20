import { Button, Form, Select } from "antd";
import { genTableData, ids, subjects, teachers } from "utils/mock/mockData";
import React, { useState } from "react";
import moment from 'moment';
import classnames from 'styles/videos_layout.module.css';
import Info from "pages/components/TeacherInfo/Info";

const data = genTableData();

export default function TeacherInfo() {
  const [sourceData, setSourceData] = useState<{subjects: string[], teacher: string, id?: string}>({
    teacher: teachers[Math.floor(Math.random() * teachers.length)],
    subjects: data.map(item => item.teacher === teachers[Math.floor(Math.random() * teachers.length)] ? item.subject : undefined).filter(i => i),
  });

  const [form] = Form.useForm();
  const setFilter = (values) => {
    if (!values.teacher && !values.id) { return }
    const rst = {
      teacher: values.teacher,
      id: values.id,
      subjects: [],
    };

    data.forEach(item => item.id === values.id || item.teacher === values.teacher || rst.subjects.push(item.subject)); 
    setSourceData(rst);
  };

  const Filter = () => (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={setFilter}>
      <Form.Item
        label="教师"
        name="teacher"
        style={{ width: 150 }}
      >
        <Select allowClear defaultValue={[sourceData.teacher]}>
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
      <div style={{ fontSize: 20, marginLeft: 14 }}>教师画像</div>
      <div style={{ margin: 30, display: 'flex', justifyContent: 'space-around' }}>
        <Filter />
      </div>
      <div className={classnames['container']}>
        <Info data={sourceData} />
      </div>
    </>
  );
}