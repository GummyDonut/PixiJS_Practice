// hot reloading
// https://www.npmjs.com/package/electron-reloader
try {
	require('electron-reloader')(module);
} catch {}

/**
 * This is the starter code to load the web page app
 * Coming from this tutorial https://www.electronjs.org/docs/latest/tutorial/quick-start
 */
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
    // win.webContents.openDevTools()
}

// call when electron is ready open the browser window.
app.whenReady().then(() => {
    createWindow()

    // Mac OS opening
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// when all windows close
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})