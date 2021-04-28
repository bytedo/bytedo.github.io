## WC-ICON 图标
精心绘制了`84`个常用小图标。


<style>
.flex,.flex-free { display:flex;align-items:center;flex-wrap:wrap }
.flex > *,.flex-free > *{margin:0 16px}
.flex-free > div {display:flex;flex-direction:column;align-items:center;width:96px;height:72px;--size:28px;margin:16px;padding:12px 4px;border:1px solid var(--color-plain-1);border-radius:3px}
.flex-free > div:hover {box-shadow:0 0 10px rgba(0,0,0,.1)} 
.flex-free > div h3 {margin:auto;line-height:1.5;font-size:12px;font-weight:normal} 
.flex > *{flex:1}
</style>

### 使用

```html
<wc-icon is="home"></wc-icon>
```

<section class="flex-free">
  <wc-icon is="home"></wc-icon>
</section>

### 尺寸
`size="large"`, `size="medium"`, `size="small"`, `size="mini"`, 连同默认尺寸在内, 5种预设规格。
如果需要其他的尺寸的图片, 可自行通过css设置`--size: #{你想要的大小}`即可。 

<section class="flex-free" style="color:var(--color-green-1)">
  <wc-icon size="large" is="android"></wc-icon>
  <wc-icon size="medium" is="android"></wc-icon>
  <wc-icon is="android"></wc-icon>
  <wc-icon size="small" is="android"></wc-icon>
  <wc-icon size="mini" is="android"></wc-icon>
</section>


### 全部图标列表

<section class="flex-free">
  <div><wc-icon is="android"></wc-icon><h3>android</h3></div>
  <div><wc-icon is="app"></wc-icon><h3>app</h3></div>
  <div><wc-icon is="apple"></wc-icon><h3>apple</h3></div>
  <div><wc-icon is="at"></wc-icon><h3>at</h3></div>
  <div><wc-icon is="attach"></wc-icon><h3>attach</h3></div>
  <div><wc-icon is="backward"></wc-icon><h3>backward</h3></div>
  <div><wc-icon is="bell"></wc-icon><h3>bell</h3></div>
  <div><wc-icon is="calendar"></wc-icon><h3>calendar</h3></div>
  <div><wc-icon is="camera"></wc-icon><h3>camera</h3></div>
  <div><wc-icon is="chart"></wc-icon><h3>chart</h3></div>
  <div><wc-icon is="checkbox-on"></wc-icon><h3>checkbox-on</h3></div>
  <div><wc-icon is="checkbox-off"></wc-icon><h3>checkbox-off</h3></div>
  <div><wc-icon is="client"></wc-icon><h3>client</h3></div>
  <div><wc-icon is="close"></wc-icon><h3>close</h3></div>
  <div><wc-icon is="color"></wc-icon><h3>color</h3></div>
  <div><wc-icon is="dbl-left"></wc-icon><h3>dbl-left</h3></div>
  <div><wc-icon is="dbl-right"></wc-icon><h3>dbl-right</h3></div>
  <div><wc-icon is="deny"></wc-icon><h3>deny</h3></div>
  <div><wc-icon is="doc"></wc-icon><h3>doc</h3></div>
  <div><wc-icon is="download"></wc-icon><h3>download</h3></div>
  <div><wc-icon is="edit"></wc-icon><h3>edit</h3></div>
  <div><wc-icon is="eye"></wc-icon><h3>eye</h3></div>
  <div><wc-icon is="eye-off"></wc-icon><h3>eye-off</h3></div>
  <div><wc-icon is="face"></wc-icon><h3>face</h3></div>
  <div><wc-icon is="finger-print"></wc-icon><h3>finger-print</h3></div>
  <div><wc-icon is="fire"></wc-icon><h3>fire</h3></div>
  <div><wc-icon is="first"></wc-icon><h3>first</h3></div>
  <div><wc-icon is="floppy"></wc-icon><h3>floppy</h3></div>
  <div><wc-icon is="fly"></wc-icon><h3>fly</h3></div>
  <div><wc-icon is="folder-open"></wc-icon><h3>folder-open</h3></div>
  <div><wc-icon is="folder-close"></wc-icon><h3>folder-close</h3></div>
  <div><wc-icon is="get"></wc-icon><h3>get</h3></div>
  <div><wc-icon is="happy"></wc-icon><h3>happy</h3></div>
  <div><wc-icon is="headset"></wc-icon><h3>headset</h3></div>
  <div><wc-icon is="home"></wc-icon><h3>home</h3></div>
  <div><wc-icon is="image"></wc-icon><h3>image</h3></div>
  <div><wc-icon is="info"></wc-icon><h3>info</h3></div>
  <div><wc-icon is="key"></wc-icon><h3>key</h3></div>
  <div><wc-icon is="layout"></wc-icon><h3>layout</h3></div>
  <div><wc-icon is="left"></wc-icon><h3>left</h3></div>
  <div><wc-icon is="linux"></wc-icon><h3>linux</h3></div>
  <div><wc-icon is="live"></wc-icon><h3>live</h3></div>
  <div><wc-icon is="load"></wc-icon><h3>load</h3></div>
  <div><wc-icon is="loading"></wc-icon><h3>loading</h3></div>
  <div><wc-icon is="location"></wc-icon><h3>location</h3></div>
  <div><wc-icon is="lock"></wc-icon><h3>lock</h3></div>
  <div><wc-icon is="mail"></wc-icon><h3>mail</h3></div>
  <div><wc-icon is="menu"></wc-icon><h3>menu</h3></div>
  <div><wc-icon is="menu-dot"></wc-icon><h3>menu-dot</h3></div>
  <div><wc-icon is="mute"></wc-icon><h3>mute</h3></div>
  <div><wc-icon is="option"></wc-icon><h3>option</h3></div>
  <div><wc-icon is="phone"></wc-icon><h3>phone</h3></div>
  <div><wc-icon is="pie"></wc-icon><h3>pie</h3></div>
  <div><wc-icon is="pin"></wc-icon><h3>pin</h3></div>
  <div><wc-icon is="plus"></wc-icon><h3>plus</h3></div>
  <div><wc-icon is="post"></wc-icon><h3>post</h3></div>
  <div><wc-icon is="qr"></wc-icon><h3>qr</h3></div>
  <div><wc-icon is="quote"></wc-icon><h3>quote</h3></div>
  <div><wc-icon is="radio-on"></wc-icon><h3>radio-on</h3></div>
  <div><wc-icon is="radio-off"></wc-icon><h3>radio-off</h3></div>
  <div><wc-icon is="right"></wc-icon><h3>right</h3></div>
  <div><wc-icon is="sad"></wc-icon><h3>sad</h3></div>
  <div><wc-icon is="search"></wc-icon><h3>search</h3></div>
  <div><wc-icon is="second"></wc-icon><h3>second</h3></div>
  <div><wc-icon is="setting"></wc-icon><h3>setting</h3></div>
  <div><wc-icon is="share"></wc-icon><h3>share</h3></div>
  <div><wc-icon is="star"></wc-icon><h3>star</h3></div>
  <div><wc-icon is="star-half"></wc-icon><h3>star-half</h3></div>
  <div><wc-icon is="star-full"></wc-icon><h3>star-full</h3></div>
  <div><wc-icon is="switch"></wc-icon><h3>switch</h3></div>
  <div><wc-icon is="tag"></wc-icon><h3>tag</h3></div>
  <div><wc-icon is="talk"></wc-icon><h3>talk</h3></div>
  <div><wc-icon is="third"></wc-icon><h3>third</h3></div>
  <div><wc-icon is="time"></wc-icon><h3>time</h3></div>
  <div><wc-icon is="track"></wc-icon><h3>track</h3></div>
  <div><wc-icon is="trash"></wc-icon><h3>trash</h3></div>
  <div><wc-icon is="trigon-down"></wc-icon><h3>trigon-down</h3></div>
  <div><wc-icon is="trigon-up"></wc-icon><h3>trigon-up</h3></div>
  <div><wc-icon is="unmute"></wc-icon><h3>unmute</h3></div>
  <div><wc-icon is="upload"></wc-icon><h3>upload</h3></div>
  <div><wc-icon is="user"></wc-icon><h3>user</h3></div>
  <div><wc-icon is="vip"></wc-icon><h3>vip</h3></div>
  <div><wc-icon is="warn"></wc-icon><h3>warn</h3></div>
  <div><wc-icon is="wallet"></wc-icon><h3>wallet</h3></div>
  <div><wc-icon is="windows"></wc-icon><h3>windows</h3></div>
</section>