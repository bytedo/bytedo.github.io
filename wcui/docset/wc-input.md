## 单行文本框
> 常用的单行文本框, 支持自动补全等特性。


### 基础用法
<style>.flex,.flex-free { display:flex;align-items:center } .flex > *,.flex-free > *{margin:0 16px}.flex > *{flex:1}.s16{--size:16px}</style>

```html
<wc-input></wc-input>
```

<section class="flex">
  <wc-input placeholder="Default"></wc-input>
  <wc-input placeholder="type=primary" type="primary"></wc-input>
  <wc-input placeholder="type=info" type="info"></wc-input>
</section>
<section class="flex">
  <wc-input placeholder="type=success" type="success"></wc-input>
  <wc-input placeholder="type=warning" type="warning"></wc-input>
  <wc-input placeholder="type=danger" type="danger"></wc-input>
</section>


### 尺寸大小
5种尺寸规则的按钮, 如果不满足自己的需求, 可以自行设置`width`和`height`。

```html
<wc-input placeholder="Large Size" size="large"></wc-input>
<wc-input placeholder="Medium Size" size="medium"></wc-input>
<wc-input placeholder="Deault Size"></wc-input>
<wc-input placeholder="Small Size" size="small"></wc-input>
<wc-input placeholder="Mini Size" size="mini"></wc-input>
```

<section class="flex">
  <wc-input placeholder="Large Size" size="large"></wc-input>
  <wc-input placeholder="Medium Size" size="medium"></wc-input>
  <wc-input placeholder="Deault Size"></wc-input>
  <wc-input placeholder="Small Size" size="small"></wc-input>
  <wc-input placeholder="Mini Size" size="mini"></wc-input>
</section>

### 状态
按钮有2种状态, `readonly` 和 `disabled`, 这2种状态下, value值都无法被修改。

```html
<wc-input placeholder="Normal"></wc-input>
<wc-input placeholder="Readonly Status" readonly></wc-input>
<wc-input placeholder="Disabled Status" disabled></wc-input>
```


<section class="flex">
  <wc-input placeholder="Normal"></wc-input>
  <wc-input placeholder="Readonly Status" readonly></wc-input>
  <wc-input placeholder="Disabled Status" disabled></wc-input>
</section>


### 图标
按钮可通过`icon`属性, 增加后置图标, 图标的名字, 参考前面的章节。

```html
<wc-input icon="mail"></wc-input>
<wc-input icon="fly"></wc-input>
<wc-input icon="edit"></wc-input>
```


<section class="flex">
  <wc-input icon="mail"></wc-input>
  <wc-input icon="fly"></wc-input>
  <wc-input icon="edit"></wc-input>
</section>

### 特殊属性
有2个特殊属性`round`和`passwd`, 前者可以控制按钮的圆角半径, 后者可以控制文本的字符是否显示明文。

```html
<wc-input round placeholder="Large Size" size="large"></wc-input>
<wc-input round placeholder="Medium Size" size="medium"></wc-input>
<wc-input round passwd placeholder="Deault Size"></wc-input>
<wc-input round passwd placeholder="Small Size" size="small"></wc-input>
<wc-input round placeholder="Mini Size" size="mini"></wc-input>
```

<section class="flex">
  <wc-input round placeholder="Large Size" size="large"></wc-input>
  <wc-input round placeholder="Medium Size" size="medium"></wc-input>
  <wc-input round passwd placeholder="Deault Size"></wc-input>
  <wc-input round passwd placeholder="Small Size" size="small"></wc-input>
  <wc-input round placeholder="Mini Size" size="mini"></wc-input>
</section>


### 额外属性
`placeholder`, `maxlength`, `minlength`, `autofocus`, `lazy`, 这5个属性, 详见底下的API说明。


### 插槽(slot)
前面的icon属性, 比较单调, 而且是后置的。在有需要的情况下, 可以通过插槽机制, 在文本框中放置任意内容, 当然为了美观, 一般只建议放图标或文字。

1. `slot=prepend`, 前置插槽
2. `slot=append`, 后置插槽

> `注意:`, 同一个位置的插槽, 只能有1个, 多出来的会被移除。

```html
<wc-input>
  <span slot="prepend">账号</span>
</wc-input>
<wc-input>
<span slot="append">@163.com</span>
</wc-input>
<wc-input>
  <wc-icon slot="prepend" style="--size:16px" is="user"></wc-icon>
</wc-input>

<wc-input>
  <span slot="prepend">账号</span>
  <span slot="append">@163.com</span>
</wc-input>
<wc-input round>
  <wc-icon style="--size:16px" slot="prepend" is="user"></wc-icon>
</wc-input>

```

<section class="flex">
  <wc-input>
    <span slot="prepend">账号</span>
  </wc-input>
  <wc-input>
  <span slot="append">@163.com</span>
  </wc-input>
  <wc-input>
    <wc-icon slot="prepend" class="s16" is="user"></wc-icon>
  </wc-input>
</section>

<section class="flex">
  <wc-input>
    <span slot="prepend">账号</span>
    <span slot="append">@163.com</span>
  </wc-input>
  <wc-input round>
    <wc-icon class="s16" slot="prepend" is="user"></wc-icon>
  </wc-input>
</section>



### 补全示例

```html

<wc-input @fetch-suggest="suggest"></wc-input>

<script>
// 此处省略其他如数据绑定等代码, 自行根据各自的框架修改

export default {
  methods: {
    suggest(ev) {
      var { value, send } = ev.detail
      // 这里省略条件判断
      if (/...some condition.../) {
        // 这里需要发送一个列表, 列表中的选项, 必须要有一个value字段, 其他字段随意, 自行根据需要选择是否发送。
        send([{ value: 'foo', ... }, { value: 'bar', ... }])
      }
    }
  }
}
</script>
```



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
|  passwd  |   无  |  无   |  将输入框设置为密码状态。 不需要赋值   |
|  autofocus  |   无  |  无   |  让输入框自动获得焦点。 不需要赋值   |
|  maxlength  |   Number  |  无   |  限制文本框的最大字符数量, 超出无法输入  |
|  minlength  |   Number  |  无   |  限制文本框的最小字符数量, 小于不会触发`submit`事件。   |
|  value  |   String  |   无   |  绑定值  |
|  lazy  |   Number  |   0   |  设置节流防抖, 单位毫秒, 设置一个大于0的值之后, 在指定毫秒之内, 不会重复触发补全或提交  |


### 事件
|  事件名  |  描述  |     回调参数   |   补充说明   |
|  :-:  |   -   |   -   |     -   |
|  @submit  |  按下`回车键`时触发  |  无  |  受`lazy`属性的制约; 有补全下拉选项时, 不会触发  |
|  @fetch-suggest  |  输入时触发  |  形参中`event.detail`有2个属性, 当前值`value`和`send`方法, 需要自行发送一个列表  |  受`lazy`属性的制约; 密码框不会触发 |
|  @select  |  有补全列表时, 且选中其中一个选项时触发  |  形参`event.detail`返回当前选中的值  |   无   |
