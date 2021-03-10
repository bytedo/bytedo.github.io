## 数字文本框
> 在单行文本框的基础上简化而来, 增加数字输入的特性。


### 基础用法
<style>.flex,.flex-free { display:flex;align-items:center } .flex > *,.flex-free > *{margin:0 16px}.flex > *{flex:1}.s16{--size:16px}</style>

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