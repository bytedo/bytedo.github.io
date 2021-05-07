<style>
.flex,.flex-free { display:flex;align-items:center;margin-top:16px }
.flex > *,.flex-free > *{margin:0 16px}
.flex > *{flex:1}
</style>

## 下拉菜单
`wc-select`的简单版, 不支持多选、检索。不支持选项分组。
`注:`在下拉选项不多的场景才推荐使用。


### 基础用法

```html
<wc-dropdown value="1">
  <wc-option value="1">下拉选项1</wc-option>
  <wc-option value="2">下拉选项2</wc-option>
  <wc-option value="3">下拉选项3</wc-option>
</wc-dropdown>
```

<section class="flex-free">
  <wc-dropdown value="1">
    <wc-option value="1">下拉选项1</wc-option>
    <wc-option value="2">下拉选项2</wc-option>
    <wc-option value="3">下拉选项3</wc-option>
  </wc-dropdown>
</section>