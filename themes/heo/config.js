const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-12-02', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '恭迎到来！', url: 'https://blog.gosesummer.top' },
    { title: '我的个人主页', url: 'https://me.gosesummer.top' },
    { title: 'TAVERN故事站', url: 'https://tavern.gosesummer.top' }
  ],

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '梦醒时分',
  HEO_HERO_TITLE_2: '胡言乱语',
  HEO_HERO_TITLE_3: 'GOSESUMMER.TOP',
  HEO_HERO_TITLE_4: '教程分享',
  HEO_HERO_TITLE_5: '猫猫ᓚᘏᗢ',
  HEO_HERO_TITLE_LINK: 'https://www.gosesummer.top',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  // HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    'Gosesummer',
    '🍺TAVERN',
    '🤖GoseGPT',
    '🏃脚踏实地行动派',
    '🏠智能家居小能手',
    '🤖️数码科技爱好者',
    '🧱团队小组发动机'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/suneao', // 个人资料底部按钮链接
  
  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'DaVinci',
      img_2: '/images/heo/davinci-resolve.svg',
      color_2: '#1d2f42'
    },
    {
      title_1: 'TAVERN',
      img_1: 'https://tavern.gosesummer.top/_next/image?url=%2Ffavicon.png&w=32&q=75',
      color_1: '#fff4d0',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '共同欢笑',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社区',
  HEO_SOCIAL_CARD_TITLE_3: '+加入+',
  HEO_SOCIAL_CARD_URL: 'https://www.gosesummer.top',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: true, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: true, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
