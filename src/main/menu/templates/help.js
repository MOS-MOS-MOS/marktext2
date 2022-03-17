import path from 'path'
import { shell } from 'electron'
import { isFile } from 'common/filesystem'
import * as actions from '../actions/help'
import { checkUpdates } from '../actions/marktext'

/// Check whether the package is updatable at runtime.
const isUpdatable = () => {
  // TODO: If not updatable, allow to check whether there is a new version available.

  const resFile = isFile(path.join(process.resourcesPath, 'app-update.yml'))
  if (!resFile) {
    // No update resource file available.
    return false
  } else if (process.env.APPIMAGE) {
    // We are running as AppImage.
    return true
  } else if (process.platform === 'win32' && isFile(path.join(process.resourcesPath, 'md.ico'))) {
    // Windows is a little but tricky. The update resource file is always available and
    // there is no way to check the target type at runtime (electron-builder#4119).
    // As workaround we check whether "md.ico" exists that is only included in the setup.
    return true
  }

  // Otherwise assume that we cannot perform an auto update (standalone binary, archives,
  // packed for package manager).
  return false
}

export default function () {
  const helpMenu = {
    label: '&ヘルプ',
    role: 'help',
    submenu: [{
      label: 'クイックスタート',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/docs/README.md')
      }
    }, {
      label: 'マークダウンリファレンス',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/docs/MARKDOWN_SYNTAX.md')
      }
    }, {
      label: '更新履歴',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/.github/CHANGELOG.md')
      }
    }, {
      type: 'separator'
    }, {
      label: 'OpenCollectiveで寄付をする',
      click (item, win) {
        shell.openExternal('https://opencollective.com/marktext')
      }
    }, {
      label: 'Twitterでのフィードバック',
      click (item, win) {
        actions.showTweetDialog(win, 'twitter')
      }
    }, {
      label: '問題の報告または機能のリクエスト',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/issues')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Webサイト（英語）',
      click () {
        shell.openExternal('https://marktext.app')
      }
    }, {
      label: 'GitHubで見る',
      click () {
        shell.openExternal('https://github.com/marktext/marktext')
      }
    }, {
      label: 'Githubでフォローする',
      click () {
        shell.openExternal('https://github.com/Jocs')
      }
    }, {
      label: 'Twitterでフォローする',
      click () {
        shell.openExternal('https://twitter.com/marktextapp')
      }
    }, {
      type: 'separator'
    }, {
      label: 'ライセンス...',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/LICENSE')
      }
    }]
  }

  if (isUpdatable()) {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: 'Check for updates...',
      click (menuItem, browserWindow) {
        checkUpdates(browserWindow)
      }
    })
  }

  if (process.platform !== 'darwin') {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: 'MarkTextについて',
      click (menuItem, browserWindow) {
        actions.showAboutDialog(browserWindow)
      }
    })
  }
  return helpMenu
}
