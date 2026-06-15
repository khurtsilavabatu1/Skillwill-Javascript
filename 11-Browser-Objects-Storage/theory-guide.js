////////////////////////////////////
// Browser Objects & Storage
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
===============================================================
1. WINDOW OBJECT
===============================================================

The `window` object is the global object in the browser.
Every global variable, function, and object becomes a property
of `window`. At the top level, `this` refers to `window`.

Key properties: innerWidth, innerHeight, outerWidth, outerHeight
Key methods: open(), close(), alert(), confirm(), prompt(),
             setTimeout(), setInterval(), clearTimeout(),
             clearInterval(), scrollTo(), scrollBy()
*/

'use strict';

// --- window is the global object ---
// All global variables declared with `var` become window properties
// (let and const do NOT attach to window)

console.log(typeof window); // 'object'

var myGlobal = 'hello';
console.log(window.myGlobal); // 'hello'

let myLocal = 'world';
console.log(window.myLocal); // undefined -- let/const are NOT on window


// --- innerWidth / innerHeight ---
// The viewport dimensions (content area, excluding toolbars)

console.log('Viewport width:', window.innerWidth); // e.g., 1280
console.log('Viewport height:', window.innerHeight); // e.g., 720

// outerWidth / outerHeight -- full browser window including toolbars
console.log('Outer width:', window.outerWidth); // e.g., 1440
console.log('Outer height:', window.outerHeight); // e.g., 900


// --- window.open() / window.close() ---
// open(url, target, features) opens a new window or tab
// close() closes it (only works on script-opened windows)

// Example (commented out because it opens a popup):
// const popup = window.open('https://example.com', '_blank', 'width=600,height=400');
// popup.close();


// --- window.alert(), window.confirm(), window.prompt() ---

// alert -- shows a message box with an OK button
// window.alert('Hello!');

// confirm -- returns true (OK) or false (Cancel)
// const confirmed = window.confirm('Are you sure?');
// console.log('Confirmed:', confirmed);

// prompt -- returns the text the user entered, or null if cancelled
// const userName = window.prompt('Your name?', 'Default Name');
// console.log('User entered:', userName);


// --- setTimeout and clearTimeout ---
// setTimeout(callback, delay, ...args) runs a function ONCE after a delay (ms)

const timeoutId = setTimeout(function () {
  console.log('This runs after 2 seconds');
}, 2000);

// clearTimeout cancels a pending timeout before it fires
// clearTimeout(timeoutId);

// You can pass extra arguments to the callback via setTimeout
setTimeout(
  function (greeting, name) {
    console.log(`${greeting}, ${name}!`); // 'Hello, World!'
  },
  1000,
  'Hello',
  'World'
);


// --- setInterval and clearInterval ---
// setInterval(callback, interval) runs a function repeatedly at a fixed interval

let counter = 0;
const intervalId = setInterval(function () {
  counter++;
  console.log(`Tick #${counter}`);
}, 3000);

// clearInterval stops a running interval
setTimeout(function () {
  clearInterval(intervalId);
  console.log('Interval stopped after 10 seconds');
}, 10000);


// Practical example: countdown timer
const startCountdown = function (seconds) {
  console.log(`Countdown: ${seconds} seconds`);

  const tick = function () {
    if (seconds === 0) {
      clearInterval(timer);
      console.log('Time is up!');
      return;
    }
    console.log(`${seconds} seconds remaining...`);
    seconds--;
  };

  tick(); // call immediately so there is no initial delay
  const timer = setInterval(tick, 1000);
  return timer;
};

// Uncomment to test:
// startCountdown(5);


// --- scrollTo and scrollBy ---
// scrollTo(x, y) scrolls to an absolute position on the page
// window.scrollTo(0, 0);
// window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });

// scrollBy(x, y) scrolls relative to the current position
// window.scrollBy(0, 200);   // scroll down 200px
// window.scrollBy(0, -100);  // scroll up 100px

// Practical example: smooth scroll-to-top function
const scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


/*
===============================================================
2. NAVIGATOR OBJECT
===============================================================

The `navigator` object provides information about the browser
and the user's system. It is a read-only property of `window`.

Key properties: userAgent, language, languages, platform,
                onLine, cookieEnabled, geolocation, clipboard,
                hardwareConcurrency, maxTouchPoints
*/

// --- navigator.userAgent ---
// A string that identifies the browser
console.log('User Agent:', navigator.userAgent);

// Basic browser detection (feature detection is more reliable)
const detectBrowser = function () {
  const ua = navigator.userAgent;
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  return 'Unknown';
};

console.log('Browser:', detectBrowser());


// --- navigator.language / navigator.languages ---
// The user's preferred language from browser settings
console.log('Language:', navigator.language); // e.g., 'en-US'
console.log('All languages:', navigator.languages); // e.g., ['en-US', 'en', 'ka']

// Practical example: greet user based on browser language
const greetByLanguage = function () {
  const lang = navigator.language.slice(0, 2);
  const greetings = {
    en: 'Hello!',
    ka: 'Gamarjoba!',
    es: 'Hola!',
    fr: 'Bonjour!',
    de: 'Hallo!',
  };
  console.log(greetings[lang] || greetings['en']);
};

greetByLanguage();


// --- navigator.platform (deprecated but still widely used) ---
console.log('Platform:', navigator.platform); // e.g., 'MacIntel', 'Win32'

// Modern replacement (Chromium only):
// if (navigator.userAgentData) {
//   console.log('Platform:', navigator.userAgentData.platform);
// }


// --- navigator.onLine ---
// Returns true if the browser is online, false if offline
console.log('Online:', navigator.onLine);

// Listen for online/offline events
window.addEventListener('online', function () {
  console.log('Back online!');
});

window.addEventListener('offline', function () {
  console.log('Connection lost -- offline');
});


// --- navigator.cookieEnabled ---
// Returns true if the browser allows cookies
console.log('Cookies enabled:', navigator.cookieEnabled);


// --- navigator.geolocation ---
// Asynchronous API -- requires user permission

const getLocation = function () {
  if (!navigator.geolocation) {
    console.log('Geolocation not supported');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    // Success callback
    function (position) {
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
      console.log('Accuracy:', position.coords.accuracy, 'meters');
    },
    // Error callback
    function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log('User denied geolocation');
          break;
        case error.POSITION_UNAVAILABLE:
          console.log('Location unavailable');
          break;
        case error.TIMEOUT:
          console.log('Request timed out');
          break;
      }
    },
    // Options
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );
};

// Uncomment to test (requires browser with geolocation support):
// getLocation();


// --- navigator.clipboard (modern Clipboard API) ---
// Requires HTTPS and a user gesture (click, keypress, etc.)

const copyToClipboard = async function (text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied:', text);
  } catch (err) {
    console.log('Copy failed:', err.message);
  }
};

// Uncomment to test:
// copyToClipboard('Hello from JS!');


// Practical example: collect all browser info into one object
const getBrowserInfo = function () {
  return {
    browser: detectBrowser(),
    language: navigator.language,
    online: navigator.onLine,
    platform: navigator.platform,
    cookiesEnabled: navigator.cookieEnabled,
    cores: navigator.hardwareConcurrency,
    maxTouchPoints: navigator.maxTouchPoints,
  };
};

console.log('Browser info:', getBrowserInfo());


/*
===============================================================
3. SCREEN OBJECT
===============================================================

The `screen` object provides information about the user's
physical display. Useful for image quality decisions, responsive
layouts, and device detection.

Key properties: width, height, availWidth, availHeight,
                colorDepth, pixelDepth
Related: window.devicePixelRatio
*/

// --- screen.width / screen.height ---
// Full screen resolution in pixels
console.log('Screen width:', screen.width); // e.g., 1920
console.log('Screen height:', screen.height); // e.g., 1080

// --- screen.availWidth / screen.availHeight ---
// Available area excluding taskbar/dock
console.log('Available width:', screen.availWidth); // e.g., 1920
console.log('Available height:', screen.availHeight); // e.g., 1040

// --- screen.colorDepth / screen.pixelDepth ---
// Bits per pixel for color representation
console.log('Color depth:', screen.colorDepth); // e.g., 24 (16M colors)
console.log('Pixel depth:', screen.pixelDepth); // same as colorDepth in modern browsers

// --- window.devicePixelRatio ---
// Physical pixels per CSS pixel (Retina/HiDPI = 2+)
console.log('Device pixel ratio:', window.devicePixelRatio); // e.g., 2 on Retina


// Practical example: detect device type by screen width
const getDeviceType = function () {
  const width = screen.width;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

console.log('Device type:', getDeviceType());

// Practical example: screen info summary
const getScreenInfo = function () {
  return {
    resolution: `${screen.width}x${screen.height}`,
    available: `${screen.availWidth}x${screen.availHeight}`,
    colorDepth: `${screen.colorDepth}-bit`,
    pixelRatio: window.devicePixelRatio,
    isRetina: window.devicePixelRatio > 1,
    deviceType: getDeviceType(),
  };
};

console.log('Screen info:', getScreenInfo());

// Practical example: recommend image quality based on screen
const getRecommendedImageQuality = function () {
  const ratio = window.devicePixelRatio;
  const width = screen.width;

  if (ratio >= 2 && width >= 1920) return 'ultra-high (4K assets)';
  if (ratio >= 2) return 'high (2x assets)';
  if (width >= 1920) return 'high (1x full-HD)';
  if (width >= 1024) return 'medium';
  return 'low (save bandwidth)';
};

console.log('Recommended quality:', getRecommendedImageQuality());


/*
===============================================================
4. LOCATION OBJECT
===============================================================

The `location` object represents the current URL of the page.
It provides properties for every part of the URL and methods
for navigation.

Properties: href, protocol, hostname, host, port, pathname,
            search, hash, origin
Methods: assign(), replace(), reload()

Related: URL constructor, URLSearchParams
*/

// --- Location properties ---
console.log('Full URL:', location.href);
console.log('Protocol:', location.protocol); // 'http:' or 'https:'
console.log('Hostname:', location.hostname); // e.g., 'example.com'
console.log('Port:', location.port); // e.g., '3000'
console.log('Pathname:', location.pathname); // e.g., '/products'
console.log('Search:', location.search); // e.g., '?id=42'
console.log('Hash:', location.hash); // e.g., '#details'
console.log('Origin:', location.origin); // 'https://example.com:3000'


// --- Navigation methods ---

// assign(url) -- navigates to URL (adds to history)
// location.assign('https://example.com/new-page');

// replace(url) -- navigates to URL (does NOT add to history)
// User cannot go Back to the replaced page
// location.replace('https://example.com/new-page');

// reload() -- reloads the current page
// location.reload();

// You can also navigate by setting location.href directly:
// location.href = 'https://example.com/another-page';


// --- URL constructor (modern approach) ---
// Provides a clean way to parse and manipulate URLs

const myUrl = new URL('https://shop.example.com:3000/products?id=42#details');
console.log('URL origin:', myUrl.origin); // 'https://shop.example.com:3000'
console.log('URL pathname:', myUrl.pathname); // '/products'
console.log('URL search:', myUrl.search); // '?id=42'
console.log('URL hash:', myUrl.hash); // '#details'

// Modify parts of the URL object
myUrl.pathname = '/cart';
myUrl.hash = '#summary';
console.log('Modified URL:', myUrl.href);


// --- URLSearchParams (modern query string handling) ---

const params = new URLSearchParams('?category=shoes&sort=price&page=2');

// get -- retrieve a single parameter value
console.log('category:', params.get('category')); // 'shoes'
console.log('sort:', params.get('sort')); // 'price'
console.log('missing:', params.get('color')); // null

// has -- check if a parameter exists
console.log('has category:', params.has('category')); // true
console.log('has color:', params.has('color')); // false

// getAll -- get all values for a key (for multi-value params)
const multiParams = new URLSearchParams('?color=red&color=blue&color=green');
console.log('All colors:', multiParams.getAll('color')); // ['red', 'blue', 'green']

// set -- set or update a parameter (replaces existing value)
params.set('page', '3');
params.set('limit', '20');

// append -- add a new value without removing existing ones
params.append('tag', 'new');
params.append('tag', 'sale');

// delete -- remove a parameter entirely
params.delete('sort');

// toString -- rebuild the query string
console.log('Updated:', params.toString());

// Iterate over all parameters
for (const [key, value] of params) {
  console.log(`  ${key} = ${value}`);
}

// Convert to a plain object (duplicate keys keep only last value)
const paramsObject = Object.fromEntries(params);
console.log('Params object:', paramsObject);


// Practical example: extract and organize URL parameters
const extractUrlParams = function (urlString) {
  const urlObj = new URL(urlString);
  const searchParams = new URLSearchParams(urlObj.search);
  const result = {};

  for (const [key, value] of searchParams) {
    if (result[key]) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  }

  return {
    origin: urlObj.origin,
    pathname: urlObj.pathname,
    hash: urlObj.hash,
    params: result,
  };
};

console.log(
  'Parsed:',
  extractUrlParams('https://shop.example.com/products?color=red&color=blue&sort=price#reviews')
);


// Practical example: build a URL from a base and query params
const buildUrl = function (base, queryParams) {
  const url = new URL(base);
  Object.entries(queryParams).forEach(function ([key, value]) {
    if (Array.isArray(value)) {
      value.forEach(function (v) {
        url.searchParams.append(key, v);
      });
    } else {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
};

const shopUrl = buildUrl('https://shop.example.com/products', {
  category: 'electronics',
  sort: 'price',
  brand: ['Apple', 'Samsung'],
  page: 1,
});

console.log('Built URL:', shopUrl);


/*
===============================================================
5. HISTORY OBJECT
===============================================================

The `history` object provides access to the browser's session
history -- the list of pages visited in the current tab.

Properties: length
Methods: back(), forward(), go(n), pushState(), replaceState()
Events: popstate
*/

// --- history.length ---
console.log('History entries:', history.length);


// --- back(), forward(), go() ---
// history.back()     -- go back one page (same as Back button)
// history.forward()  -- go forward one page (same as Forward button)
// history.go(n)      -- go n steps (negative = back, positive = forward)
// history.go(-2)     -- go back 2 pages
// history.go(0)      -- reload the current page


// --- pushState() and replaceState() ---
// Change the URL without reloading the page (used in SPAs).
// Neither triggers a page load -- they only change the address bar.

// pushState(stateObj, title, url) -- adds a new entry to the history stack
// history.pushState({ page: 'about' }, '', '/about');

// replaceState(stateObj, title, url) -- replaces the current entry
// history.replaceState({ page: 'home' }, '', '/home');


// --- popstate event ---
// Fires when the user navigates with back/forward buttons.
// Does NOT fire when pushState or replaceState is called directly.

window.addEventListener('popstate', function (e) {
  console.log('User navigated with back/forward!');
  console.log('State:', e.state);
});


// Practical example: simple SPA router
const spaRouter = {
  routes: {
    '/': { title: 'Home', content: 'Welcome to the home page!' },
    '/about': { title: 'About', content: 'Learn more about us.' },
    '/contact': { title: 'Contact', content: 'Get in touch with us.' },
  },

  navigate: function (path) {
    const route = this.routes[path];
    if (!route) {
      console.log('404 -- Page not found:', path);
      return;
    }
    history.pushState({ path: path }, route.title, path);
    this.render(path);
  },

  render: function (path) {
    const route = this.routes[path];
    if (route) {
      console.log(`=== ${route.title} ===`);
      console.log(route.content);
    }
  },

  init: function () {
    const self = this;
    window.addEventListener('popstate', function (e) {
      const path = e.state ? e.state.path : '/';
      self.render(path);
    });
    this.render(window.location.pathname);
  },
};

// Uncomment to test (run in browser):
// spaRouter.init();
// spaRouter.navigate('/about');
// spaRouter.navigate('/contact');
// Then press the browser Back button to see popstate events.


/*
===============================================================
6. localStorage
===============================================================

localStorage stores data persistently in the browser.
Data survives browser close and reopen.
Only stores strings -- use JSON.stringify/JSON.parse for objects.
Storage limit is approximately 5-10 MB per origin.

Methods: setItem(), getItem(), removeItem(), clear()
Properties: length
Also: key(index)
*/

// --- setItem(key, value) ---
localStorage.setItem('username', 'George');
localStorage.setItem('theme', 'dark');
localStorage.setItem('fontSize', '16');

// --- getItem(key) ---
// Returns null if the key does not exist
const username = localStorage.getItem('username');
console.log('Username:', username); // 'George'

const missing = localStorage.getItem('nonexistent');
console.log('Missing:', missing); // null

// --- removeItem(key) ---
localStorage.removeItem('fontSize');
console.log('After removal:', localStorage.getItem('fontSize')); // null

// --- clear() ---
// Removes EVERYTHING from localStorage (use with caution!)
// localStorage.clear();

// --- length and key(index) ---
console.log('Items stored:', localStorage.length);
console.log('First key:', localStorage.key(0));


// --- Storing strings vs numbers ---
// localStorage stores everything as strings
localStorage.setItem('score', '42');
const score = localStorage.getItem('score');
console.log('Score:', score); // '42' (string!)
console.log('As number:', Number(score)); // 42


// --- Storing objects and arrays with JSON ---
// Objects and arrays must be serialized before storing

const userPrefs = {
  theme: 'dark',
  language: 'en',
  notifications: true,
  fontSize: 14,
};

// Save: object -> JSON string
localStorage.setItem('preferences', JSON.stringify(userPrefs));

// Load: JSON string -> object
const savedPrefs = JSON.parse(localStorage.getItem('preferences'));
console.log('Saved prefs:', savedPrefs);
console.log('Theme:', savedPrefs.theme); // 'dark'

// Storing an array
const recentSearches = ['JavaScript', 'localStorage', 'cookies'];
localStorage.setItem('searches', JSON.stringify(recentSearches));

const loadedSearches = JSON.parse(localStorage.getItem('searches'));
console.log('Searches:', loadedSearches);


// Practical example: theme persistence
const savePreferences = function (prefs) {
  localStorage.setItem('userPrefs', JSON.stringify(prefs));
  console.log('Preferences saved!');
};

const loadPreferences = function () {
  const saved = localStorage.getItem('userPrefs');
  if (saved) return JSON.parse(saved);
  return { theme: 'light', language: 'en', fontSize: 16 }; // defaults
};

savePreferences({ theme: 'dark', language: 'en', fontSize: 18 });
const prefs = loadPreferences();
console.log('Loaded prefs:', prefs);


// Practical example: todo list with persistence
const todoManager = {
  key: 'todos',

  getAll: function () {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  },

  add: function (text) {
    const todos = this.getAll();
    todos.push({ id: Date.now(), text: text, done: false });
    localStorage.setItem(this.key, JSON.stringify(todos));
    console.log(`Added: "${text}"`);
  },

  toggle: function (id) {
    const todos = this.getAll();
    const todo = todos.find(function (t) { return t.id === id; });
    if (todo) {
      todo.done = !todo.done;
      localStorage.setItem(this.key, JSON.stringify(todos));
      console.log(`Toggled: "${todo.text}" -- done: ${todo.done}`);
    }
  },

  remove: function (id) {
    const todos = this.getAll().filter(function (t) { return t.id !== id; });
    localStorage.setItem(this.key, JSON.stringify(todos));
    console.log('Todo removed');
  },

  display: function () {
    const todos = this.getAll();
    if (todos.length === 0) {
      console.log('No todos yet!');
      return;
    }
    todos.forEach(function (t) {
      console.log(`${t.done ? '[x]' : '[ ]'} ${t.text}`);
    });
  },
};

// Usage:
// todoManager.add('Learn localStorage');
// todoManager.add('Build a project');
// todoManager.display();


// --- storage event ---
// Fires in OTHER tabs when localStorage is changed.
// Does NOT fire in the tab that made the change.

window.addEventListener('storage', function (e) {
  console.log('Storage changed in another tab!');
  console.log('Key:', e.key);
  console.log('Old value:', e.oldValue);
  console.log('New value:', e.newValue);
  console.log('URL:', e.url);
});


/*
===============================================================
7. sessionStorage
===============================================================

sessionStorage has the SAME API as localStorage.
Key differences:
- Data is cleared when the tab/window is closed
- Each tab has its own isolated sessionStorage (not shared)

Use sessionStorage for temporary data: form state, one-time
messages, tab-specific data.
*/

// --- Same API as localStorage ---
sessionStorage.setItem('currentPage', 'dashboard');
sessionStorage.setItem('sessionId', 'abc123xyz');

console.log('Page:', sessionStorage.getItem('currentPage')); // 'dashboard'
console.log('Session:', sessionStorage.getItem('sessionId')); // 'abc123xyz'

sessionStorage.removeItem('sessionId');
console.log('After removal:', sessionStorage.getItem('sessionId')); // null

// sessionStorage.clear(); // removes everything for this tab


// --- Storing objects (same JSON pattern as localStorage) ---
const sessionData = {
  user: 'George',
  loginTime: new Date().toISOString(),
  cartItems: ['item1', 'item2'],
};

sessionStorage.setItem('session', JSON.stringify(sessionData));
const loaded = JSON.parse(sessionStorage.getItem('session'));
console.log('Session data:', loaded);


// Practical example: preserve form data on accidental refresh
const saveFormData = function (formId, data) {
  sessionStorage.setItem(`form_${formId}`, JSON.stringify(data));
  console.log(`Form "${formId}" saved`);
};

const loadFormData = function (formId) {
  const saved = sessionStorage.getItem(`form_${formId}`);
  return saved ? JSON.parse(saved) : null;
};

saveFormData('registration', {
  name: 'Nino',
  email: 'nino@example.com',
  step: 2,
});

const restored = loadFormData('registration');
console.log('Restored form:', restored);


// Practical example: show welcome message only once per session
const hasSeenWelcome = sessionStorage.getItem('welcomeShown');
if (!hasSeenWelcome) {
  console.log('Welcome! (first time this session)');
  sessionStorage.setItem('welcomeShown', 'true');
} else {
  console.log('Welcome message already shown -- skipping');
}


// --- When to use sessionStorage vs localStorage ---
//
// localStorage:
//   - Data persists until manually deleted
//   - Shared across all tabs of the same origin
//   - Best for: user preferences, themes, persistent data
//
// sessionStorage:
//   - Data cleared when tab/window closes
//   - Each tab has its own isolated store
//   - Best for: temp form state, one-time modals, tab-specific data


/*
===============================================================
8. COOKIES
===============================================================

Cookies are small pieces of data stored in the browser.
Unlike localStorage, cookies are sent to the server with
every HTTP request. Maximum size: ~4 KB per cookie.

API: document.cookie (read/write)
Attributes: expires, max-age, path, domain, secure, SameSite
*/

// --- Reading cookies ---
// Returns all cookies as a single semicolon-separated string
console.log('All cookies:', document.cookie);
// e.g., 'username=George; theme=dark; visits=5'


// --- Setting cookies ---
// Each assignment adds or updates ONE cookie (not all)
document.cookie = 'username=George';
document.cookie = 'theme=dark';


// --- Cookie attributes: expiration ---

// expires -- specific expiration date (UTC string)
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 7); // 7 days from now
document.cookie = `remember=true; expires=${expiryDate.toUTCString()}`;

// max-age -- seconds until expiration (overrides expires if both set)
document.cookie = 'session_token=abc123; max-age=3600'; // 1 hour

// Without expires or max-age, the cookie is a "session cookie"
// that disappears when the browser is closed.


// --- path and domain attributes ---

// path -- the URL path where the cookie is accessible
document.cookie = 'pagePref=list; path=/products';

// domain -- the domain where the cookie is accessible
// document.cookie = 'tracking=abc; domain=.example.com';

// Cookie with multiple attributes
document.cookie = 'user_id=12345; max-age=86400; path=/; secure; SameSite=Strict';


// --- Deleting cookies ---
// Set max-age to 0 or expires to a past date

// Option 1: expires in the past
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

// Option 2: max-age=0
document.cookie = 'theme=; max-age=0; path=/';


// --- Helper functions for working with cookies ---

// Set a cookie with name, value, and optional expiry in days
const setCookie = function (name, value, days) {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${date.toUTCString()}`;
  }
  cookieString += '; path=/';
  document.cookie = cookieString;
};

// Get a specific cookie by name (returns null if not found)
const getCookie = function (name) {
  const encodedName = encodeURIComponent(name) + '=';
  const cookies = document.cookie.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].startsWith(encodedName)) {
      return decodeURIComponent(cookies[i].substring(encodedName.length));
    }
  }
  return null;
};

// Delete a cookie by name
const deleteCookie = function (name) {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

// Get all cookies as a plain object
const getAllCookies = function () {
  if (!document.cookie) return {};

  return document.cookie.split('; ').reduce(function (obj, cookie) {
    const separatorIndex = cookie.indexOf('=');
    const key = decodeURIComponent(cookie.substring(0, separatorIndex));
    const value = decodeURIComponent(cookie.substring(separatorIndex + 1));
    obj[key] = value;
    return obj;
  }, {});
};

// Using the helpers
setCookie('visitor_name', 'Nino', 30); // 30 days
console.log('Visitor:', getCookie('visitor_name')); // 'Nino'
console.log('All cookies:', getAllCookies());
// deleteCookie('visitor_name');


// Practical example: remember user across visits
const greetUser = function () {
  const savedName = getCookie('user_name');
  if (savedName) {
    console.log(`Welcome back, ${savedName}!`);
  } else {
    const name = 'George'; // simulated input
    setCookie('user_name', name, 365);
    console.log(`Nice to meet you, ${name}!`);
  }
};

greetUser();


// Practical example: track page visits
const trackVisits = function () {
  let visits = parseInt(getCookie('visit_count')) || 0;
  visits++;
  setCookie('visit_count', String(visits), 365);
  console.log(`Visit count: ${visits}`);
};

trackVisits();


// --- Cookie attribute summary ---
// expires    -- specific expiry date (UTC string)
// max-age    -- seconds until expiry (overrides expires)
// path       -- URL path where cookie is accessible (default: current path)
// domain     -- domain where cookie is accessible (default: current domain)
// secure     -- only sent over HTTPS
// SameSite   -- controls cross-site sending:
//               Strict: same-site only
//               Lax: same-site + top-level navigation (default in modern browsers)
//               None: cross-site allowed (requires secure flag)


/*
===============================================================
9. COMPARISON: COOKIES vs localStorage vs sessionStorage
===============================================================

Feature             | Cookies          | localStorage     | sessionStorage
--------------------|------------------|------------------|------------------
Max size            | ~4 KB            | ~5-10 MB         | ~5-10 MB
Sent to server      | Yes (every req)  | No               | No
Expiration          | Configurable     | Never (manual)   | Tab close
Scope               | All tabs         | All tabs         | Single tab
Server-readable     | Yes              | No               | No
Best for            | Auth tokens,     | User prefs,      | Temp state,
                    | server config    | cached data      | form drafts
*/
