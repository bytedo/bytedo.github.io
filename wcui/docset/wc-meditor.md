<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>

## MEditor在线编辑器
基于[wc-markd](?wc-markd)核心库的md编辑器。



### 基础用法

```html
<wc-meditor></wc-meditor>
```

<wc-meditor></wc-meditor>


### toolbar属性
> 部分场景, 可能不需要那么多的工具显示, 这时候便可通过toolbar属性来配置要显示的工具图标。
> 可从下面的列表中选择任意数量的工具组合, 多个值用`半角逗号`分隔
> 也可以设置为空值, 即不显示工具栏(功能依然存在, 只是无法通过工具栏快速插入)
> 不配置`preview`时, 无预览功能。 不设置`toolbar`属性时, 默认全部显示。
>> + `header` -> 插入标题,
>> + `quote` -> 引用文本,
>> + `bold` -> 粗体,
>> + `italic` -> 斜体,
>> + `through` -> 横线,
>> + `list` -> 无序列表,
>> + `order` -> 有序列表,
>> + `line` -> 分割线,
>> + `code` -> 行内代码,
>> + `codeblock` -> 插入代码块,
>> + `table` -> 插入表格,
>> + `link` -> 插入连接,
>> + `image` -> 上传图片,
>> + `attach` -> 上传附件,
>> + `fullscreen` -> 全屏编辑,
>> + `preview` -> 预览


```html
<wc-meditor toolbar="header,bold,italic,through"></wc-meditor>
<wc-meditor toolbar="code,codeblock"></wc-meditor>
<wc-meditor toolbar placeholder="支持完整的markdown语法"></wc-meditor>
```

<wc-meditor toolbar="header,bold,italic,through"></wc-meditor>
---
<wc-meditor toolbar="code,codeblock"></wc-meditor>
---
<wc-meditor toolbar="code,codeblock,preview"></wc-meditor>
---
<wc-meditor toolbar placeholder="支持完整的markdown语法"></wc-meditor>


### 一些隐藏的特性

+ `Tab键`, 默认为输入`2个空格`。
+ `Backspace键`, 回退键, 遇到成对的`引号、括号、反引号`时, 会成对的删除。
+ `引号、括号、反引号` 输入时, 会智能的自动成对。
+ 支持截图粘贴上传(需要配置上传回调)。


### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  readonly  |   Boolean  | false   |  输入框的只读状态, 为true时, 无法输入, 但仍能获得焦点  |
|  disbaled  |   Boolean  | false   |  输入框的禁用状态, 为true时, 无法输入, 也无法获得焦点 |
|  toolbar  |   String  |  无   |   配置编辑器工具栏图标   |
|  placeholder  |   String  |  无   |  原生属性, 占位字符, value为空时显示 |
|  preview  |   Boolean  |  无   |  控制是否显示预览, 默认窗口大于768时显示。 |
|  value  |   String  |   无   |  编辑器的值  |


### 事件
|  事件名  |  描述  |     回调参数   |   补充说明   |
|  :-:  |   -   |   -   |     -   |
|  @upload  |  选择文件上传时、或粘贴板有文件时触发  |  event: { detail: { file: `<File>`, send: `<Function>`} }  |  读取`event.detail.file`对象, 自行上传完成后, 将`url`通过`event.detail.send()`传回编辑器即可。  |