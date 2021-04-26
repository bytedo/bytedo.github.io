### Progress 进度条
> 用于展示操作进度，告知用户当前状态和预期。


### 基础用法
<style>.flex,.flex-free { display:flex;align-items:center } .flex > *,.flex-free > *{margin:0 16px}.flex > *{flex:1}.w80 {width:80px;}.w160 {width:160px;}.wh80 {width:80px;height:80px}.wh120 {width:120px;height:120px}</style>

```html
<wc-progress value="10"></wc-progress>
<wc-progress value="30" type="circle"></wc-progress>
<wc-progress value="60" type="dashboard"></wc-progress>
```

<section class="flex-free">
  <wc-progress class="w160" value="10"></wc-progress>
  <wc-progress value="30" type="circle"></wc-progress>
  <wc-progress value="60" type="dashboard"></wc-progress>
</section>



### 类型
进度条有3种类型:
1. `线形进度条`, type=line, 此为默认类型, 可不写type值。
2. `圆形进度条`, type=circle, 从顶部开始, 顺时针一圈为100%。
3. `仪表盘进度条`, type=dashboard, 从左下角开始, 顺时针270˚为 100%。


### 自定义颜色
进度默认`背景色`为浅灰色(`#f2f5fc`); 默认`前景色`为藏青色(`#48c9b0`)。
- `default-color`, 为背景色;
- `colors`, 为前景色, 可设置多个, 用`,`分隔, 会自动按比例使用相当的颜色值;

```html
<wc-progress value="10" default-color="#f90" colors="black"></wc-progress>
<wc-progress value="45" colors="red, green, blue"></wc-progress>
<wc-progress value="60" colors="green, red"></wc-progress>

<wc-progress type="circle" value="10" colors="red, green, blue"></wc-progress>
<wc-progress type="circle" value="45" colors="red, green, blue"></wc-progress>
<wc-progress type="circle" value="80" colors="red, green, blue"></wc-progress>
```

<section class="flex">
  <wc-progress value="10" default-color="#f90" colors="black"></wc-progress>
  <wc-progress value="45" colors="red, green, blue"></wc-progress>
  <wc-progress value="60" colors="green, red"></wc-progress>
</section>

<section class="flex-free">
  <wc-progress type="circle" value="10" colors="red, green, blue"></wc-progress>
  <wc-progress type="circle" value="45" colors="red, green, blue"></wc-progress>
  <wc-progress type="circle" value="80" colors="red, green, blue"></wc-progress>
</section>


### 显示文字
```html
<wc-progress value="15" show-text></wc-progress>
<wc-progress type="circle" value="45" show-text></wc-progress>
<wc-progress type="dashboard" value="60" show-text></wc-progress>
```

<section class="flex-free">
  <wc-progress class="w160" value="15" show-text></wc-progress>
  <wc-progress type="circle" value="45" show-text></wc-progress>
  <wc-progress type="dashboard" value="60" show-text></wc-progress>
</section>


### 尺寸
1. **外观大小**
  `线形进度条`默认尺寸为, 宽100%, 高10px; `圆形、仪表盘进度条`, 默认尺寸均为 160px;
  可根据需要, 直接通过css设置`width`和`height`, 即可修改进度度的尺寸。
2. 线条粗细, 可通过`line-size`属性来设置, 单位为像素。
3. 字体大小, 可通过`font-size`属性来设置, 单位为像素。


```html
<wc-progress class="w80" value="50" show-text></wc-progress>
<wc-progress class="wh80" type="circle" line-size="5" font-size="16" value="45" show-text></wc-progress>
<wc-progress class="wh120" type="dashboard" font-size="22" value="60" show-text></wc-progress>
```


<section class="flex-free">
  <wc-progress class="w80" value="50" show-text></wc-progress>
  <wc-progress class="wh80" type="circle" line-size="5" font-size="16" value="45" show-text></wc-progress>
  <wc-progress class="wh120" type="dashboard" font-size="22" value="60" show-text></wc-progress>
</section>



### 完整APIs

|  属性  |  值类型  |   默认值   |     描述   |
|  :-:  |   :-:   |   :-:   |     -   |
|  type  |  String  |  无   |   复选框类型, 仅能决定颜色, 无额外作用, 可选值有: `circle, dashboard`   |
|  default-color  |   String  |  #f2f5fc   |  进度条的默认背景色, 可以以十六进制颜色值,或rgb、rgba颜色值 |
|  colors  |   String  |   #48c9b0   |  进度条的默认前景色, 可以有多个值, 用`,`分隔开, 会自动按比例显示相应的顺序颜色 |
|  line-size  |   Number  |  10   |  线条的粗细值, 单位像素, 1 ~ ∞  |
|  font-size  |   Number  |  无   |  字体大小, 单位像素  |
|  value  |   Number  |  无   |  进度条的百分比值, 0~100  |
|  show-text  |   无  |  无   |  是否显示百分比数值 |