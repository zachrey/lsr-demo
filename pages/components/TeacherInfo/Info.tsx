import { Radar } from '@ant-design/plots';
import { Card, Image, Tag } from 'antd';
import React from 'react';
import { ids, TeacherImages, teachers } from 'utils/mock/mockData';

const RadarChart = () => {
  const data = [
    {
      name: '师德',
      star: 90 + Math.round(Math.random() * 10),
    },
    {
      name: '组织管理能力',
      star: 60 + Math.round(Math.random() * 40),
    },
    {
      name: '教育科学能力',
      star: 60 + Math.round(Math.random() * 40),
    },
    {
      name: '教育教学能力',
      star: 60 + Math.round(Math.random() * 40),
    },
    {
      name: '业务知识水平能力',
      star: 80 + Math.round(Math.random() * 20),
    },
  ];

  const config = {
    data: data,
    xField: 'name',
    yField: 'star',
    appendPadding: [0, 10, 0, 10],
    meta: {
      star: {
        alias: '评分',
        min: 0,
        nice: true,
      },
    },
    xAxis: {
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {
      size: 2,
    },
    area: {},
  };
  return <Radar {...config} />;
};


export default function Info({ data }: { data?: {teacher?: string, id?: string, subjects: string[]} }) {
  console.log(data);
  if (!data) {
    return null;
  }

  const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
  };
  
  const titleStyle: React.CSSProperties = {
    ...gridStyle,
    fontSize: 18,
    fontWeight: 700,
  }

  const Header = <div style={{ display: 'flex' }}>
    <Image
      width={200}
      height={200}
      src={TeacherImages[Math.floor(Math.random() * TeacherImages.length)]}
    />
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 20, fontSize: 16, justifyContent: 'center' }}>
      <div >{`教师：${data.teacher || teachers[Math.floor(Math.random() * teachers.length)]}`}</div>
      <div >{`工号：${data.id || ids[Math.floor(Math.random() * ids.length)]}`}</div>
      <div>{`科目: `}
        {(() => <>
          <Tag color="success">{data.subjects[Math.floor(Math.random() * data.subjects.length)]}</Tag>
          <Tag color="success">{
            data.subjects[Math.floor(Math.random() * data.subjects.length === 0 ? Math.random() * data.subjects.length - 1 : 1)]
          }</Tag>
        </>
        )()}
      </div>
    </div>
  </div>;
  
  const score1 = 80 + Math.round(Math.random() * 12);
  const gap = Math.round(Math.random() * 8);
  const score2 = score1 + (Math.random() < 0.5 ? -1 : 1) * gap;
  const score3 = score1 + (Math.random() < 0.5 ? -1 : 1) * gap;
  const score4 = 80 + Math.round(Math.random() * 18);


  return (
    <div style={{ margin: 40, display: 'flex', justifyContent: "space-between" }}>
      <Card title={Header} style={{ padding: "5 0", width: "65%"}}>
        <Card.Grid hoverable={false} style={titleStyle}>自评</Card.Grid>
        <Card.Grid hoverable={false} style={titleStyle}> 他评 </Card.Grid>
        <Card.Grid hoverable={false} style={titleStyle}> 学生评 </Card.Grid>
        <Card.Grid hoverable={false} style={titleStyle}>课堂平均投入度</Card.Grid>
        <Card.Grid style={gridStyle}>{score1}</Card.Grid>
        <Card.Grid style={gridStyle}>{score2}</Card.Grid>
        <Card.Grid style={gridStyle}>{score3}</Card.Grid>
        <Card.Grid style={gridStyle}>{score4}</Card.Grid>
      </Card>
      <div style={{
        width: "30%",
        borderRadius: 0,
        padding: "10px 15px",
        boxShadow: "1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, 1px 0 0 0 #f0f0f0 inset, 0 1px 0 0 #f0f0f0 inset"
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>教师总体评价</div>
        <RadarChart />
      </div>
    </div>
  );
}