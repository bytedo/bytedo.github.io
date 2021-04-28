/**
 *
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/01/29 14:12:03
 */

import '//unpkg.yutent.top/anot/dist/anot.js'
import fetch from '//unpkg.yutent.top/@bytedo/fetch/dist/next.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/color/index.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/form/index.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/markd/index.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/pager/index.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/progress/index.js'
// import '//dist.bytedo.org/wcui/dist/form/index.js'
// import '//dist.bytedo.org/wcui/dist/markd/index.js'
// import '//dist.bytedo.org/wcui/dist/pager/index.js'

function pad(name, prefix = 'wc-') {
  return prefix + name.toLowerCase().replace(/[^\w]/g, '')
}

Anot({
  $id: 'doc',
  state: {
    id: '5pu05paw5pel5b+X',
    base: [
      { id: 'update-logs', name: '更新日志' },
      { id: 'install', name: '安装' },
      { id: 'colors', name: '配色' },
      { id: 'icons', name: '图标' }
    ],
    formWC: [
      'Button (按钮)',
      'Link (超连接)',
      'Input (文本框)',
      'Passwd (密码框)',
      'Number (数字文本框)',
      'Textarea (文本域)',
      'Select (选择框)',
      'Switch (开关)',
      'Radio (单选框)',
      'Checkbox (复选框)',
      'Star (评分条)',
      'Slider (滑块)',
      'Color (取色器)'
    ].map(name => ({ id: pad(name), name })),
    dataWC: [
      'Progress (进度条)',
      'Table (表格)',
      'Tree (树形菜单)',
      'Pager (分页)',
      'SlideDown (下拉菜单)'
    ].map(name => ({ id: pad(name), name })),
    docset: ''
  },
  mounted() {
    var id = location.search.slice(1) || '5pu05paw5pel5b+X'

    this.id = id
    this.loadDoc(id)
  },
  methods: {
    loadDoc(id) {
      fetch(`/wcui/docset/${id}.md`)
        .then(r => r.text())
        .then(txt => {
          this.docset = txt
        })
        .catch(e => {
          this.docset = '<h1>你要浏览的文档, 被外星人吃了...</h1>'
        })
    },
    navigator(act) {
      this.$refs.detail.scrollTop = act === 0 ? 0 : Number.MAX_SAFE_INTEGER
    }
  }
})
