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

### 深色模式
> 只需要简单的加个`dark属性`, 便可将主题切为深色模式。

```html
<wc-code lang="js" dark>
  function foo(name = 'world') {
    console.log('hello ' + name)
  }
</wc-code>
```

<wc-code lang="js" dark>
function foo(name = 'world') {
  console.log('hello ' + name)
}
</wc-code>


### 语言属性lang
> 设置的语言, 组件会在标题栏中间显示, 不设置则不显示。
> 正确的语言设置, 可以让代码正确的着色(暂只支持`html、css、js(ts)、md`)。


### 特殊属性
+ `hide-copy`, 隐藏一键复制按钮, 默认是显示的。
+ `exec`, 显示一键运行代码的按钮(计划中的功能)。



### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  code  |  String  |   无   |   要渲染的代码文本   |
|  dark  |   无   |  无   |   深色模式  |
|  lang  |   String  |  无   |  语言设置, 可以让代码正确的着色(暂只支持`html、css、js(ts)、md`)  |
|  hide-copy  |  无  | 无   |  隐藏一键复制按钮, 默认是显示的 |
|  exec  |  无  | 无   |  显示一键运行代码的按钮(计划中的功能) |



### 事件
|  事件名  |  描述  |     回调参数   |   补充说明   |
|  :-:  |   -   |   -   |     -   |
|  @run  |  点击`运行`时触发  |  无  |   计划中的功能  |


