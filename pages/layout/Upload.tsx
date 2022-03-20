import UploadForm from 'pages/components/UploadVideo/Form';
import ImagePreview from 'pages/components/UploadVideo/ImagePreview';
import { useState } from 'react';
import classnames from 'styles/upload_layout.module.css';
import { CaretRightOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import { Progress } from 'antd';
import { setTimeout } from 'timers';
import images from 'utils/mock/images';

export default function UploadLayout() {
  const [url, setUrl] = useState<string>();
  const [isShowRst, setShowRst] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = () => {
    const randomImage = images[Math.floor(Math.random() * 3)];
    setUrl(randomImage);
  }

  const startCompute = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowRst(true);
    }, 3000);
  }
  return (
    <>
      <div style={{ fontSize: 20, marginLeft: 14 }}> 上传教学视频</div>
      <div className={classnames['upload-container']}>
        <UploadForm handleSubmit={handleSubmit} />
        <ImagePreview url={url} />
      </div>
      <div className={classnames['compute']}>
        {
          isShowRst
            ? <Progress
              type="circle"
              format={p => p}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={50 + Math.round(Math.random() * 50)}
            />
            : <Button
              type="primary"
              loading={loading}
              icon={<CaretRightOutlined />}
              onClick={startCompute}
            >立即计算课堂投入度</Button>
        }
      </div>
    </>
  );
}