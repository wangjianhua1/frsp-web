# frsp-web

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#项目构建命令
#1.安装node3.4偶数稳定版本
#安装前需要配置node及npm环境
#全局安装 vue-cli 如果本机以前安装过  就无须执行避免重复安装 
$ npm install --global vue-cli
#创建一个基于 webpack 的vue项目，切换到想建立项目的目录下，然后执行;后续按回车安装默认true即可,自动安装依赖
$ vue init webpack frsp-web 
#切换到当前项目下添加iview最新版本 设置useEslint: false
npm install iview --save
#新建assets/theme/index.less,main.js引入，全局安装  iview-theme
npm install iview-theme -g
