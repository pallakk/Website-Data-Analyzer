const sensitiveKeywords = ['health', 'medical', 'condition', 'prescription', 'insurance', 'fitness', 'mental health'];

function checkForSensitiveData() {
  let bodyText = document.body.innerText.toLowerCase();
  for (let keyword of sensitiveKeywords) {
    if (bodyText.includes(keyword)) {
      return true; // Sensitive health data detected
    }
  }
  return false;
}

if (checkForSensitiveData()) {
  chrome.runtime.sendMessage({ action: 'foundSensitiveData', url: window.location.href });
}
