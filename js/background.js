var storage = chrome.storage.sync;

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
    }else if(details.reason == "update"){
        //chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
    }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.function == "getDefaults") {
      storage.get({
      agency: '',
      username: '',
      password: '',
      dashboard: 'default'
      }, function(items) {
      	sendResponse({
      		agency: items['agency'],
      		username: items['username'],
      		password: items['password'],
      		dashboard: items['dashboard']
      	});
      });
      return true;
    } else if (request.function == "setOptions") {
      storage.set({
        'agency':request.agency,
        'username':request.username,
        'password':request.password,
        'dashboard':request.dashboard
      }, function() {
        sendResponse({ result: "complete" });
      });
      return true;
    }
  });