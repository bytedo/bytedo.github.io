<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>

## 多选框
> 常用的多选按钮(组)。


### 基础用法

```html
<wc-checkbox>Default checkbox</wc-checkbox>
```

<section class="flex">
  <wc-checkbox>Default Checkbox</wc-checkbox>
  <wc-checkbox readonly>Readonly Checkbox</wc-checkbox>
  <wc-checkbox disabled>Disabled Checkbox</wc-checkbox>
</section>

<section class="flex">
  <wc-checkbox type="primary">type=primary</wc-checkbox>
  <wc-checkbox type="info">type=info</wc-checkbox>
  <wc-checkbox type="success">type=success</wc-checkbox>
  <wc-checkbox type="warning">type=warning</wc-checkbox>
  <wc-checkbox type="danger">type=danger</wc-checkbox>
</section>


### 状态
单选框, 有2种状态, `readonly` 和 `disabled`, 这2种状态下, 都不能点击。效果参考上面的基础例子。

```html
<wc-checkbox readonly>Readonly Checkbox</wc-checkbox>
<wc-checkbox disabled>Disabled Checkbox</wc-checkbox>
```

### 取值
这里的取值, 跟原生的`input[type=checkbox]`的是一致的。无论多选框是否选中, 读取它的`value`属性都是有值的, 正确的做法, 应该是读取它的`checked`属性。
> 注意, 多选框若套在**`组`**里,则是读取`value`属性, 且该`value`的值, 应为数组。

```html
<!-- 单独使用, 则应该读取checked属性 -->
<wc-checkbox value="1">我是1</wc-checkbox>
<wc-checkbox value="2">我是2</wc-checkbox>
<wc-checkbox value="3">我是3</wc-checkbox>

<!-- 按组使用, 则应该读取组的value属性 -->
<wc-checkbox-group>
  <wc-checkbox value="g1">我是g1</wc-checkbox>
  <wc-checkbox value="g2">我是g2</wc-checkbox>
  <wc-checkbox value="g3">我是g3</wc-checkbox>
</wc-checkbox-group>
```
<section class="flex">
  <wc-checkbox value="1">我是1</wc-checkbox>
  <wc-checkbox value="2">我是2</wc-checkbox>
  <wc-checkbox value="3">我是3</wc-checkbox>
</section>

<wc-checkbox-group class="flex">
  <wc-checkbox value="g1">我是g1</wc-checkbox>
  <wc-checkbox value="g2">我是g2</wc-checkbox>
  <wc-checkbox value="g3">我是g3</wc-checkbox>
</wc-checkbox-group>

### 完整APIs

`<wc-checkbox>`

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  type  |  String  |   无   |   复选框类型, 仅能决定颜色, 无额外作用, 可选值有: `primary、info、success、warning、danger`   |
|  readonly  |   Boolean  | false   |  复选框的只读状态, 为true时, 点击无效 |
|  disbaled  |   Boolean  | false   |  复选框的禁用状态, 为true时, 点击无效 |
|  value  |   String  |  无   |  复选框的实际值(非显示内容), 该值不随选中状态而变化  |
|  checked  |   Boolean  |  false   |  复选框的选中状态 |


`<wc-checkbox-group>`

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  value  |   Array  |  无   |  复选框组的实际值(非显示内容), 会根据选中的选项自动变化。 |