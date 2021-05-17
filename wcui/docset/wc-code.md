<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>

## WC-CODE 代码块
用于友好的显示代码模块的极轻量的组件。内置对`html、css、js(ts)、md`的语法高亮(只是简单的处理,支持并不完整)。

### 基础用法

```html
<wc-code lang="js">
  function foo(name = 'world') {
    console.log('hello ' + name)
  }
</wc-code>

<!-- 或者用code属性传入(如果是html文本, 墙裂建议使用设置属性的形式传入) -->
<wc-code code="
  function foo(name = 'world') {
    console.log('hello ' + name)
  }
" lang="js"></wc-code>
```

```js
function foo(name = 'world') {
  console.log('hello ' + name)
}
```

### 夜间模式
> 只需要简单的加个`dark属性`, 便可将主题切为夜间模式。

<wc-code lang="js" dark>
function foo(name = 'world') {
  console.log('hello ' + name)
}
</wc-code>