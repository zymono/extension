// chrome.runtime.onInstalled.addListener(function() {
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       chrome.declarativeContent.onPageChanged.addRules([{
//         conditions: [new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: { hostEquals: 'zymono.com' }
//         })
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()]
//       }]);
//     });
//   });
  
//   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action == "checkExtensionEnabled") {
//       sendResponse({ enabled: true });
//     }
//   });
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   var tab = tabs[0];
//   var tabUrl = tab.url;
//   var extensionId = chrome.runtime.id;
//   var message = {
//     action: "checkExtensionEnabled",
//     tabUrl: tabUrl,
//     extensionId: extensionId
//   };
//   tab.postMessage(message);
// });
