/**
 *
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/01/29 14:12:03
 */

import '//unpkg.yutent.top/anot/dist/anot.js'
import fetch from '//unpkg.yutent.top/@bytedo/fetch/dist/next.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/index.js'
// import '//dist.bytedo.org/wcui/dist/index.js'

function pad(name, prefix = 'wc-') {
  return prefix + name.toLowerCase().split(' ')[0]
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
      { id: 'wc-button', name: '按钮' },
      { id: 'wc-link', name: '超连接' },
      { id: 'wc-input', name: '文本框' },
      { id: 'wc-passwd', name: '密码框' },
      { id: 'wc-number', name: '数字文本框' },
      { id: 'wc-textarea', name: '文本域' },
      { id: 'wc-select', name: '选择框' },
      { id: 'wc-switch', name: '开关' },
      { id: 'wc-radio', name: '单选框' },
      { id: 'wc-checkbox', name: '复选框' },
      { id: 'wc-star', name: '评分条' },
      { id: 'wc-slider', name: '滑块' },
      { id: 'wc-color', name: '取色器' }
    ],
    dataWC: [
      { id: 'wc-progress', name: '进度条' },
      { id: 'wc-table', name: '表格' },
      { id: 'wc-tree', name: '树形菜单' },
      { id: 'wc-pager', name: '分页' },
      { id: 'wc-dropdown', name: '下拉菜单' }
    ],
    otherWC: [
      { id: 'wc-layer', name: '弹层' },
      { id: 'wc-scroll', name: '滚动条' },
      { id: 'wc-code', name: '代码块' },
      { id: 'wc-markd', name: 'MD渲染组件' },
      { id: 'wc-meditor', name: 'MD编辑器' },
      { id: 'wc-editor', name: '富文本编辑器' },
      { id: 'wc-badge', name: '标记' }
    ],
    docset: ''
  },
  mounted() {
    var id = (
      decodeURIComponent(location.search).slice(1) || 'update-logs'
    ).replace('=', '')

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
    },
    printLog(ev) {
      console.log(ev)
    }
  }
})
