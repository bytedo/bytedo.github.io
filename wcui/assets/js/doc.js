/**
 *
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/01/29 14:12:03
 */

import '//unpkg.yutent.top/anot/dist/anot.js'
import fetch from '//unpkg.yutent.top/@bytedo/fetch/dist/next.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/color/index.js'
// import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/form/index.js'
// import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/markd/index.js'
import '//dist.bytedo.org/wcui/dist/form/index.js'
import '//dist.bytedo.org/wcui/dist/markd/index.js'

// 支持对中文的base64编码
function base64(str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

function base64decode(str) {
  return decodeURIComponent(escape(window.atob(str)))
}

window.base64 = base64

Anot({
  $id: 'doc',
  state: {
    id: '5pu05paw5pel5b+X',
    base: ['更新日志', '安装', '配色', '图标'].map(name => ({
      id: base64(name),
      name
    })),
    formWC: [
      'WC-BUTTON (按钮)',
      'WC-LINK (超连接)',
      'WC-INPUT (文本框)',
      'WC-NUMBER (数字文本框)',
      'WC-TEXTAREA (文本域)',
      'WC-SELECT (选择框)',
      'WC-SWITCH (开关)',
      'WC-RADIO (单选框)',
      'WC-CHECKBOX (复选框)',
      'WC-STAR (评分条)',
      'WC-SLIDER (滑块)',
      'WC-COLOR (取色器)'
    ].map(name => ({
      id: base64(name),
      name
    })),
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
