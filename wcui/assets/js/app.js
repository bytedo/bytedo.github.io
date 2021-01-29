/**
 *
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/01/29 14:12:03
 */

import '//unpkg.yutent.top/anot/dist/anot.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/form/button.js'
import '//unpkg-dev.yutent.top/@bytedo/wcui/dist/code/index.js'

Anot({
  $id: 'app',
  state: {
    todo: ['todo list...  ']
  },
  mounted() {},
  methods: {
    todoAppend(ev) {
      this.todo.push(ev.detail)
      ev.target.value = ''
    }
  }
})
