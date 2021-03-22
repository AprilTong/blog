module.exports = {
    // 网站标题
    title: 'April的记录小屋',
    // 网站描述
    description: '最好的时光，是现在。',
    keywords: 'April的博客，April',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/images/photo.jpeg' }],
        ['link', { rel: 'manifest', href: '/images/photo.jpeg' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpeg' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
        ['meta', { 'http-quiv': 'expires', cotent: '0' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ],
    serviceWorker: false, // 是否开启 PWA
    base: '/', // 部署到github相关的配置
    markdown: {
        lineNumbers: true, // 代码块是否显示行号
        toc: { includeLevel: [1, 2] },
    },
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        authorAvatar: '/images/photo.jpeg',
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
                link: 'https://vuepress-theme-reco.recoluan.com',
            },
        ],
        mode: 'light',
        author: 'AprilTong',
        nav: [
            // 导航栏配置
            { text: 'Home', link: '/' },
            { text: '关于前端', link: '/accumulate/' },
            { text: 'JavaScript练习', link: '/algorithm/' },
            { text: '诗和远方', link: '/others/' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            { text: 'github', link: 'https://github.com/AprilTong', icon: 'reco-github' },
        ],
        sidebar: {
            '/accumulate/': [
                {
                    title: 'Css',
                    path: '/accumulate/css/',
                    collapsable: true,
                },
                {
                    title: 'javaScript',
                    path: '/accumulate/js/',
                    collapsable: true,
                },
                {
                    title: 'Vue',
                    path: '/accumulate/vue/',
                    collapsable: true,
                },
                {
                    title: 'Webpack',
                    path: '/accumulate/webpack/',
                    collapsable: true,
                },
            ],
        },
        sidebarDepth: 2,
        subSidebar: 'auto',
        editLinks: true, // 默认是false，设置为true来启用
        editLinkText: '发现有错误?前往GitHub指正', // 指明编辑功能的文字内容
        docsRepo: 'https://github.com/AprilTong/blog',
        lastUpdated: '上次更新',
        smoothScroll: true, // 点击左侧侧边栏,页面滚动效果,smoothScroll 选项来启用页面滚动效果,true为启动,false禁用
        blogConfig: {
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认3
                text: '分类', // 默认文案 “标签”，
            },
        },
        vssueConfig: {
            platform: 'github',
            owner: 'AprilTong', //github账户名
            repo: 'https://github.com/AprilTong/AprilTong.github.io', //github一个项目的名称
            clientId: 'ab30b6b18ab55eb429a3',
            clientSecret: 'aa5329f6a56a5ae8e125bc61a68245169ed2f2f7',
            autoCreateIssue: true,
        },
    },
    plugins: [
        [
            //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
            'cursor-effects',
            {
                size: 3, // size of the particle, default: 2
                shape: ['circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
        [
            'vuepress-plugin-auto-sidebar',
            {
                // titleMode: 'titlecase', // 标题模式
                collapsable: true, // 设置为true，开启折叠
            },
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: false,
                updatePopup: false,
            },
        ],
        [
            '@vuepress-reco/comments',
            {
                solution: 'vssue',
                options: {
                    platform: 'github',
                    owner: 'AprilTong', //github账户名
                    repo: 'https://github.com/AprilTong/AprilTong.github.io', //github一个项目的名称
                    clientId: 'ab30b6b18ab55eb429a3',
                    clientSecret: 'aa5329f6a56a5ae8e125bc61a68245169ed2f2f7',
                    autoCreateIssue: true,
                },
            },
        ],
        [
            //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
            '@vuepress-reco/vuepress-plugin-kan-ban-niang',
            {
                theme: ['blackCat'],
                clean: true,
                modelStyle: {
                    left: '40px',
                    bottom: '40px',
                },
            },
        ],
    ],
}
