## WC-LINK
> 超链接按钮, 可代替原生A标签。


### 基础用法
<style>.flex,.flex-free { display:flex;align-items:center } .flex > *,.flex-free > *{margin:0 16px}.flex > *{flex:1}</style>

<section class="flex-free">
  <wc-link type="primary">Primary</wc-link>
  <wc-link type="info">Info</wc-link>
  <wc-link type="success">Success</wc-link>
  <wc-link type="warning">Warning</wc-link>
</section>
<section class="flex-free">
  <wc-link>Normal</wc-link>
  <wc-link type="default">Default</wc-link>
  <wc-link type="inverse">Inverse</wc-link>
  <wc-link type="danger">Danger</wc-link>
</section>


### 状态

只有`disbaled`一种状态, `disbaled`下不能点击, 也无法跳转, 无法获取焦点。


```html
<wc-link to="#foo/bar1">#foo/bar1</wc-link>
<wc-link to="#foo/bar2" type="info">#foo/bar2</wc-link>
<wc-link disabled to="#foo/bar3" type="inverse">#foo/bar3</wc-link>
<wc-link disabled to="#foo/bar4" type="danger">#foo/bar4</wc-link>
```

<section class="flex-free">
  <wc-link to="#foo/bar1">#foo/bar1</wc-link>
  <wc-link to="#foo/bar2" type="info">#foo/bar2</wc-link>
  <wc-link disabled to="#foo/bar3" type="inverse">#foo/bar3</wc-link>
  <wc-link disabled to="#foo/bar4" type="danger">#foo/bar4</wc-link>
</section>


### 下划线
默认只在 鼠标经过和获得焦点时显示下划线, 如果需要一直显示下划线, 可以配置`underline`属性, 不需要设置任何值。


```html
<wc-link underline to="#foo/bar1">#foo/bar1</wc-link>
<wc-link underline to="#foo/bar2" type="info">#foo/bar2</wc-link>
<wc-link to="#foo/bar3" type="inverse">#foo/bar3</wc-link>
<wc-link to="#foo/bar4" type="danger">#foo/bar4</wc-link>
```

<section class="flex-free">
  <wc-link underline to="#foo/bar1">#foo/bar1</wc-link>
  <wc-link underline to="#foo/bar2" type="info">#foo/bar2</wc-link>
  <wc-link to="#foo/bar3" type="inverse">#foo/bar3</wc-link>
  <wc-link to="#foo/bar4" type="danger">#foo/bar4</wc-link>
</section>



### 跳转
`to`属性与原生A标签的`href`一致, 支持任何A标签支持的跳转, 不设置该属性时, 可自行监听`click`事件, 行为与`wc-button`一致。


```html
<wc-link to="javascript:alert(1234);">javascript:alert(1234);</wc-link>
<wc-link to="#foo/bar" type="info">#foo/bar</wc-link>
```

<section class="flex-free">
  <wc-link to="javascript:alert(1234);">javascript:alert(1234);</wc-link>
  <wc-link to="#foo/bar" type="info">#foo/bar</wc-link>
</section>


### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  type  |  String  |   无   |   按钮类型, 仅能决定按钮的颜色, 别额外作用, 可选值有: primary、info、success、warning、default、inverse、danger。 不设置时,继承父级的颜色定义   |
|  underline  |   无  |  无   |  设置是否一直显示下划线 |
|  disbaled  |   Boolean  | false   |  按钮的禁用状态, 为true时, 按钮点击事件无效 |
|  autofocus  |   无  |  无   |  让按钮自动获得焦点。 不需要赋值   |
|  to  |   String  |  无   |  跳转属性, 与原生A标签的`href`一致, 支持任何A标签支持的跳转  |
|  lazy  |   Number  |  0   |  为按钮设置节流防抖, 单位毫秒, 设置一个大于0的值之后, 在指定毫秒之内, 无法多次触发点击事件  |