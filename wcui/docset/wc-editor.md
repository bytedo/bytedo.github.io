<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>

## Editor在线编辑器
轻量级的即见即所得的富文本编辑器。基于`div`的`contenteditable`开发。
麻雀虽小, 五脏俱全。

### 适应场景
1. 对代码体积有要求的_(本编辑器压缩版`15KB`(Gzip后`6KB`), 相对熟知的其他富文本编辑器近`1MB`的来说,确实是非常迷你了)_。
2. 对文本排版没有太强的依赖,即要求不高的_(本编辑器不支持对插入的表格、图片等二次编辑)_。
3. 对编辑扩展功能没有需求的_(本编辑器不支持插件扩展)_。



### 基础用法

```html
<wc-editor></wc-editor>
```

<wc-editor></wc-editor>


### toolbar属性
> 部分场景, 可能不需要那么多的工具显示, 这时候便可通过toolbar属性来配置要显示的工具图标。
> 可从下面的列表中选择任意数量的工具组合, 多个值用`半角逗号`分隔
>> + `font` -> 字号设置
>> + `color` -> 字体颜色设置
>> + `bold` -> 字体加粗
>> + `italic` -> 字体斜体
>> + `under` -> 下划线
>> + `delete` -> 删除线
>> + `ordered` -> 有序列表
>> + `unordered` -> 无序列表
>> + `left` -> 左对齐
>> + `center` -> 居中对齐
>> + `right` -> 右对齐
>> + `link` -> 插入链接
>> + `image` -> 插入图片


```html
<wc-editor toolbar="font,bold,italic,delete"></wc-editor>
<wc-editor toolbar="ordered,unordered"></wc-editor>
<wc-editor toolbar="bold,italic,image"></wc-editor>
```

<wc-editor toolbar="font,bold,italic,delete"></wc-editor>
---
<wc-editor toolbar="ordered,unordered"></wc-editor>
---
<wc-editor toolbar="bold,italic,image"></wc-editor>




### 一些隐藏的特性

+ 自动简化`word`文档粘贴而来的冗余结构。
+ 复制带样式的内容时, 会自动清理无用属性和节点。
+ 支持截图粘贴上传(需要配置上传回调)。


### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  readonly  |   Boolean  | false   |  输入框的只读状态, 为true时, 无法输入, 也无法获得焦点  |
|  disbaled  |   Boolean  | false   |  输入框的禁用状态, 为true时, 无法输入, 也无法获得焦点  |
|  toolbar  |   String  |  无   |   配置编辑器工具栏图标   |
|  value  |   String  |   无   |  编辑器的值  |


### 事件
|  事件名  |  描述  |     回调参数   |   补充说明   |
|  :-:  |   -   |   -   |     -   |
|  @upload  |  选择文件上传时、或粘贴板有文件时触发  |  event: { detail: { file: `<File>`, send: `<Function>`} }  |  读取`event.detail.file`对象, 自行上传完成后, 将`url`通过`event.detail.send()`传回编辑器即可。  |