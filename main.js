// require app and browser window from electron
const {app, BrowserWindow} = require('electron');

// window specs
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    // target
    win.loadFile('src/index.html');
}

// create window
app.whenReady().then(createWindow);

// closes electron when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
})