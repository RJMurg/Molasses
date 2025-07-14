function forceDark() {
  // Add the class 'dark' to the body element
  document.body.classList.add('dark-mode');

  // Replace the 'light-mode' class with 'dark-mode' on the body element
  document.body.classList.remove('light-mode');
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && (tab.url.includes('mystudentlife') || tab.url.includes('societies') || tab.url.includes('sport'))) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: forceDark
    }).catch(err => {
      console.error('Failed to execute script:', err.message);
    });
  }
});
