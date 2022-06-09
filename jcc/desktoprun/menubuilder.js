const { MenuItem, BrowserWindow } = require('electron')
// const pkg = require('../package.json')

/**
* 构建菜单元素
* @param {func} checkUpdate 检查更新回调,func(item,win)
* @returns {object}
*/
module.exports = function (checkUpdate) {
  return {
    version: new MenuItem({
      label: `贾贾云课堂`
    }),
    update: new MenuItem({
      label: '检查更新',
      click: function (item, win) {
        
      }
    }),
    refresh: new MenuItem({
      label: '刷新',
      click: function () {
        Array.prototype.forEach.call(BrowserWindow.getAllWindows() || [], function (win) {
          win.webContents.session.clearCache(() => {
            win.webContents.session.clearHostResolverCache(() => {
              win.reload()
            })
          })
        })
      }
    }),
    show: new MenuItem({
      label: '显示',
      click: function (item, win) {
        Array.prototype.forEach.call(BrowserWindow.getAllWindows() || [], function (win) {
          win.show()
        })
      }
    }),
    hidden: new MenuItem({
      label: '隐藏',
      click: function (item, win) {
        Array.prototype.forEach.call(BrowserWindow.getAllWindows() || [], function (win) {
          win.hide()
        })
      }
    }),
    quit: new MenuItem({
      label: '退出',
      role: 'quit'
    })
  }
}
