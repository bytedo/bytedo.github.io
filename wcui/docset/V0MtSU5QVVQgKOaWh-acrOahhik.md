## 单行文本框
> 常用的单行文本框, 支持自动补全等特性。


### 基础用法
<style>.flex,.flex-free { display:flex;align-items:center } .flex > *,.flex-free > *{margin:0 16px}.flex > *{flex:1}</style>


<section class="flex">
  <wc-input type="primary">Primary Button</wc-input>
  <wc-input type="info">Info Button</wc-input>
  <wc-input type="success">Success Button</wc-input>
  <wc-input type="warning">Warning Button</wc-input>
</section>
<section class="flex">
  <wc-input>Normal Button</wc-input>
  <wc-input type="default">Default Button</wc-input>
  <wc-input type="inverse">Inverse Button</wc-input>
  <wc-input disabled type="danger">Danger Button</wc-input>
</section>

```html
<wc-input></wc-input>
```


<wc-input></wc-input>