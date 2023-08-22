YL.static = {
  /** “关于”信息 */
  softwareName: 'Copeq Studio', //网站名。请在此处填写您自己的网站名，如王小明的博客。
  version: "2.2.10", // 网站版本号
  iconBtnStart: 'html5', //主图标
  author: 'Copeq',//作者
  contactInformation: 'mcxbbs@163.com',//联系方式
  officialWebsite: 'copeq.github.io',//软件官网
  welcome: 'Fuck Shift!',//加载完毕控制台提示信息
  copyrightDetail: 'Apache License 2.0',//版权详细信息
  otherStatements: 'awa',//其他信息（可留空）

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** YLUI基础设置 */
  lang: 'zh-cn', //语言
  localStorageName: "ylui-storage", //ls存储名
  lockedApps: ['yl-system', 'yl-color-picker', 'ylui-fa', 'yl-browser'], // 锁定的应用（不允许被脚本修改）
  trustedApps: [], // 受信任的应用（可以使用敏感API）
  debug: false,//启用更多调试信息
  beforeOnloadEnable: true,//启用关闭前询问（打包app时请关闭防止出错）
  WarningPerformanceInIE: true,//在IE下提示体验不佳信息
  languages: {}, //推荐留空，自动从文件加载
  changeable: true,//存档数据是否可被普通用户修改
  dataCenter: true,//是否展示数据管理中心

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** YLUI注册信息 */
  authorization: 'Copeq Studio',//授权类型
  serialNumber: WWW-XXX-EEE-YYY,//序列号

};
