import { app, BrowserWindow } from 'electron';
import path from 'path';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';

import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))
console.log(__dirname)

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 480,
    autoHideMenuBar: true, // Remove a barra de menu
    resizable: false, // Impede o redimensionamento da janela
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Corrigir a forma de gerar o caminho para o index.html
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  console.log("Caminho final para index.html:", indexPath); // Para depuração

  //win.loadURL('http://localhost:5174/')

  win.loadFile(indexPath).catch((err) => {
    console.error('Erro ao carregar o index.html:', err);
  });


  // Exibir janela quando pronta
  win.once('ready-to-show', () => {
    win.show();
});

  // Configurar logs de atualização
  log.transports.file.level = 'info';
  autoUpdater.logger = log;

  // Iniciar verificações de atualização
  autoUpdater.checkForUpdatesAndNotify();
  
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Eventos do autoUpdater
autoUpdater.on('update-available', () => {
  log.info('Update disponível. Baixando...');
});

autoUpdater.on('update-downloaded', () => {
  log.info('Update baixado. Pronto para instalação.');
  autoUpdater.quitAndInstall(); // Reinicia e instala o update
});
