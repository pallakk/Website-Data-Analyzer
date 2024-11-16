chrome.storage.local.get('detectedHealthData', (data) => {
    if (data.detectedHealthData) {
      document.getElementById('status').innerText = `Sensitive health data detected on: ${data.detectedHealthData}`;
    } else {
      document.getElementById('status').innerText = "No sensitive health data detected.";
    }
  });
  
  document.getElementById('checkButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: checkForSensitiveData
        });
    });
  });

  