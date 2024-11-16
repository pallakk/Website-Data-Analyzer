chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'foundSensitiveData') {
      chrome.storage.local.set({ detectedHealthData: message.url });
      chrome.action.setIcon({ path: 'icons/warning.png' });
    }
  });
  