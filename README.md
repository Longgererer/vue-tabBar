# vue-tabBar

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 说明
一个可配置的，基于`vue`的`tabBar`组件，

#### tabBarConfig.js：
位于`src/public/js`目录下，为`tabBar`配置文件，可配置内容如下：

**borderStyle&lt;String&gt;**: 边框样式 &emsp;<font color=#999999>参考值：`'1px solid #ccc'`</font>

**backgroundColor&lt;String&gt;**: `tabBar`背景色  &emsp;<font color=#999999>参考值：`'#FFFFFF'`</font>

**list&lt;Array&gt;**: `tabBar`列表，可配置内容如下：

&emsp;&emsp;&emsp;&emsp;**router**： 配置路由&emsp;<font color=#999999>参考值：`'/'`</font>  
&emsp;&emsp;&emsp;&emsp;**text**： 文字内容&emsp;<font color=#999999>参考值：`'用户'`</font>  
&emsp;&emsp;&emsp;&emsp;**iconPath**： 图标地址（未选中）&emsp;<font color=#999999>参考值：`'../../static/dynamic.png'`</font>  
&emsp;&emsp;&emsp;&emsp;**selectIconPath**： 图标地址（选中）&emsp;<font color=#999999>参考值：`'../../static/dynamic-active.png'`</font>  
&emsp;&emsp;&emsp;&emsp;**isSelect**： 是否选中&emsp;<font color=#999999>参考值：`true`  
</font> 
&emsp;&emsp;&emsp;&emsp;**textColor**： 字体颜色（未选中）&emsp;<font color=#999999>参考值：`'#999999'`</font>  
&emsp;&emsp;&emsp;&emsp;**textSelectColor**： 字体颜色（选中）&emsp;<font color=#999999>参考值：`'#000000'`</font>  

#### tabBar and tabBarList
`tabBar`组件