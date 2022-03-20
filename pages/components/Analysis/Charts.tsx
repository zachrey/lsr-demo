import React from 'react';
import { G2, Line, Pie } from '@ant-design/plots';
import classnames from './index.module.css';

import moment from 'moment';

const LineCharts: React.FC<{ data: any }> = ({ data }) => {
  const date = {};

  // 处理数据，合并日期，对投入度取平均值
  data.forEach((item) => {
    const key = moment(item.date).format('YYYY-MM-DD');
    date[key] = date[key] || [];
    date[key].push(item.score);
  });

  const sortKey = Object.keys(date).sort((a, b) => moment(a).isBefore(b) ? -1 : 1);

  console.log('@@ sortKey: ', sortKey);

  const lineData = sortKey.map((key: string) => {
    if (date[key] && !date[key].length) {
      return {};
    }

    return {
      date: key,
      score: Math.round(date[key].reduce((acc, value) => acc + value, 0) / date[key].length),
    }
  });

  const config = {
    data: lineData,
    title: {
      visible: true,
      text: '投入度分析',
    },
    xField: 'date',
    yField: 'score',
    yAxis: {
      nice: true,
      title: {
        text: '每日平均投入度',
      },
    },
    xAxis: {
      title: {
        text: '日期',
      }
    },
    point: {
      visible: true,
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  return <Line {...config} />;
};


const PieCharts = ({ data }) => {
  const pieData = [{
    type: '高于 60 分',
    value: 0,
  }, {
    type: '低于 60 分',
    value: 0,
  }];

  data.forEach(item => {
    if (item.score > 60) {
      return pieData[0].value += 1;
    }
      return pieData[1].value += 1;
  });

  const G = G2.getEngine('canvas');
  const cfg = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: 'circle',
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: 'text',
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: 'text',
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value}节课 ${(data.percent * 100).toFixed(2)}%`,
            fill: 'rgba(0, 0, 0, 0.65)',
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  const config = cfg;
  return <Pie {...config} />;
};



export default function Charts ({ data }) {
  return (
    <div style={{ display: 'flex', flexDirection: "column", width: '55%', padding: 15, height: 660 }} className={classnames["container"]}>
      <PieCharts data={data}/>
      <LineCharts data={data} />
    </div>
  );
}
