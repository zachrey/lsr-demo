export enum MenuKey {
  CLASSROOM_ENGAGEMENT_ANALYSIS = 'classroom_engagement_analysis',
  UPLOAD_VIDEO = 'upload_video',
  ENGAGEMENT_ANALYSIS = 'engagement_analysis',
  VIDEOS = 'videos',
  CLASSROOM_EVALUATE = 'classroom_evaluate',
  SETTING = 'setting',
  USER_SETTING = 'user_setting',
  ROLE_SETTINGS = 'role_setting',
  USER_INFO = 'user_info',
  TEACHER_INFO = 'teacher_info',
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
    }, {
      key: MenuKey.VIDEOS,
      title: '视频列表',
    }]
  },
  {
    key: MenuKey.CLASSROOM_EVALUATE,
    title: '课堂教学评价',
    sub: [{
      key: MenuKey.TEACHER_INFO,
      title: '教师画像',
    }]
  },
  {
    key: MenuKey.SETTING,
    title: '系统设置',
    sub: [{
      key: MenuKey.USER_SETTING,
      title: '用户管理',
    }, {
      key: MenuKey.ROLE_SETTINGS,
      title: '角色管理',
    }, {
      key: MenuKey.USER_INFO,
      title: '个人信息',
    }]
  }
];

