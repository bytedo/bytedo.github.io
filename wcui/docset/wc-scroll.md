<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>

## 滚动条组件
常用的滚动组件, 可在一切需要滚动的地方使用。使用模拟的滚动条样式, 在不同浏览器、操作系统下都能得到一致的效果。

### 基础用法

```html
<wc-scroll style="width:200px;height:300px">
  这是一段很长很长很长的文字
  ...
</wc-scroll>

<wc-scroll style="width:200px;height:200px">
  <p style="width:300px">
    这是一段很长很长很长的文字
    ...
  </p>
</wc-scroll>
```

<section class="flex-free">
  <wc-scroll style="width:200px;height:300px">
  这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字.
  </wc-scroll>
  <wc-scroll style="width:200px;height:200px">
    <p style="width:300px">这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字,这是一段很长很长很长的文字.</p>
  </wc-scroll>
</section>


### 完整APIs
|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  axis  |  String  |   xy   |  指定允许滚动的方向, 默认横向和竖向都允许出现滚动条。可选值有`x, y, xy` |
|  disbaled  |   Boolean  |  false   |  临时禁用状态, 为true时, 无法用鼠标滚动, 也不出现滚动条。(直接设置`scrollTop`等则不受影响) |
|  delay  |   Number  |  1000   |  设置节流防抖, 单位毫秒, 可影响`触底/触顶`事件的频率  |
|  distance  |   Number  |  1  |  `触底/触顶`事件的触发距离阀值, 默认1个像素  |



### 事件
|  事件名  |  描述  |     回调参数   |   补充说明   |
|  :-:  |   -   |   -   |     -   |
|  @scroll  |  滚动时触发  |  无  |  无  |
|  @reach-bottom  |  滚动到底部时触发  |  无  |  受`lazy`和`distance`属性的约束 |
|  @reach-top  |  滚动到顶部时触发  |  无  |   受`lazy`和`distance`属性的约束   |