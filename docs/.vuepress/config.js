module.exports = {
  title: 'Blog', // 设置网站标题
  dest: './dist', // 设置输出目录
  base: '/Blog/', // 设置站点根路径
  repo: 'https://github.com/chuanshuoye/Blog.git', // 添加 github 链接
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文章',
        items: [
          { text: '2018', link: '/2018/' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/2018/': genSidebarConfig('2018')
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
      children: ['', 'starter', 'schema', 'use', 'validator']
    }
  ]
}
