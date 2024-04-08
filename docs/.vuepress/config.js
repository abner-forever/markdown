module.exports = {
  title: 'abner的文档',
  description: '前端 笔记 面试 React http',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  base: '/doc/',
  port: 9090,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'External', link: 'http://foreverheart.top' },
      { text: 'gitHub', link: 'https://github.com/abner-jlm/markdown' },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/front/': [
        '',
        'http',
        'react',
        'js基础'
      ],
      '/interview/': [
        '',
        '字节面试题'
      ],
      '/ci/': [
        '',
        'semantic-release'
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'image': '/assets/img',
        '@alias': '/'
      }
    }
  }
}