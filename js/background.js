chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({"url": "font_list.html"});
});