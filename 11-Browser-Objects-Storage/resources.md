# ბრაუზერის ობიექტები და სტორიჯი - სასწავლო რესურსები

თითოეული თემისთვის მოცემულია ბმულები MDN Web Docs-ზე, W3Schools-ზე და JavaScript.info-ზე.

---

## ძირითადი მასალა

### 1. Window ობიექტი (Window Object)
გლობალური ობიექტი ბრაუზერში, innerWidth/innerHeight, open/close, alert/confirm/prompt, setTimeout/setInterval/clearInterval, scrollTo/scrollBy.

**MDN Web Docs:**
- [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [Window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)
- [Window.innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)
- [Window.open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)
- [Window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [Window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
- [Window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)
- [Window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)

**W3Schools:**
- [JavaScript Window](https://www.w3schools.com/js/js_window.asp)
- [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)
- [Window alert()](https://www.w3schools.com/jsref/met_win_alert.asp)
- [Window confirm()](https://www.w3schools.com/jsref/met_win_confirm.asp)
- [Window prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp)

**JavaScript.info:**
- [Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)

---

### 2. Navigator ობიექტი (Navigator Object)
ბრაუზერისა და სისტემის ინფორმაცია: userAgent, language, platform, onLine, cookieEnabled, geolocation, clipboard.

**MDN Web Docs:**
- [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
- [Navigator.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)
- [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)
- [Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)
- [Navigator.cookieEnabled](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

**W3Schools:**
- [JavaScript Navigator](https://www.w3schools.com/js/js_window_navigator.asp)
- [HTML Geolocation API](https://www.w3schools.com/html/html5_geolocation.asp)

**JavaScript.info:**
- [Browser environment, specs](https://javascript.info/browser-environment)

---

### 3. Screen ობიექტი (Screen Object)
ეკრანის ინფორმაცია: width, height, availWidth, availHeight, colorDepth, pixelDepth, devicePixelRatio.

**MDN Web Docs:**
- [Screen](https://developer.mozilla.org/en-US/docs/Web/API/Screen)
- [Screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen/width)
- [Screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen/height)
- [Screen.availWidth](https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth)
- [Screen.colorDepth](https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth)
- [Window.devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)

**W3Schools:**
- [JavaScript Screen](https://www.w3schools.com/js/js_window_screen.asp)

---

### 4. Location ობიექტი (Location Object)
URL-ის ნაწილები და ნავიგაცია: href, protocol, hostname, pathname, search, hash, assign(), replace(), reload().

**MDN Web Docs:**
- [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
- [Location.href](https://developer.mozilla.org/en-US/docs/Web/API/Location/href)
- [Location.assign()](https://developer.mozilla.org/en-US/docs/Web/API/Location/assign)
- [Location.replace()](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace)
- [Location.reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
- [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

**W3Schools:**
- [JavaScript Location](https://www.w3schools.com/js/js_window_location.asp)

**JavaScript.info:**
- [URL objects](https://javascript.info/url)

---

### 5. History ობიექტი (History Object)
ბრაუზერის ისტორიაზე წვდომა: back(), forward(), go(), pushState(), replaceState(), popstate მოვლენა.

**MDN Web Docs:**
- [History](https://developer.mozilla.org/en-US/docs/Web/API/History)
- [History.pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
- [History.replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)
- [History.back()](https://developer.mozilla.org/en-US/docs/Web/API/History/back)
- [PopStateEvent](https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent)
- [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

**W3Schools:**
- [JavaScript History](https://www.w3schools.com/js/js_window_history.asp)

---

### 6. localStorage
მონაცემების მუდმივი შენახვა ბრაუზერში: setItem(), getItem(), removeItem(), clear(), JSON.stringify/JSON.parse.

**MDN Web Docs:**
- [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
- [Storage.setItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
- [Storage.getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)
- [StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent)
- [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

**W3Schools:**
- [JavaScript localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
- [Web Storage API](https://www.w3schools.com/html/html5_webstorage.asp)

**JavaScript.info:**
- [LocalStorage, sessionStorage](https://javascript.info/localstorage)

---

### 7. sessionStorage
დროებითი მონაცემების შენახვა (ტაბის დახურვამდე): იგივე API რაც localStorage-ს, განსხვავებები ხანგრძლივობასა და არეალში.

**MDN Web Docs:**
- [Window.sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

**W3Schools:**
- [JavaScript sessionStorage](https://www.w3schools.com/jsref/prop_win_sessionstorage.asp)

**JavaScript.info:**
- [LocalStorage, sessionStorage](https://javascript.info/localstorage)

---

### 8. Cookies
მცირე მონაცემების შენახვა, რომელიც სერვერზე იგზავნება: document.cookie, expires, max-age, path, domain, secure, SameSite.

**MDN Web Docs:**
- [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
- [Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

**W3Schools:**
- [JavaScript Cookies](https://www.w3schools.com/js/js_cookies.asp)

**JavaScript.info:**
- [Cookies, document.cookie](https://javascript.info/cookie)

---

## დამატებითი რესურსები

- [JavaScript.info - Browser environment, specs](https://javascript.info/browser-environment) -- ბრაუზერის გარემოს მიმოხილვა
- [JavaScript.info - LocalStorage, sessionStorage](https://javascript.info/localstorage) -- Web Storage-ის სრული სახელმძღვანელო
- [JavaScript.info - Cookies](https://javascript.info/cookie) -- Cookies-ის დეტალური სახელმძღვანელო
- [JavaScript.info - URL objects](https://javascript.info/url) -- URL და URLSearchParams
- [MDN - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) -- Web Storage-ის სრული დოკუმენტაცია
- [MDN - Using the History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API) -- History API-ის პრაქტიკული გზამკვლევი
- [Eloquent JavaScript - Chapter 13: JavaScript and the Browser](https://eloquentjavascript.net/13_browser.html) -- ბრაუზერის გარემო
- [freeCodeCamp - JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) -- უფასო ინტერაქტიული კურსი
