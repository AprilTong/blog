---
title: electron开发桌面应用
sidebar: auto
sidebarDepth: 2
date: 2021-10-17
tags:
    - electron
---

## Electron + Vue3 项目搭建

```
npm i @vue/cli -g
vue create electron-vue-demo
cd electron-vue-demo
vue add electron-builder
```

问题：由于网络的原因，Electron 可能会安装失败：
解决：我是 mac 开发，只介绍 mac 的方法

打开链接**https://github.com/electron/electron/releases/tag/v$VERSION**
这个地址下载文件（这里的 \$VERSION 是 Electron 的确切版本)。
比如我的是 14.0.0 版本 我下载的文件是 <font color=#c7254e>electron-v14.0.0-darwin-x64.zip</font>
下载完成后，放到<font color=#c7254e>~/Library/Caches/electron/</font>文件夹下

## 初始项目目录

渲染进程的页面交给了 vue 进行渲染，开发过程和我们平时使用 vue 开发 web 页面没啥区别，而 electron 主进程的代码是放在 background.js 中。

## 开发中遇到的问题

-   **主进程和渲染进程通信**

通过 ipc 进行通信具体代码如下；
渲染进程：

```js
import { ipcRenderer } from 'electron'
....
ipcRenderer.send('setCookie', { loginCookie, indexUrl })
....
```

主进程：

```js
import { ipcMain } from 'electron';
···
// on的方法名要和渲染进程的保持一致
ipcMain.on('setCookie', (event, args) => {
	// args是渲染进程通信传过来的参数
	const { loginCookie, indexUrl } = args;
	// 处理你的业务
});
···
```

-   **preload 预加载使用**

在 utils 文件夹下创建 preload.js

1. 在 vue.config.js 中添加

```js
module.exports = {
    pluginOptions: {
        electronBuilder: {
            preload: 'src/utils/preload.js',
        },
    },
};
```

2. 在主进程中

```js
// 将preload的文件路径保存在全局变量中
global.shareObject = {
    preloadPath: path.join(__dirname, 'preload.js'),
};
const win = new BrowserWindow({
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
    },
});
```

3. 渲染进程中使用

```js
import { getGlobal } from '@electron/remote';
import { computed } from 'vue';
// preload不支持http协议，加载本地文件需强制可强制写为file协议
const preloadPath = computed(() => {
    return 'file://' + getGlobal('shareObject').preloadPath;
});
```

-   **electron 图标打包**

在 vue.config.js 中添加

```js
module.exports = {
    pluginOptions: {
        electronBuilder: {
            // window需要ico文件，mac需要icns文件
            builderOptions: {
                // window需要256*256大小的
                win: {
                    icon: 'src/assets/favicon.ico',
                },
                mac: {
                    icon: 'src/assets/favicon.icns',
                },
            },
        },
    },
};
```

1. ico 图标生成网站（[链接](http://www.ico51.cn/)）
2. icns 图标生成：

(1) 准备一个 1024 \* 1024 的 png 图片，假设名字为 icon.png
(2) 命令行 \$ mkdir tmp.iconset，创建一个临时目录存放不同大小的图片
(3) 把原图片转为不同大小的图片，并放入上面的临时目录

```
//全部拷贝到命令行回车执行，执行结束之后去 tmp.iconset 查看十张图片是否生成好
sips -z 16 16     icon.png --out tmp.iconset/icon_16x16.png
sips -z 32 32     icon.png --out tmp.iconset/icon_16x16@2x.png
sips -z 32 32     icon.png --out tmp.iconset/icon_32x32.png
sips -z 64 64     icon.png --out tmp.iconset/icon_32x32@2x.png
sips -z 128 128   icon.png --out tmp.iconset/icon_128x128.png
sips -z 256 256   icon.png --out tmp.iconset/icon_128x128@2x.png
sips -z 256 256   icon.png --out tmp.iconset/icon_256x256.png
sips -z 512 512   icon.png --out tmp.iconset/icon_256x256@2x.png
sips -z 512 512   icon.png --out tmp.iconset/icon_512x512.png
sips -z 1024 1024   icon.png --out tmp.iconset/icon_512x512@2x.png
```

4 通过 iconutil 生成 icns 文件 \$ iconutil -c icns tmp.iconset -o Icon.icns，此时你的目录应该有了你想要的
