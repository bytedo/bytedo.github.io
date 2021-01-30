## 安装

本项目无需安装, 全程cdn引入即可。


### 示例
cdn地址, 可以使用我们提供的地址,这个地址的版本将永远保持为最新版
如果想固定使用某个版本, 可以使用npm的cdn地址。

1. `//unpkg.yutent.top/@bytedo/wcui/`
1. `//unpkg.com/@bytedo/wcui@1.0.3/`


```html
<!-- 引入css基础样式 -->
<link href="//unpkg.yutent.top/@bytedo/wcui/dist/css/reset-basic.css" rel="stylesheet">

<script type="module">
  // 引入你所需要的任意组件即可
  import '//unpkg.yutent.top/@bytedo/wcui/dist/form/button.js'

  // 或者
  import '//unpkg.com/@bytedo/wcui@1.0.3/dist/form/button.js'
</script>

```