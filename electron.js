// Десктоп-обёртка (Windows / macOS / Linux): npm i && npm run desktop
const { app, BrowserWindow } = require('electron');
const path = require('path');
function create() {
  const win = new BrowserWindow({
    width: 1380, height: 860, minWidth: 420, minHeight: 600,
    backgroundColor: '#050507', title: 'Димарик Smokes — CS2',
    autoHideMenuBar: true, icon: path.join(__dirname, 'icons/icon-512.png'),
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  win.loadFile('index.html');
}
app.whenReady().then(create);
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());
app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && create());
