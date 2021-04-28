<style>
.flex,.flex-free { display:flex;align-items:center }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>


### WC-PAGER 分页组件
> 简单的分页组件。


### 基础用法


```html
<wc-pager total="100" pagesize="15"></wc-pager>
<wc-pager circle total="100" pagesize="15"></wc-pager>
```

<wc-pager total="100" pagesize="15"></wc-pager>





### 类型
分页组件, 只有2种类型, 圆角矩形、圆形。默认是 圆角矩形, 添加属性【`circle`】, 可切为圆形。


<wc-pager circle total="100" pagesize="15"></wc-pager>



### 预设主题颜色
`red`,`green`,`blue`,`orange`,`grey`,`dark`, `teal` 7种。默认为 `teal`, 可不写

```html
<wc-pager red></wc-pager>
<wc-pager green></wc-pager>
<wc-pager blue></wc-pager>
<wc-pager orange></wc-pager>
<wc-pager grey></wc-pager>
<wc-pager dark></wc-pager>

```

<wc-pager red total="50"></wc-pager>
<wc-pager green total="50"></wc-pager>
<wc-pager blue total="50"></wc-pager>
<wc-pager orange total="50"></wc-pager>
<wc-pager grey total="50"></wc-pager>
<wc-pager dark total="50"></wc-pager>


### 布局
布局可通过【`layout`】属性来设置。
可选值有: 
+ home  首页
+ prev   上一页
+ pages  页码组
+ next  下一页
+ end   末页
+ curr  当前页码(有包含在`pages`中)
+ info  分页信息
+ jump  页码直达

可选择一个或多个, 顺序自由, 多个值用半角逗号隔开。默认值为`layout="home, prev, pages, next, end"`。

```html
<wc-pager total="50"></wc-pager>
<wc-pager layout="prev,curr,next" total="50"></wc-pager>
<wc-pager layout="info,prev,curr,next" total="50"></wc-pager>
<wc-pager layout="info,prev,curr,next,jump" total="50"></wc-pager>
```

<wc-pager total="50"></wc-pager>
<wc-pager layout="prev,curr,next" total="50"></wc-pager>
<wc-pager layout="info,prev,curr,next" total="50"></wc-pager>
<wc-pager layout="info,prev,curr,next,jump" total="50"></wc-pager>





### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  layout  |  String  |  home, prev, pages, next, end   |   组件的功能模块  |
|  curr  |   Number  |  1   |  当前页码  |
|  total  |   Number  |   0   |  总条数(注意不是总页数) |
|  pagesize  |   Number  |   20   |  每页的数量  |


### 事件
|  事件名  |  描述  |     回调参数   |   补充说明   |
|  :-:  |   -   |   -   |     -   |
|  @page-change  |  页码改变时触发  |   event.detail  |   直接修改`curr/total/pagesize`等值时, 不会触发该事件, 只有手动点击切换页码时才会触发。  |
