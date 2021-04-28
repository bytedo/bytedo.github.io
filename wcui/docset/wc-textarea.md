<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>

## 多行文本框
> 常用的单行文本框, 支持自动补全等特性。


### 基础用法

```html
<wc-textarea></wc-textarea>
```

<section class="flex">
  <wc-textarea placeholder="Default"></wc-textarea>
  <wc-textarea placeholder="type=primary" type="primary"></wc-textarea>
  <wc-textarea placeholder="type=info" type="info"></wc-textarea>
</section>
<section class="flex">
  <wc-textarea placeholder="type=success" type="success"></wc-textarea>
  <wc-textarea placeholder="type=warning" type="warning"></wc-textarea>
  <wc-textarea placeholder="type=danger" type="danger"></wc-textarea>
</section>



### 状态
按钮有2种状态, `readonly` 和 `disabled`, 这2种状态下, value值都无法被修改。

```html
<wc-textarea placeholder="Normal"></wc-textarea>
<wc-textarea placeholder="Readonly Status" readonly></wc-textarea>
<wc-textarea placeholder="Disabled Status" disabled></wc-textarea>
```


<section class="flex">
  <wc-textarea placeholder="Normal"></wc-textarea>
  <wc-textarea placeholder="Readonly Status" readonly></wc-textarea>
  <wc-textarea placeholder="Disabled Status" disabled></wc-textarea>
</section>


### 特殊属性
`show-limit`属性可以控制是否显示输入字数, 可以配合`maxlength`使用。

```html
<wc-textarea show-limit></wc-textarea>
<wc-textarea show-limit maxlength="20"></wc-textarea>
<wc-textarea show-limit maxlength="30"></wc-textarea>
```


<section class="flex">
  <wc-textarea show-limit></wc-textarea>
  <wc-textarea show-limit maxlength="20"></wc-textarea>
  <wc-textarea show-limit maxlength="30"></wc-textarea>
</section>




### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  type  |  String  |   无   |   文本框类型, 仅能决定颜色, 无额外作用, 可选值有: `primary、info、success、warning、danger`   |
|  readonly  |   Boolean  | false   |  输入框的只读状态, 为true时, 无法输入, 但仍能获得焦点  |
|  disbaled  |   Boolean  | false   |  输入框的禁用状态, 为true时, 无法输入, 也无法获得焦点 |
|  placeholder  |   String  |  无   |  原生属性, 占位字符, value为空时显示 |
|  autofocus  |   无  |  无   |  让输入框自动获得焦点。 不需要赋值   |
|  maxlength  |   Number  |  无   |  限制文本框的最大字符数量, 超出无法输入  |
|  minlength  |   Number  |  无   |  限制文本框的最小字符数量, 小于不会触发`submit`事件。   |
|  value  |   String  |   无   |  绑定值  |
|  lazy  |   Number  |   0   |  设置节流防抖, 单位毫秒, 设置一个大于0的值之后, 在指定毫秒之内, 不会重复触发补全或提交  |
|  show-limit  |  无  |   无  |   是否实时显示输入限制字数, 无需设值   |
|  no-border  |  无  |   无  |   设置无边框, 无需设值。 背景色可通过css设置 `--bg-color` 注入   |


### 事件
|  事件名  |  描述  |     回调参数   |   补充说明   |
|  :-:  |   -   |   -   |     -   |
|  @submit  |  按下`回车键` + `Ctrl/Cmd`时触发  |  无  |  受`lazy`属性的制约 |

