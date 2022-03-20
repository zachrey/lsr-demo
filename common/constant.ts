export enum MenuKey {
  CLASSROOM_ENGAGEMENT_ANALYSIS = 'classroom_engagement_analysis',
  UPLOAD_VIDEO = 'upload_video',
  ENGAGEMENT_ANALYSIS = 'engagement_analysis',
  CLASSROOM_EVALUATE = 'classroom_evaluate',
  SETTING = 'setting',
};

export const HeaderTitle = '课堂教学评价系统';

/**
 * 主页左菜单配置
 */
export const LayoutLeftMenu = [ 
  {
    key: MenuKey.CLASSROOM_ENGAGEMENT_ANALYSIS,
    title: '课堂投入度分析',
    sub: [{
      key: MenuKey.UPLOAD_VIDEO,
      title: '上传教学视频',
    }, {
      key: MenuKey.ENGAGEMENT_ANALYSIS,
      title: '投入度分析',
    }]
  },
  {
    key: MenuKey.CLASSROOM_EVALUATE,
    title: '课堂教学评价',
  },
  {
    key: MenuKey.SETTING,
    title: '系统设置',
  }
];

