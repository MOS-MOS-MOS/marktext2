import * as actions from '../actions/paragraph'

export default function (keybindings) {
  return {
    id: 'paragraphMenuEntry',
    label: '&パラグラフ',
    submenu: [{
      id: 'heading1MenuItem',
      label: '見出し1',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-1'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'heading 1')
      }
    }, {
      id: 'heading2MenuItem',
      label: '見出し2',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-2'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'heading 2')
      }
    }, {
      id: 'heading3MenuItem',
      label: '見出し3',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-3'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'heading 3')
      }
    }, {
      id: 'heading4MenuItem',
      label: '見出し4',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-4'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'heading 4')
      }
    }, {
      id: 'heading5MenuItem',
      label: '見出し5',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-5'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'heading 5')
      }
    }, {
      id: 'heading6MenuItem',
      label: '見出し6',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-6'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'heading 6')
      }
    }, {
      type: 'separator'
    }, {
      id: 'upgradeHeadingMenuItem',
      label: 'プロモート見出し',
      accelerator: keybindings.getAccelerator('paragraph.upgrade-heading'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'upgrade heading')
      }
    }, {
      id: 'degradeHeadingMenuItem',
      label: 'ヘッディングの削除',
      accelerator: keybindings.getAccelerator('paragraph.degrade-heading'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'degrade heading')
      }
    }, {
      type: 'separator'
    }, {
      id: 'tableMenuItem',
      label: 'テーブル',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.table'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'table')
      }
    }, {
      id: 'codeFencesMenuItem',
      label: 'コードフェンス',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.code-fence'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'pre')
      }
    }, {
      id: 'quoteBlockMenuItem',
      label: '引用ブロック',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.quote-block'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'blockquote')
      }
    }, {
      id: 'mathBlockMenuItem',
      label: '算数ブロック',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.math-formula'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'mathblock')
      }
    }, {
      id: 'htmlBlockMenuItem',
      label: 'HTMLブロック',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.html-block'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'html')
      }
    }, {
      type: 'separator'
    }, {
      id: 'orderListMenuItem',
      label: '順序付きリスト',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.order-list'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'ol-order')
      }
    }, {
      id: 'bulletListMenuItem',
      label: '箇条書きリスト',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.bullet-list'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'ul-bullet')
      }
    }, {
      id: 'taskListMenuItem',
      label: 'チェックボックス付きリスト',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.task-list'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'ul-task')
      }
    }, {
      type: 'separator'
    }, {
      id: 'looseListItemMenuItem',
      label: 'ルーズリスト項目',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.loose-list-item'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'loose-list-item')
      }
    }, {
      type: 'separator'
    }, {
      id: 'paragraphMenuItem',
      label: '文章',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.paragraph'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'paragraph')
      }
    }, {
      id: 'horizontalLineMenuItem',
      label: '水平線',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.horizontal-line'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'hr')
      }
    }, {
      id: 'frontMatterMenuItem',
      label: 'フロントマター',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.front-matter'),
      click (menuItem, browserWindow) {
        actions.paragraph(browserWindow, 'front-matter')
      }
    }]
  }
}
