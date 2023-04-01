// chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
//   const currentUrl = tabs[0].url;
//   // alert(currentUrl)
//   chrome.scripting.executeScript({
//     target: { tabId: tabs[0].id },
//     args: [currentUrl],
//     func: (args) => {
//       // const url = args[0].url;
//     if (document.getElementById('blockZymono')) {
//       document.querySelector('html').innerHTML = "ZYMONO REPORT HAS BEEN BLOCKED BY THIS WEBSITE'S ADMIN"
//     } else {
//       if (document.querySelector('img')) {
//           const img = document.querySelector('img').src
//           window.open(`https://report.zymono.com/&n=${(document.getSelection().toString() || "")}&p=${window.location}&img=${img}&usp=extension`);
//           console.log('Getting Report Link')
//       } else {
//           const img = ''
//           window.open(`https://report.zymono.com/&n=${(document.getSelection().toString() || "")}&p=${window.location}&img=${img}&usp=extension`);
//           console.log('Getting Report Link')
//       }
//     }
//     }
//   });
// });
// setTimeout(() => {
//   document.querySelector("#msg").innerText = "AN ERROR OCCURRED";
//   document.querySelector("#msg").style.color = "red";
// }, 500);
var settings = document.getElementById('settings')

document.addEventListener('DOMContentLoaded', function() {
  var message = document.getElementById('message');
  var btn = document.getElementById('myButton')
  var api = document.getElementById('api')
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    if (tab.url.indexOf('chrome://') == 0) {
      message.textContent = "Cannot audit a report on chrome:// pages.";
      btn.remove()
      api.remove()
      settings.disabled = true
    }
  });
});

function open() {
  chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
  const currentUrl = tabs[0].url;
  // alert(currentUrl)
  var message = document.getElementById('message');
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    args: [currentUrl],
    func: (args) => {
      // const url = args[0].url;
    if (document.getElementById('blockZymono')) {
      document.body.innerHTML = "This website's owner has request to block Zymono.";
    } else {
      if (document.querySelector('img')) {
          const img = document.querySelector('img').src
          window.open(`https://report.zymono.com/&n=${(document.getSelection().toString() || "")}&p=${window.location}&img=${img}&usp=extension`);
          console.log('Getting Report Link')
      } else {
          const img = ''
          window.open(`https://report.zymono.com/&n=${(document.getSelection().toString() || "")}&p=${window.location}&img=${img}&usp=extension`);
          console.log('Getting Report Link')
      }
    }
    }
  });
});
}

var imgURL = ''
var locURL = ''
var selec = ''
// chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
//   const currentUrl = tabs[0].url;
//   // alert(currentUrl)
//   // chrome.scripting.executeScript({
//   //   target: { tabId: tabs[0].id },
//   //   args: [currentUrl],
//   //   func: (args) => {
//       imgURL = document.querySelector('img').src
//       locURL = tabs[0].url
//       console.log(locURL)
//     });
//   });
// });

chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
  const currentUrl = tabs[0].url;
  locURL = currentUrl
  selec = document.getSelection().toString() || ""
  // alert(currentUrl)
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: () => {
      const firstImg = document.querySelector('img');
      if (firstImg) {
        imgURL = firstImg.src;
      }
    },
    args: [currentUrl]
  })
})

document.getElementById('myButton').addEventListener('click', open)
settings.addEventListener('click', info)

function getInfo() {
  document.querySelector('.devtools-header')

  // const ul = document.createElement('ul')
  // ul.id = 'info'

  // const li = document.createElement('li')
  // li.innerHTML = `URL: ${locURL}`
  // ul.append(li)
  const li = document.createElement('p')
  li.innerHTML = `URL: ${locURL}`
  li.id = 'info'
  // const li1 = document.createElement('li')
  // li1.innerHTML = `IMG: ${imgURL}`
  // ul.append(li1)

  // const li2 = document.createElement('li')
  // li2.innerHTML = `Selected Text: ${selec}`
  // ul.append(li2)

  document.getElementById('header').append(li)
  settings.addEventListener('click', removeInfo)


}

function info() {
  try {
    document.getElementById('info').remove()
  } catch {
    getInfo()
  }
}