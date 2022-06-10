const {remote} = require('electron');

var rightTemplate = [
    {
        label:"剪切",
        accelerator:'ctrl+x',
    },
    {
        label:"复制",
        accelerator:'ctrl+c',
    },
    {
        label:"粘贴",
        accelerator:'ctrl+v',
    }
]

var m = remote.Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    m.popup({window:remote.getCurrentWindow()});
})