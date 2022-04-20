module.exports = {
  title: "Kobayashi's Blog",
  desctrption: "something trival",
  head: [
    ["link", { rel: "icon", href: "assets/img/favicon.ico" }],
    ["meta", { author: "keywords", content: "kobayashi" }],
    ["meta", { name: "keywords", content: "vuepress description" }],
  ],
  themeConfig: {
    logo: 'assets/img/hero.png',
    nav:[
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      'about',
      'about1',
      {
        title: 'CSS',   // 必要的
        path: '/css',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          'css/aaa',
          'css/bbb',
          'css/ccc',
        ]
      },
      
    ],
    lastUpdated: 'Last Updated', // string | boolean
  }
}