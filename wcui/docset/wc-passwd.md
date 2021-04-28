<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>


## 密码框
> 常用的密码文本框。


### 基础用法

```html
<wc-passwd></wc-passwd>
```

<section class="flex">
  <wc-passwd placeholder="Default"></wc-passwd>
  <wc-passwd placeholder="type=primary" type="primary"></wc-passwd>
  <wc-passwd placeholder="type=info" type="info"></wc-passwd>
</section>
<section class="flex">
  <wc-passwd placeholder="type=success" type="success"></wc-passwd>
  <wc-passwd placeholder="type=warning" type="warning"></wc-passwd>
  <wc-passwd placeholder="type=danger" type="danger"></wc-passwd>
</section>


### 尺寸大小
5种尺寸规则的按钮, 如果不满足自己的需求, 可以自行设置`width`和`height`。

```html
<wc-passwd placeholder="Large Size" size="large"></wc-passwd>
<wc-passwd placeholder="Medium Size" size="medium"></wc-passwd>
<wc-passwd placeholder="Deault Size"></wc-passwd>
<wc-passwd placeholder="Small Size" size="small"></wc-passwd>
<wc-passwd placeholder="Mini Size" size="mini"></wc-passwd>
```

<section class="flex">
  <wc-passwd placeholder="Large Size" size="large"></wc-passwd>
  <wc-passwd placeholder="Medium Size" size="medium"></wc-passwd>
  <wc-passwd placeholder="Deault Size"></wc-passwd>
  <wc-passwd placeholder="Small Size" size="small"></wc-passwd>
  <wc-passwd placeholder="Mini Size" size="mini"></wc-passwd>
</section>

### 状态
按钮有2种状态, `readonly` 和 `disabled`, 这2种状态下, value值都无法被修改。

```html
<wc-passwd placeholder="Normal"></wc-passwd>
<wc-passwd placeholder="Readonly Status" readonly></wc-passwd>
<wc-passwd placeholder="Disabled Status" disabled></wc-passwd>
```


<section class="flex">
  <wc-passwd placeholder="Normal"></wc-passwd>
  <wc-passwd placeholder="Readonly Status" readonly></wc-passwd>
  <wc-passwd placeholder="Disabled Status" disabled></wc-passwd>
</section>



### 特殊属性
特殊属性`round`, 前者可以控制按钮的圆角半径

```html
<wc-passwd round placeholder="Large Size" size="large"></wc-passwd>
<wc-passwd round placeholder="Medium Size" size="medium"></wc-passwd>
<wc-passwd round placeholder="Deault Size"></wc-passwd>
<wc-passwd round placeholder="Small Size" size="small"></wc-passwd>
<wc-passwd round placeholder="Mini Size" size="mini"></wc-passwd>
```

<section class="flex-free">
  <wc-passwd round placeholder="Large Size" size="large"></wc-passwd>
  <wc-passwd round placeholder="Medium Size" size="medium"></wc-passwd>
  <wc-passwd round placeholder="Deault Size"></wc-passwd>
  <wc-passwd round placeholder="Small Size" size="small"></wc-passwd>
  <wc-passwd round placeholder="Mini Size" size="mini"></wc-passwd>
</section>


### 额外属性
`placeholder`, `maxlength`, `minlength`, `autofocus`, `lazy`, 这5个属性, 详见底下的API说明。


### 插槽(slot)
前面的icon属性, 比较单调, 而且是后置的。在有需要的情况下, 可以通过插槽机制, 在文本框中放置任意内容, 当然为了美观, 一般只建议放图标或文字。

1. `slot=prepend`, 前置插槽
2. `slot=append`, 后置插槽

> `注意:`, 同一个位置的插槽, 只能有1个, 多出来的会被移除。

```html
<wc-passwd>
  <span slot="prepend">账号</span>
</wc-passwd>
<wc-passwd>
<span slot="append">@163.com</span>
</wc-passwd>
<wc-passwd>
  <wc-icon slot="prepend" style="--size:16px" is="user"></wc-icon>
</wc-passwd>

<wc-passwd>
  <span slot="prepend">账号</span>
  <span slot="append">@163.com</span>
</wc-passwd>
<wc-passwd round>
  <wc-icon style="--size:16px" slot="prepend" is="user"></wc-icon>
</wc-passwd>

```

<section class="flex">
  <wc-passwd>
    <span slot="prepend">账号</span>
  </wc-passwd>
  <wc-passwd>
  <span slot="append">@163.com</span>
  </wc-passwd>
  <wc-passwd>
    <wc-icon slot="prepend" style="--size:16px" is="user"></wc-icon>
  </wc-passwd>
</section>

<section class="flex">
  <wc-passwd>
    <span slot="prepend">账号</span>
    <span slot="append">@163.com</span>
  </wc-passwd>
  <wc-passwd round>
    <wc-icon style="--size:16px" slot="prepend" is="user"></wc-icon>
  </wc-passwd>
</section>






### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  type  |  String  |   无   |   文本框类型, 仅能决定颜色, 无额外作用, 可选值有: `primary、info、success、warning、danger`   |
|  size  |   String   |  default   |   输入框尺寸, 可选值有: `large、medium、small、mini`   |
|  readonly  |   Boolean  | false   |  输入框的只读状态, 为true时, 无法输入, 但仍能获得焦点  |
|  disbaled  |   Boolean  | false   |  输入框的禁用状态, 为true时, 无法输入, 也无法获得焦点 |
|  icon  |   String  |  无   |  为输入框设置后置图标 |
|  placeholder  |   String  |  无   |  原生属性, 占位字符, value为空时显示 |
|  round  |   无  |  无   |  为输入框设置大圆角半径。 不需要赋值   |
|  autofocus  |   无  |  无   |  让输入框自动获得焦点。 不需要赋值   |
|  maxlength  |   Number  |  无   |  限制文本框的最大字符数量, 超出无法输入  |
|  minlength  |   Number  |  无   |  限制文本框的最小字符数量, 小于不会触发`submit`事件。   |
|  value  |   String  |   无   |  绑定值  |
|  lazy  |   Number  |   0   |  设置节流防抖, 单位毫秒, 设置一个大于0的值之后, 在指定毫秒之内, 不会重复触发补全或提交  |
|  no-border  |  无  |   无  |   设置无边框, 无需设值。 背景色可通过css设置 `--bg-color` 注入   |


### 事件
|  事件名  |  描述  |     回调参数   |   补充说明   |
|  :-:  |   -   |   -   |     -   |
|  @submit  |  按下`回车键`时触发  |  无  |  受`lazy`属性的制约  |

