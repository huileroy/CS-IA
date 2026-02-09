// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
        updateStatus('✓ Service Worker is active');
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
        updateStatus('✗ Service Worker registration failed');
      });
  });
} else {
  console.log('Service Workers are not supported');
  updateStatus('⚠ Service Workers not supported in this browser');
}

// Handle install prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.classList.remove('hidden');
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
    installBtn.classList.add('hidden');
  }
});

window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  updateStatus('✓ App installed successfully!');
});

// Update status display
function updateStatus(message) {
  const statusElement = document.getElementById('status');
  if (statusElement) {
    statusElement.textContent = message;
  }
}

// Check if running as standalone (installed app)
function checkStandalone() {
  const isStandalone = window.navigator.standalone ||
    window.matchMedia('(display-mode: standalone)').matches;
  if (isStandalone) {
    updateStatus('✓ Running as installed app');
  }
}

checkStandalone();
