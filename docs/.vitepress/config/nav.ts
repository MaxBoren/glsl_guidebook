import DefaultTheme from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '教程',
    link: '/courses/webgl-base/index',
    activeMatch: '/courses/webgl-base/'
  },
  {
    text: '我的分类',
    items: [
      { text: 'Bug万象集', link: '/categories/issues/index', activeMatch: '/categories/issues/' },
      { text: '"杂碎"逆袭史', link: '/categories/fragments/index', activeMatch: '/categories/fragments/' },
      { text: '方案春秋志', link: '/categories/solutions/index', activeMatch: '/categories/solutions/' }
    ],
    activeMatch: '/categories/'
  },
  {
    text: '我的小册',
    items: [
      { text: 'Java基础快速入门', link: '/courses/java/index', activeMatch: '/courses/java/' },
      { text: 'MyBatis快速入门', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' }
    ],
    activeMatch: '/courses/'
  },
  // {
  //   text: '我的标签',
  //   link: '/tags',
  //   activeMatch: '/tags'
  // },
  // {
  //   text: '我的归档',
  //   link: '/archives',
  //   activeMatch: '/archives'
  // },
  {
    text: '关于',
    link: '/about/index',
    activeMatch: '/about/index.html'
  }
]