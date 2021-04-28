<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>


## 数字文本框
> 在单行文本框的基础上简化而来, 增加数字输入的特性。


### 基础用法

```html
<wc-number></wc-number>
```

<section class="flex">
  <wc-number placeholder="Default"></wc-number>
  <wc-number placeholder="type=primary" type="primary"></wc-number>
  <wc-number placeholder="type=info" type="info"></wc-number>
</section>
<section class="flex">
  <wc-number placeholder="type=success" type="success"></wc-number>
  <wc-number placeholder="type=warning" type="warning"></wc-number>
  <wc-number placeholder="type=danger" type="danger"></wc-number>
</section>


### 尺寸大小
5种尺寸规则的按钮, 如果不满足自己的需求, 可以自行设置`width`和`height`。

```html
<wc-number placeholder="Large Size" size="large"></wc-number>
<wc-number placeholder="Medium Size" size="medium"></wc-number>
<wc-number placeholder="Deault Size"></wc-number>
<wc-number placeholder="Small Size" size="small"></wc-number>
<wc-number placeholder="Mini Size" size="mini"></wc-number>
```

<section class="flex">
  <wc-number placeholder="Large Size" size="large"></wc-number>
  <wc-number placeholder="Medium Size" size="medium"></wc-number>
  <wc-number placeholder="Deault Size"></wc-number>
  <wc-number placeholder="Small Size" size="small"></wc-number>
  <wc-number placeholder="Mini Size" size="mini"></wc-number>
</section>

### 状态
按钮有2种状态, `readonly` 和 `disabled`, 这2种状态下, value值都无法被修改。

```html
<wc-number placeholder="Normal"></wc-number>
<wc-number placeholder="Readonly Status" readonly></wc-number>
<wc-number placeholder="Disabled Status" disabled></wc-number>
```


<section class="flex">
  <wc-number placeholder="Normal"></wc-number>
  <wc-number placeholder="Readonly Status" readonly></wc-number>
  <wc-number placeholder="Disabled Status" disabled></wc-number>
</section>


### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  type  |  String  |   无   |   文本框类型, 仅能决定颜色, 无额外作用, 可选值有: `primary、info、success、warning、danger`   |
|  size  |   String   |  default   |   输入框尺寸, 可选值有: `large、medium、small、mini`   |
|  readonly  |   Boolean  | false   |  输入框的只读状态, 为true时, 无法输入, 但仍能获得焦点  |
|  disbaled  |   Boolean  | false   |  输入框的禁用状态, 为true时, 无法输入, 也无法获得焦点 |
|  round  |   无  |  无   |  为输入框设置大圆角半径。 不需要赋值   |
|  autofocus  |   无  |  无   |  让输入框自动获得焦点。 不需要赋值   |
|  max  |   Number  |  无   |  可输入的最大值  |
|  min  |   Number  |  无   |  可输入的最小值  |
|  step  |   Number  |  1   |  每次点击增加数值, 默认为1  |
|  value  |   Number  |  0   |  绑定值  |
|  lazy  |   Number  |  0   |  设置节流防抖, 单位毫秒, 设置一个大于0的值之后, 在指定毫秒之内, 不会重复触发提交  |