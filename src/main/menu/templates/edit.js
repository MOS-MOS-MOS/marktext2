import * as actions from '../actions/edit'
import { isOsx } from '../../config'

export default function (keybindings) {
  return {
    label: '&編集',
    submenu: [{
      label: '一つ戻る',
      accelerator: keybindings.getAccelerator('edit.undo'),
      click: (menuItem, browserWindow) => {
        actions.edit(browserWindow, 'undo')
      }
    }, {
      label: '一つ進む',
      accelerator: keybindings.getAccelerator('edit.redo'),
      click: (menuItem, browserWindow) => {
        actions.edit(browserWindow, 'redo')
      }
    }, {
      type: 'separator'
    }, {
      label: 'カット',
      accelerator: keybindings.getAccelerator('edit.cut'),
      click (menuItem, browserWindow) {
        actions.nativeCut(browserWindow)
      }
    }, {
      label: 'コピー',
      accelerator: keybindings.getAccelerator('edit.copy'),
      click (menuItem, browserWindow) {
        actions.nativeCopy(browserWindow)
      }
    }, {
      label: '貼り付け',
      accelerator: keybindings.getAccelerator('edit.paste'),
      click (menuItem, browserWindow) {
        actions.nativePaste(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: 'Markdownとしてコピーする',
      accelerator: keybindings.getAccelerator('edit.copy-as-markdown'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'copyAsMarkdown')
      }
    }, {
      label: 'HTMLとしてコピーする',
      accelerator: keybindings.getAccelerator('edit.copy-as-html'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'copyAsHtml')
      }
    }, {
      label: 'プレーンテキストとして貼り付け',
      accelerator: keybindings.getAccelerator('edit.paste-as-plaintext'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'pasteAsPlainText')
      }
    }, {
      type: 'separator'
    }, {
      label: '全て選択',
      accelerator: keybindings.getAccelerator('edit.select-all'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'selectAll')
      }
    }, {
      type: 'separator'
    }, {
      label: '複製',
      accelerator: keybindings.getAccelerator('edit.duplicate'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'duplicate')
      }
    }, {
      label: 'パラグラフの作成',
      accelerator: keybindings.getAccelerator('edit.create-paragraph'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'createParagraph')
      }
    }, {
      label: 'パラグラフの削除',
      accelerator: keybindings.getAccelerator('edit.delete-paragraph'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'deleteParagraph')
      }
    }, {
      type: 'separator'
    }, {
      label: '検索',
      accelerator: keybindings.getAccelerator('edit.find'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'find')
      }
    }, {
      label: '次を探す',
      accelerator: keybindings.getAccelerator('edit.find-next'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'findNext')
      }
    }, {
      label: '前ページを探す',
      accelerator: keybindings.getAccelerator('edit.find-previous'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'findPrev')
      }
    }, {
      label: '置換',
      accelerator: keybindings.getAccelerator('検索'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, '置換')
      }
    }, {
      type: 'separator'
    }, {
      label: 'フォルダを検索',
      accelerator: keybindings.getAccelerator('edit.find-in-folder'),
      click (menuItem, browserWindow) {
        actions.edit(browserWindow, 'findInFolder')
      }
    }, {
      type: 'separator'
    }, {
      label: 'スクリーンショット',
      id: 'screenshot',
      visible: isOsx,
      accelerator: keybindings.getAccelerator('edit.screenshot'),
      click (menuItem, browserWindow) {
        actions.screenshot(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      // TODO: Remove this menu entry and add it to the command palette (#1408).
      label: 'ライン終了',
      submenu: [{
        id: 'crlfLineEndingMenuEntry',
        label: 'キャリッジリターン＆ラインフィード（CRLF）',
        type: 'radio',
        click (menuItem, browserWindow) {
          actions.lineEnding(browserWindow, 'crlf')
        }
      }, {
        id: 'lfLineEndingMenuEntry',
        label: 'ラインフィード(LF)',
        type: 'radio',
        click (menuItem, browserWindow) {
          actions.lineEnding(browserWindow, 'lf')
        }
      }]
    }]
  }
}
