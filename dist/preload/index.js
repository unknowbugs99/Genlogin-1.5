var e=require("electron");e.contextBridge.exposeInMainWorld("ipcRenderer",{invoke:e.ipcRenderer.invoke.bind(e.ipcRenderer),on:e.ipcRenderer.on.bind(e.ipcRenderer),removeAllListeners:e.ipcRenderer.removeAllListeners.bind(e.ipcRenderer)});
