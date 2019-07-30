module.exports = {
  title: 'Blog Of Ares_Ye', // 设置网站标题
  dest: './dist', // 设置输出目录
  base: '/Blog/', // 设置站点根路径
  repo: 'https://github.com/chuanshuoye/Blog.git', // 添加 github 链接
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '博客',
        items: [
          { text: '2018', link: '/2018/' },
          { text: '2019', link: '/2019/' }
        ]
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/2018/': genSidebarConfig('2018'),
      '/2019/': genSidebarConfig('2019')
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
  if (title == '2018') {
    return [
      {
        title,
        collapsable: false,
        children: ['', '08', '0801', '0802', '0803']
      }
    ]
  }
  if (title == '2019') {
    return [
      {
        title,
        collapsable: false,
        children: ['', '06', '0601']
      }
    ]
  }
}
