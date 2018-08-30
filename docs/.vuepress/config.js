module.exports = {
  title: 'zarm-vue', // 设置网站标题
  dest: './dist', // 设置输出目录
  base: '/', // 设置站点根路径
  repo: 'https://github.com/ZhonganTechENG/zarm-vue', // 添加 github 链接
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/guide/' }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    }
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require('markdown-it-katex'))
    }
  }
}


function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', '20180830','20180901']
    }
  ]
}
