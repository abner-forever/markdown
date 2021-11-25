module.exports = {
  title: 'Abner的笔记',
  description: 'abner',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  
  base: '/doc/',
  port: 9090,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/font/' },
      { text: '面试', link: '/interview/' },
      { text: '关于我', link: 'http://foreverheart.top' },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/font/': [
        '',
        'http',
        'react',
        '手写方法',
        'vite'
      ],
      '/error/': [
        '',
      ],
      '/interview/': [
        '',
        '前端面试题'
      ]
    },
    repo: 'https://github.com/abner-forever/markdown',
    // editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  },
  plugins: ['@vuepress/blog'],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'assets/img/' // 配置不生效 引用图片时直接根目录资源文件路径
      }
    }
  }
}