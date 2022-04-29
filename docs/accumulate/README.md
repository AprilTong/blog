## 匠人科技

1. webpack 的 loader 和 plugin 的区别

-   loader 用于对模块的"源代码"进行转换
-   plugin 可以用来打包优化、资源管理、环境变量注入等，会运行在 webpack 的不同阶段，贯穿了 webpack 的整个生命周期

2. css 相关的 loader 加载顺序以及作用

顺序：sass-loader、css-loader、style-loader
作用：
less-loader: 处理用 less 预处理器编写的 css 样式
css-loader：将 css 文件进行解析，允许 css 文件通过 require 的方式进行引入，并返回 css 代码
style-loader: 把 css-loader 生成的内容，用 style 标签挂载到页面的 head 中
postcss-loader: 将 css3 专为低版本浏览器兼容写法

3. webpack 的热更新原理

介绍：
HMR 全称 Hot Module Replacement，可以理解为模块热替换，指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用。
总结：

-   通过 webpack-dev-server 创建两个服务器：提供静态资源的服务器 express 和 socket 服务器
-   express server 负责提供静态资源的服务，打包后的资源直接被浏览器请求和解析
-   socket server 是一个 websocket 的长连接，双方可以通信
-   当 socket server 监听到对应的模块发生变化时，会生成两个文件 manifest.json 和.js 文件
-   通过长连接，socket server 可以直接将这两个文件主动发送给浏览器
-   浏览器拿到两个新的文件后，通过 HMR runtime 机制，加载这两个文件，并且对修改的模块进行更新

4. webpack 和 vite 的区别，优劣势

5. 模块化的分类以及使用场景

CommonJS、ES Modules、

6. 枚举的使用和优势，和 object 有什么区别

7. 深拷贝实现

8. map 和 weakMap 的区别

9. 多个标签页打开互不影响

10. 多个标签页登录之前的强制退出，纯前端

11. 选项 api 和组合式 api 的区别

12. vue2 中如何使用 ts

13. 装饰器

14. 如何在浏览器中模块化引入

15. webpack 的 chunk

16. webpack 中的 hash、几种、区别

## 思谋科技

1. vue3 和 vue2 的区别

2. computed 和 watch 的区别和使用场景

3. vue2 中 this.XX

4. watch 监听对象时的三个属性

5. this 的使用

6. 闭包

7. 垃圾回收机制

8. computed 中能不能调用异步

9. css 实现不定宽高垂直居中

10. 实现一个深拷贝
11. 实现一个防抖

12. 三次握手和四次挥手

## 面试网站

1. navigator.sendBeacon()
