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
                title: '阮一峰',
                desc: '阮一峰的网络日志。',
                logo: 'http://www.ruanyifeng.com/blog/images/person2_s.jpg',
                link: 'http://www.ruanyifeng.com/blog/',
            },
            {
                title: 'bran',
                desc: '言念君子，温其如玉',
                logo: 'https://bran-nie.com/favicon.ico',
                link: 'https://bran-nie.com/',
            },
            {
                title: '布丁',
                desc: '秋天到了，夏天的不甘该通通放下了。',
                logo: 'https://zhaohongbo910.github.io/head.jpg',
                link: 'https://zhaohongbo910.github.io/',
            },
            {
                title: '王世彪的博客',
                desc: '积跬步以至千里，喜欢学习喜欢你。',
                logo: 'https://gitee.com/wangshibiao/blog_picBed2/raw/master/images/20200806151030.png',
                link: 'https://www.sofineday.com/',
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
                    children: [
                        {
                            title: '基本使用概念',
                            path: '/accumulate/css/common',
                        },
                        {
                            title: 'object.fit属性',
                            path: '/accumulate/css/1',
                        },
                        {
                            title: 'css绘制圆形渐变进度条',
                            path: '/accumulate/css/2',
                        },
                        {
                            title: '媒体查询',
                            path: '/accumulate/css/3',
                        },
                        {
                            title: '文本溢出显示省略号',
                            path: '/accumulate/css/6',
                        },
                        {
                            title: 'CSS实现全站中文简繁转换',
                            path: '/accumulate/css/7',
                        },
                        {
                            title: 'autofoucs属性学习',
                            path: '/accumulate/css/8',
                        },
                    ],
                },
                {
                    title: 'javaScript',
                    path: '/accumulate/js/',
                    collapsable: true,
                    children: [
                        {
                            title: '跨域了解',
                            path: '/accumulate/js/1',
                        },
                        {
                            title: 'js数据类型',
                            path: '/accumulate/js/2',
                        },
                        {
                            title: '事件触发一次',
                            path: '/accumulate/js/3',
                        },
                        {
                            title: '获取数组中的最大值和最小值',
                            path: '/accumulate/js/4',
                        },
                    ],
                },
                {
                    title: 'Vue',
                    path: '/accumulate/vue/',
                    collapsable: true,
                    children: [
                        {
                            title: 'vue编译原理',
                            path: '/accumulate/vue/1',
                        },
                        {
                            title: '父子组件通信',
                            path: '/accumulate/vue/2',
                        },
                        {
                            title: 'vue 中被忽略但却很实用的',
                            path: '/accumulate/vue/3',
                        },
                        {
                            title: 'element-ui Upload 上传文件',
                            path: '/accumulate/vue/4',
                        },
                        {
                            title: 'vue+axios 以文件流的形式下载文件',
                            path: '/accumulate/vue/5',
                        },
                        {
                            title: 'element-ui 中 el-table 多列排序',
                            path: '/accumulate/vue/6',
                        },
                        {
                            title: 'vue 转换 es7 为 es5 语法',
                            path: '/accumulate/vue/7',
                        },
                        {
                            title: '结合ts的vue递归组件写法',
                            path: '/accumulate/vue/8',
                        },
                        {
                            title: 'vuex存储和本地存储的区别',
                            path: '/accumulate/vue/9',
                        },
                    ],
                },
                {
                    title: 'Webpack',
                    path: '/accumulate/webpack/',
                    collapsable: true,
                    children: [
                        {
                            title: 'webpack 中的 hash、chunkhash、contenthash 区别',
                            path: '/accumulate/webpack/1',
                        },
                    ],
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
            '@vssue/vuepress-plugin-vssue',
            {
                platform: 'github-v4', //v3的platform是github，v4的是github-v4
                locale: 'zh', //语言
                // 其他的 Vssue 配置
                owner: 'AprilTong', //github账户名
                repo: 'blog', //github一个项目的名称
                clientId: 'ab30b6b18ab55eb429a3', //注册的Client ID
                clientSecret: 'aa5329f6a56a5ae8e125bc61a68245169ed2f2f7', //注册的Client Secret
                autoCreateIssue: true, // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
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
        [
            'vuepress-plugin-mygitalk',
            {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 是否开启首页评论(default: true)
                home: false,
                // Gitalk配置
                gitalk: {
                    // GitHub Application Client ID.
                    clientID: 'ab30b6b18ab55eb429a3',
                    // GitHub Application Client Secret.
                    clientSecret: 'db93fb853870653f1274e90b93ac091eeac43379',
                    // GitHub repository. 存储评论的 repo
                    repo: 'AprilTong.github.io',
                    // GitHub repository 所有者，可以是个人或者组织。
                    owner: 'AprilTong',
                    // 设置语言(default: zh-CN)
                    language: 'zh-CN',
                },
            },
        ],
    ],
}
