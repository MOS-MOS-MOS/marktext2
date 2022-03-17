import * as contextMenu from './actions'

// NOTE: This are mutable fields that may change at runtime.

export const CUT = {
  label: 'カット',
  id: 'cutMenuItem', // not used yet!
  role: 'cut'
}

export const COPY = {
  label: 'コピー',
  id: 'copyMenuItem',
  role: 'copy'
}

export const PASTE = {
  label: 'ペースト',
  id: 'pasteMenuItem',
  role: 'paste'
}

export const COPY_AS_MARKDOWN = {
  label: 'Markdownとしてコピーする',
  id: 'copyAsMarkdownMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.copyAsMarkdown()
  }
}

export const COPY_AS_HTML = {
  label: 'HTMLとしてコピーする',
  id: 'copyAsHtmlMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.copyAsHtml()
  }
}

export const PASTE_AS_PLAIN_TEXT = {
  label: 'プレーンテキストとして貼り付け',
  id: 'pasteAsPlainTextMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.pasteAsPlainText()
  }
}

export const INSERT_BEFORE = {
  label: 'パラグラフの前に挿入',
  id: 'insertParagraphBeforeMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.insertParagraph('before')
  }
}

export const INSERT_AFTER = {
  label: '後に段落を挿入する',
  id: 'insertParagraphAfterMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.insertParagraph('after')
  }
}

export const SEPARATOR = {
  type: 'separator'
}
