## 单选框
> 常用的单选按钮(组)。


### 基础用法
<style>.flex,.flex-free { display:flex;align-items:center } .flex > *,.flex-free > *{margin:0 16px}.flex > *{flex:1}</style>

```html
<wc-radio>Default Radio</wc-radio>
```

<section class="flex">
  <wc-radio>Default Radio</wc-radio>
  <wc-radio readonly>Readonly Radio</wc-radio>
  <wc-radio disabled>Disabled Radio</wc-radio>
</section>

<section class="flex">
  <wc-radio type="primary">type=primary</wc-radio>
  <wc-radio type="info">type=info</wc-radio>
  <wc-radio type="success">type=success</wc-radio>
  <wc-radio type="warning">type=warning</wc-radio>
  <wc-radio type="danger">type=danger</wc-radio>
</section>


### 状态
单选框, 有2种状态, `readonly` 和 `disbled`, 这2种状态下, 都不能点击。效果参考上面的基础例子。

```html
<wc-radio readonly>Readonly Radio</wc-radio>
<wc-radio disabled>Disabled Radio</wc-radio>
```

### 取值
这里的取值, 跟原生的`input[type=radio]`的是一致的。无论单选框是否选中, 读取它的`value`属性都是有值的, 正确的做法, 应该是读取它的`checked`属性。
> 注意, 单选框若套在**`组`**里,则是读取value属性。

```html
<!-- 单独使用, 则应该读取checked属性 -->
<wc-radio value="1">我是1</wc-radio>
<wc-radio value="2">我是2</wc-radio>
<wc-radio value="3">我是3</wc-radio>

<!-- 按组使用, 则应该读取组的value属性 -->
<wc-radio-group>
  <wc-radio value="g1">我是g1</wc-radio>
  <wc-radio value="g2">我是g2</wc-radio>
  <wc-radio value="g3">我是g3</wc-radio>
</wc-radio-group>
```
<section class="flex">
  <wc-radio value="1">我是1</wc-radio>
  <wc-radio value="2">我是2</wc-radio>
  <wc-radio value="3">我是3</wc-radio>
</section>

<wc-radio-group class="flex">
  <wc-radio value="g1">我是g1</wc-radio>
  <wc-radio value="g2">我是g2</wc-radio>
  <wc-radio value="g3">我是g3</wc-radio>
</wc-radio-group>

### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  type  |  String  |   无   |   按钮类型, 仅能决定按钮的颜色, 无额外作用, 可选值有: `primary、info、success、warning、danger`   |
|  readonly  |   Boolean  | false   |  按钮的只读状态, 为true时, 点击无效 |
|  disbaled  |   Boolean  | false   |  按钮的禁用状态, 为true时, 点击无效 |
|  value  |   String  |  无   |  单选框的实际值(非显示内容), 单个使用时, 该值不会变化; 单选组的`value`值, 会根据选中的选项自动变化。 |
|  checked  |   Boolean  |  false   |  单选框的选中状态。 (单选组没有这个属性)  |
