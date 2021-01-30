## WC-BUTTON
> 常用的按钮组件。


### 基础用法
<style>.flex,.flex-free { display:flex;align-items:center } .flex > *,.flex-free > *{margin:0 16px}.flex > *{flex:1}</style>

<section class="flex">
  <wc-button type="primary">Primary Button</wc-button>
  <wc-button type="info">Info Button</wc-button>
  <wc-button type="success">Success Button</wc-button>
  <wc-button type="warning">Warning Button</wc-button>
</section>
<section class="flex">
  <wc-button>Normal Button</wc-button>
  <wc-button type="default">Default Button</wc-button>
  <wc-button type="inverse">Inverse Button</wc-button>
  <wc-button type="danger">Danger Button</wc-button>
</section>


### 尺寸大小

5种尺寸规则的按钮, 如果不满足自己的需求, 可以自行设置`width`和`height`。

```html
<wc-button size="large">Large Size</wc-button>
<wc-button size="medium">Medium Size</wc-button>
<wc-button>Deault Size</wc-button>
<wc-button size="small">Small Size</wc-button>
<wc-button size="mini">Mini Size</wc-button>
```

<section class="flex">
  <wc-button size="large">Large Size</wc-button>
  <wc-button size="medium">Medium Size</wc-button>
  <wc-button>Deault Size</wc-button>
  <wc-button size="small">Small Size</wc-button>
  <wc-button size="mini">Mini Size</wc-button>
</section>

### 状态
按钮有2种状态, `loading` 和 `disbled`, 这2种状态下, 都不能点击, 也无法获取焦点。

```html
<wc-button loading>Loading Status</wc-button>
<wc-button disabled>Disabled Status</wc-button>
<wc-button type="info" loading>Loading Status</wc-button>
<wc-button type="info" disabled>Disabled Status</wc-button>
```


<section class="flex">
  <wc-button loading>Loading Status</wc-button>
  <wc-button disabled>Disabled Status</wc-button>
  <wc-button type="info" loading>Loading Status</wc-button>
  <wc-button type="info" disabled>Disabled Status</wc-button>
</section>


### 图标
按钮可通过`icon`属性, 增加前置图标, 图标的名字, 参考前面的章节。

```html
<wc-button icon="edit">编辑</wc-button>
<wc-button type="danger" icon="trash">删除</wc-button>
<wc-button type="info" icon="load">静态菊花图标</wc-button>
<wc-button type="success" icon="loading">动态加载图标</wc-button>
<wc-button type="success" icon="fly">提交</wc-button>
```

<section class="flex">
  <wc-button icon="edit">编辑</wc-button>
  <wc-button type="danger" icon="trash">删除</wc-button>
  <wc-button type="info" icon="load">静态菊花图标</wc-button>
  <wc-button type="success" icon="loading">动态加载图标</wc-button>
  <wc-button type="success" icon="fly">提交</wc-button>
</section>

### 特殊属性
有2个特殊属性`round`和`circle`, 可以控制按钮的圆角半径, 如果有其他半径需求, 可以直接通过css设置`border-radius`。

`注:` circle属性会让移除掉按钮内文字, 只能用图标

```html
<wc-button type="info" size="large" round>圆角矩形</wc-button>
<wc-button type="info" size="medium" round>圆角矩形</wc-button>
<wc-button type="info" round>圆角矩形</wc-button>
<wc-button type="danger" size="large" circle icon="trash"></wc-button>
<wc-button type="info" size="medium" circle icon="plus"></wc-button>
<wc-button type="inverse" circle icon="edit"></wc-button>
```

<section class="flex-free">
  <wc-button type="info" size="large" round>圆角矩形</wc-button>
  <wc-button type="info" size="medium" round>圆角矩形</wc-button>
  <wc-button type="info" round>圆角矩形</wc-button>
  <wc-button type="danger" size="large" circle icon="trash"></wc-button>
  <wc-button type="info" size="medium" circle icon="plus"></wc-button>
  <wc-button type="inverse" circle icon="edit"></wc-button>
</section>


### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  type  |  String  |   无   |   按钮类型, 仅能决定按钮的颜色, 别额外作用, 可选值有: primary、info、success、warning、default、inverse、danger   |
|  size  |   String   |  default   |   按钮尺寸, 可选值有: large、medium、small、mini   |
|  loading  |   Boolean  | false   |  按钮的加载状态, 为true时, 按钮会呈现loading动画, 且按钮点击事件无效 |
|  disbaled  |   Boolean  | false   |  按钮的禁用状态, 为true时, 按钮点击事件无效 |
|  icon  |   String  |  无   |  为按钮设置前置图标 |
|  round  |   无  |  无   |  为按钮设置大圆角半径。 不需要赋值   |
|  circle  |   无  |  无   |  设置为正圆按钮, 且会让文字失效。 不需要赋值   |
|  autofocus  |   无  |  无   |  让按钮自动获得焦点。 不需要赋值   |
|  lazy  |   Number  |  0   |  为按钮设置节流防抖, 单位毫秒, 设置一个大于0的值之后, 在指定毫秒之内, 无法多次触发点击事件  |
