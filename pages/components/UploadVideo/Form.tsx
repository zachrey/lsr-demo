import React from 'react';
import { Form, Input, Button, Checkbox, Select, DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import classnames from './index.module.css'
import { subjects, teachers } from 'pages/mock/mockData';

export default function UploadForm({ handleSubmit }) {
  const onFinish = (values) => {
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const uploadProps = {
    name: 'file',
    action: '/api/upload/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`文件上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`文件上传失败`);
      }
    },
  };

  return (
    <div className={classnames['upload-form']}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="科目"
          name="subject"
          rules={[
            {
              required: true,
              message: '请选择科目',
            },
          ]}
        >
          <Select>
            {subjects.map(name => <Select.Option value={name} key={name}>{name}</Select.Option>)}
          </Select>
        </Form.Item>

        <Form.Item
        
          label="授课教师"
          name="teacher"
          rules={[
            {
              required: true,
              message: '请输入授课教师',
            },
          ]}
        >
          <Select>
            {teachers.map(name => <Select.Option value={name} key={name}>{name}</Select.Option>)}
          </Select>
        </Form.Item>

        <Form.Item
          label="授课日期"
          name="date"
          rules={[
            {
              required: true,
              message: '请选择日期',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          rules={[
            {
              required: true,
              message: '请选择上传视频',
            },
          ]}
        >
          <Upload accept='.mp4,.mov' {...uploadProps} maxCount={1}>
            <Button icon={<UploadOutlined />}>上传课堂视频</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            完成教学视频上传
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
