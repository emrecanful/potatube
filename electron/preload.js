const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send(channel, msg) {
      ipcRenderer.send(channel, msg);
    },
    on(channel, msg) {
        return ipcRenderer.on(channel, msg);
    }
  }
});

console.log("Preload", "Scripts are preloaded");