"use strict";

////////////////////////////////////
// 1. Window Object
////////////////////////////////////

// window არის ბრაუზერში გლობალური ობიექტი.
// ყველა გლობალური ცვლადი და ფუნქცია ხდება window-ის property.
// ბრაუზერში, "this" ზედა დონეზე window-ს მიუთითებს.

console.log(typeof window); // 'object'
console.log(window);

// var-ით გამოცხადებული გლობალური ცვლადები window-ის property-ებია
var globalVar = "I am global";
console.log(window.globalVar); // 'I am global'

// შენიშვნა: let და const არ მიებმება window-ს
let localLet = "not on window";
console.log(window.localLet); // undefined

// --- window.innerWidth, window.innerHeight ---
// Viewport-ის ზომები (კონტენტის არე, ტულბარების გარეშე)
console.log("Viewport width:", window.innerWidth); // e.g., 1280
console.log("Viewport height:", window.innerHeight); // e.g., 720

// outerWidth/outerHeight — ბრაუზერის სრული ფანჯარა ტულბარების ჩათვლით
console.log("Window outer width:", window.outerWidth); // e.g., 1440
console.log("Window outer height:", window.outerHeight); // e.g., 900

// --- window.open(), window.close() ---
// open(url, target, features) ახალ ფანჯარას ან ტაბს ხსნის
// close() ფანჯარას ხურავს (მხოლოდ სკრიპტით გახსნილ ფანჯრებზე მუშაობს)

// მაგალითი (კომენტარშია, რადგან popup-ს ხსნის):
// const popup = window.open('https://example.com', '_blank', 'width=600,height=400');
// popup.close(); // closes the popup

// --- window.alert(), window.confirm(), window.prompt() ---

// alert აჩვენებს შეტყობინების ფანჯარას OK ღილაკით
// window.alert('Hello!');

// confirm აბრუნებს true-ს (OK) ან false-ს (Cancel)
// const userConfirmed = window.confirm('Are you sure you want to delete this?');
// console.log('User confirmed:', userConfirmed);

// prompt აბრუნებს ტექსტს, რომელიც მომხმარებელმა შეიყვანა, ან null-ს თუ გააუქმა
// const userName = window.prompt('What is your name?', 'Default Name');
// console.log('User entered:', userName);

// --- window.setTimeout(), window.setInterval(), clearInterval() ---

// setTimeout ფუნქციას ერთხელ ასრულებს დაყოვნების შემდეგ (მილიწამებში)
const timeoutId = setTimeout(function () {
  console.log("This message appears after 2 seconds");
}, 2000);

// clearTimeout აუქმებს მომლოდინე timeout-ს მის გაშვებამდე
// clearTimeout(timeoutId);

// setTimeout-ის მეშვეობით შეგიძლიათ დამატებითი არგუმენტების გადაცემა callback-ისთვის
setTimeout(
  function (greeting, name) {
    console.log(`${greeting}, ${name}!`); // 'Hello, World!'
  },
  1000,
  "Hello",
  "World",
);

// setInterval ფუნქციას განმეორებით ასრულებს ფიქსირებული ინტერვალით
let counter = 0;
const intervalId = setInterval(function () {
  counter++;
  console.log(`Interval tick #${counter}`);
}, 3000);

// clearInterval აჩერებს მიმდინარე ინტერვალს
// აქ ინტერვალს 10 წამის შემდეგ ვაჩერებთ
setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval stopped after 10 seconds");
}, 10000);

// პრაქტიკული მაგალითი: countdown ტაიმერი setInterval-ის გამოყენებით
const startCountdown = function (seconds) {
  console.log(`Countdown started: ${seconds} seconds`);

  const tick = function () {
    if (seconds === 0) {
      clearInterval(timer);
      console.log("Time is up!");
      return;
    }
    console.log(`${seconds} seconds remaining...`);
    seconds--;
  };

  tick(); // დაუყოვნებლივ გამოვიძახოთ, რომ საწყისი დაყოვნება არ იყოს
  const timer = setInterval(tick, 1000);

  return timer; // id-ს ვაბრუნებთ, რომ გამომძახებელმა შეძლოს გაუქმება
};

// ბრაუზერში სატესტოდ კომენტარი მოხსენით:
// startCountdown(5);

// --- window.scrollTo(), window.scrollBy() ---

// scrollTo(x, y) გვერდზე აბსოლუტურ პოზიციაზე გადააადგილებს
// window.scrollTo(0, 0); // scroll to the very top

// scrollTo options ობიექტით (მხარს უჭერს გლუვ სქროლინგს)
// window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });

// scrollBy(x, y) მიმდინარე სქროლის პოზიციიდან შეფარდებითად გადააადგილებს
// window.scrollBy(0, 200);  // scroll down 200px from current position
// window.scrollBy(0, -100); // scroll up 100px

// scrollBy ასევე იღებს options ობიექტს
// window.scrollBy({ top: -100, left: 0, behavior: 'smooth' });

// პრაქტიკული მაგალითი: scroll-to-top ფუნქცია "back to top" ღილაკისთვის
const scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("Scrolled to top");
};

// სატესტოდ კომენტარი მოხსენით:
// scrollToTop();

////////////////////////////////////
// 2. Navigator Object
////////////////////////////////////

// navigator ობიექტი შეიცავს ინფორმაციას ბრაუზერისა
// და მომხმარებლის სისტემის შესახებ. ეს არის window-ის მხოლოდ-წასაკითხი property.

// --- navigator.userAgent ---
// navigator.userAgent — სტრინგი, რომელიც ბრაუზერს ამოიცნობს
console.log("User Agent:", navigator.userAgent);
// e.g., 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/...'

// ბრაუზერის ამოცნობა (ბაზისური, ყოველთვის სანდო არ არის)
// შენიშვნა: feature detection უფრო სანდოა ვიდრე userAgent-ის შემოწმება
const detectBrowser = function () {
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  return "Unknown";
};

console.log("Detected browser:", detectBrowser());

// --- navigator.language ---
// navigator.language — მომხმარებლის სასურველი ენა ბრაუზერის პარამეტრებიდან
console.log("Primary language:", navigator.language); // e.g., 'en-US'
console.log("All languages:", navigator.languages); // e.g., ['en-US', 'en', 'ka']

// პრაქტიკული მაგალითი: მომხმარებლის მისალმება ბრაუზერის ენის მიხედვით
const greetByLanguage = function () {
  const langCode = navigator.language.slice(0, 2);
  const greetings = {
    en: "Hello!",
    ka: "Gamarjoba!",
    es: "Hola!",
    fr: "Bonjour!",
    de: "Hallo!",
    ja: "Konnichiwa!",
  };
  const greeting = greetings[langCode] || greetings["en"];
  console.log(`Detected language: ${langCode} -- ${greeting}`);
};

greetByLanguage();

// --- navigator.onLine ---
// navigator.onLine — ბრაუზერი ონლაინ არის? აბრუნებს true-ს ან false-ს
console.log("Online:", navigator.onLine);

// ონლაინ/ოფლაინ მოვლენების მოსმენა
window.addEventListener("online", function () {
  console.log("Connection restored! You are back online.");
});

window.addEventListener("offline", function () {
  console.log("Connection lost. You are offline.");
});

// --- navigator.platform (deprecated, მაგრამ ჯერ კიდევ გამოიყენება) ---
// navigator.platform — ოპერაციული სისტემა
console.log("Platform:", navigator.platform); // e.g., 'MacIntel', 'Win32', 'Linux x86_64'

// შენიშვნა: navigator.platform deprecated-ია თანამედროვე სპეციფიკაციებში.
// მისი შემცვლელია navigator.userAgentData (მხოლოდ Chromium-ში).
// if (navigator.userAgentData) {
//   console.log('Modern platform:', navigator.userAgentData.platform);
// }

// --- navigator.geolocation (ასინქრონული, საჭიროებს ნებართვას) ---
// getCurrentPosition(successCallback, errorCallback, options)
// ბრაუზერი აჩვენებს ნებართვის მოთხოვნას ლოკაციის გაზიარებამდე.

const getLocation = function () {
  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by this browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    // წარმატების callback -- იღებს Position ობიექტს
    function (position) {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
      console.log("Accuracy:", position.coords.accuracy, "meters");
    },
    // შეცდომის callback
    function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for geolocation");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out");
          break;
      }
    },
    // პარამეტრები
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    },
  );
};

// სატესტოდ კომენტარი მოხსენით (საჭიროებს ბრაუზერს geolocation-ის მხარდაჭერით):
getLocation();

// --- navigator.clipboard (ბუფერის წაკითხვა/ჩაწერა, საჭიროებს ნებართვას) ---
// თანამედროვე Clipboard API ცვლის document.execCommand('copy')-ს.
// საჭიროებს HTTPS-ს და მომხმარებლის ჟესტს (დაწკაპუნება, ღილაკის დაჭერა და ა.შ.).

const copyToClipboard = async function (text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied to clipboard:", text);
  } catch (err) {
    console.log("Failed to copy:", err.message);
  }
};

// სატესტოდ კომენტარი მოხსენით (HTTPS უნდა იყოს, მომხმარებლის ჟესტით გამოწვეული):
copyToClipboard("Hello from JavaScript!");

// პრაქტიკული მაგალითი: ბრაუზერის ყველა ინფორმაციის შეგროვება ერთ ობიექტში
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

console.log("Browser info:", getBrowserInfo());

////////////////////////////////////
// 3. Screen Object
////////////////////////////////////

// screen ობიექტი შეიცავს ინფორმაციას მომხმარებლის ფიზიკური ეკრანის შესახებ.
// სასარგებლოა სურათის ხარისხის შერჩევისა და განლაგების გადაწყვეტილებებისთვის.

// --- screen.width, screen.height ---
// screen.width/height — ეკრანის სრული გარჩევადობა პიქსელებში
console.log("Screen width:", screen.width); // e.g., 1920
console.log("Screen height:", screen.height); // e.g., 1080

// --- screen.availWidth, screen.availHeight ---
// screen.availWidth/availHeight — ხელმისაწვდომი არე (taskbar/dock-ის გარეშე)
console.log("Available width:", screen.availWidth); // e.g., 1920
console.log("Available height:", screen.availHeight); // e.g., 1040

// --- screen.colorDepth, screen.pixelDepth ---
// screen.colorDepth — ბიტები ერთი პიქსელის ფერისთვის
console.log("Color depth:", screen.colorDepth); // e.g., 24 (16 million colors)

// screen.pixelDepth — თანამედროვე ბრაუზერებში colorDepth-ის იდენტურია
console.log("Pixel depth:", screen.pixelDepth); // e.g., 24

// devicePixelRatio — ფიზიკური პიქსელები ერთ CSS პიქსელზე (Retina = 2+)
// Retina / HiDPI ეკრანებს 1-ზე მეტი თანაფარდობა აქვთ
console.log("Device pixel ratio:", window.devicePixelRatio); // e.g., 2 on Retina

// პრაქტიკული მაგალითი: მოწყობილობის ტიპის ამოცნობა ეკრანის სიგანით
const getDeviceType = function () {
  const width = screen.width;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

console.log("Device type:", getDeviceType());

// პრაქტიკული მაგალითი: ეკრანის ინფორმაციის შეჯამება
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

console.log("Screen info:", getScreenInfo());

// პრაქტიკული მაგალითი: სურათის ხარისხის რეკომენდაცია ეკრანის შესაძლებლობების მიხედვით
const getRecommendedImageQuality = function () {
  const ratio = window.devicePixelRatio;
  const width = screen.width;

  if (ratio >= 2 && width >= 1920) return "ultra-high (4K assets)";
  if (ratio >= 2) return "high (2x assets)";
  if (width >= 1920) return "high (1x full-HD)";
  if (width >= 1024) return "medium";
  return "low (save bandwidth)";
};

console.log("Recommended image quality:", getRecommendedImageQuality());

////////////////////////////////////
// 4. Location Object
////////////////////////////////////

// location ობიექტი წარმოადგენს გვერდის მიმდინარე URL-ს.
// ის უზრუნველყოფს property-ებს URL-ის ყველა ნაწილისთვის და ნავიგაციის მეთოდებს.

// --- location.href, location.hostname, location.pathname ---
// --- location.protocol, location.port, location.hash, location.search ---
// location-ის თვისებები — მიმდინარე URL-ის ნაწილები, მაგალითად:

console.log("Full URL:", location.href);
// location.href — სრული URL

console.log("Protocol:", location.protocol); // location.protocol — http: ან https:
console.log("Hostname:", location.hostname); // location.hostname — დომენის სახელი
console.log("Port:", location.port); // location.port — პორტის ნომერი
console.log("Pathname:", location.pathname); // location.pathname — გზა დომენის შემდეგ
console.log("Search:", location.search); // location.search — query სტრინგი ?-ის შემდეგ
console.log("Hash:", location.hash); // location.hash — ფრაგმენტი #-ის შემდეგ
console.log("Origin:", location.origin); // 'https://example.com:8080'

// --- location.assign(), location.replace(), location.reload() ---

// assign() — გადასვლა URL-ზე (ისტორიაში ემატება)
// location.assign('https://example.com/new-page');

// replace() — გადასვლა URL-ზე (ისტორიაში არ ემატება)
// მომხმარებელს არ შეუძლია Back-ით დაბრუნება შეცვლილ გვერდზე
// location.replace('https://example.com/new-page');

// reload() — მიმდინარე გვერდის გადატვირთვა
// location.reload();

// ასევე შეგიძლიათ ნავიგაცია location.href-ის პირდაპირ მინიჭებით:
// location.href = 'https://example.com/another-page';

// --- URL და URLSearchParams (თანამედროვე მიდგომა) ---

// URL კონსტრუქტორი უზრუნველყოფს URL-ების პარსინგისა და მანიპულაციის სუფთა გზას
const myUrl = new URL("https://shop.example.com:3000/products?id=42#details");
console.log("URL origin:", myUrl.origin); // 'https://shop.example.com:3000'
console.log("URL pathname:", myUrl.pathname); // '/products'
console.log("URL search:", myUrl.search); // '?id=42'
console.log("URL hash:", myUrl.hash); // '#details'

// URL ობიექტის ნაწილების შეცვლა შეგიძლიათ
myUrl.pathname = "/cart";
myUrl.hash = "#summary";
console.log("Modified URL:", myUrl.href);
// 'https://shop.example.com:3000/cart?id=42#summary'

// URLSearchParams — query სტრინგებთან მუშაობის თანამედროვე გზა
const params = new URLSearchParams("?category=shoes&sort=price&page=2");
console.log(params);

// get -- ერთი პარამეტრის მნიშვნელობის მიღება
console.log("category:", params.get("category")); // 'shoes'
console.log("sort:", params.get("sort")); // 'price'
console.log("page:", params.get("page")); // '2'
console.log("missing:", params.get("color")); // null

// has -- პარამეტრის არსებობის შემოწმება
console.log("has category:", params.has("category")); // true
console.log("has color:", params.has("color")); // false

// getAll -- ერთი გასაღების ყველა მნიშვნელობის მიღება (მრავალმნიშვნელობიანი პარამეტრებისთვის)
const multiParams = new URLSearchParams("?color=red&color=blue&color=green");
console.log("All colors:", multiParams.getAll("color")); // ['red', 'blue', 'green']

// set -- პარამეტრის დაყენება ან განახლება (ცვლის არსებულ მნიშვნელობას)
params.set("page", "3");
params.set("limit", "20");

// append -- ახალი მნიშვნელობის დამატება არსებულების წაშლის გარეშე
params.append("tag", "new");
params.append("tag", "sale");

// delete -- პარამეტრის სრულად წაშლა
params.delete("sort");

// toString -- query სტრინგის ხელახლა აგება
console.log("Updated params:", params.toString());
// 'category=shoes&page=3&limit=20&tag=new&tag=sale'

// ყველა პარამეტრზე იტერაცია
console.log("--- All parameters ---");
for (const [key, value] of params) {
  console.log(`  ${key} = ${value}`);
}

// ჩვეულებრივ ობიექტად გადაყვანა (დუბლიკატი გასაღებებისთვის მხოლოდ ბოლო მნიშვნელობას ინახავს)
const paramsObject = Object.fromEntries(params);
console.log("Params as object:", paramsObject);

// პრაქტიკული მაგალითი: URL პარამეტრების ამოღება და ორგანიზება
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

const parsed = extractUrlParams(
  "https://shop.example.com/products?category=shoes&color=red&color=blue&sort=price#reviews",
);
console.log("Parsed URL:", parsed);
// { origin: ..., pathname: '/products', hash: '#reviews',
//   params: { category: 'shoes', color: ['red', 'blue'], sort: 'price' } }

// პრაქტიკული მაგალითი: URL-ის აგება ბაზისა და query პარამეტრებიდან
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

const shopUrl = buildUrl("https://shop.example.com/products", {
  category: "electronics",
  sort: "price",
  brand: ["Apple", "Samsung"],
  page: 1,
});

console.log("Built URL:", shopUrl);
// 'https://shop.example.com/products?category=electronics&sort=price&brand=Apple&brand=Samsung&page=1'

////////////////////////////////////
// 5. History Object
////////////////////////////////////

// history ობიექტი წვდომას იძლევა ბრაუზერის სესიის ისტორიაზე --
// გვერდების სია, რომლებიც მომხმარებელმა მიმდინარე ტაბში მოინახულა.

// --- history.length ---
// history.length — სესიის ისტორიაში ჩანაწერების რაოდენობა
console.log("History length:", history.length);

// --- history.back(), history.forward(), history.go() ---

// history.back()    -- ერთი გვერდით უკან (იგივეა რაც Back ღილაკი)
// history.forward() -- ერთი გვერდით წინ (იგივეა რაც Forward ღილაკი)
// history.go(n)     -- n ნაბიჯით გადასვლა (უარყოფითი = უკან, დადებითი = წინ)

// history.back();
// history.forward();
// history.go(-2);     // go back 2 pages
// history.go(1);      // go forward 1 page
// history.go(0);      // reload the current page

// --- history.pushState(), history.replaceState() ---
// pushState/replaceState — URL-ის შეცვლა გვერდის გადატვირთვის გარეშე (SPA).
// არცერთი არ იწვევს გვერდის ჩატვირთვას -- მხოლოდ URL-ს ცვლიან მისამართის ზოლში.

// pushState(stateObj, title, url) -- ახალ ჩანაწერს ამატებს ისტორიის სტეკში
// history.pushState({ page: 'about' }, '', '/about');
// console.log('Pathname after pushState:', location.pathname); // '/about'

// replaceState(stateObj, title, url) -- ცვლის მიმდინარე ჩანაწერს (ახალს არ ამატებს)
// history.replaceState({ page: 'home' }, '', '/home');

// --- popstate მოვლენა ---
// popstate მოვლენა — ეშვება როცა მომხმარებელი back/forward-ს იყენებს.
// არ ეშვება როცა pushState ან replaceState პირდაპირ გამოიძახება.

window.addEventListener("popstate", function (e) {
  console.log("User navigated with back/forward!");
  console.log("State object:", e.state);
});

// პრაქტიკული მაგალითი: მარტივი SPA (Single Page Application) როუტერი
const spaRouter = {
  routes: {
    "/": { title: "Home", content: "Welcome to the home page!" },
    "/about": { title: "About", content: "Learn more about us." },
    "/contact": { title: "Contact", content: "Get in touch with us." },
    "/products": { title: "Products", content: "Browse our products." },
  },

  // ახალი history state-ის push-ით მარშრუტზე ნავიგაცია
  navigate: function (path) {
    const route = this.routes[path];
    if (!route) {
      console.log("404 -- Page not found:", path);
      return;
    }
    history.pushState({ path: path }, route.title, path);
    this.render(path);
  },

  // მოცემული მარშრუტის კონტენტის რენდერი
  render: function (path) {
    const route = this.routes[path];
    if (route) {
      console.log(`=== ${route.title} ===`);
      console.log(route.content);
      // რეალურ აპლიკაციაში აქ DOM-ს განაახლებდით:
      // document.getElementById('app').innerHTML = route.content;
    }
  },

  // ინიციალიზაცია: popstate-ის მოსმენა და მიმდინარე გვერდის რენდერი
  init: function () {
    const self = this;
    window.addEventListener("popstate", function (e) {
      const path = e.state ? e.state.path : "/";
      self.render(path);
    });

    // იმ გვერდის რენდერი, რომელზეც ბრაუზერი ამჟამად იმყოფება
    this.render(window.location.pathname);
  },
};

// სატესტოდ კომენტარი მოხსენით (ბრაუზერში გაუშვით):
// spaRouter.init();
// spaRouter.navigate('/about');
// spaRouter.navigate('/contact');
// შემდეგ ბრაუზერის Back ღილაკს დააჭირეთ popstate მოვლენების სანახავად.

////////////////////////////////////
// 6. localStorage
////////////////////////////////////

// localStorage ინახავს მონაცემებს ბრაუზერის დახურვის შემდეგაც.
// მონაცემები რჩება ბრაუზერის დახურვისა და ხელახლა გახსნის შემდეგაც.
// მხოლოდ სტრინგებს ინახავს, ამიტომ ობიექტებისთვის გამოიყენეთ JSON.stringify / JSON.parse.
// შენახვის ლიმიტი დაახლოებით 5-10 MB-ია, ბრაუზერის მიხედვით.

// --- setItem(), getItem(), removeItem(), clear() ---

// setItem(key, value) — ინახავს სტრინგ მნიშვნელობას
localStorage.setItem("username", "George");
localStorage.setItem("theme", "dark");
localStorage.setItem("fontSize", "16");

// getItem(key) — იღებს მნიშვნელობას (აბრუნებს null-ს თუ გასაღები არ არსებობს)
const username = localStorage.getItem("username");
console.log("Username:", username); // 'George'

const missingKey = localStorage.getItem("nonexistent");
console.log("Missing key:", missingKey); // null

// removeItem(key) — შლის კონკრეტულ ელემენტს
localStorage.removeItem("fontSize");
console.log("After removal:", localStorage.getItem("fontSize")); // null
// clear() — შლის ყველაფერს localStorage-დან (სიფრთხილით გამოიყენეთ!)
// localStorage.clear();

// length -- ამჟამად რამდენი ელემენტია შენახული
console.log("Items in localStorage:", localStorage.length);

// key(index) -- მოცემულ ინდექსზე გასაღების სახელის მიღება
console.log("First key:", localStorage.key(0));

// --- სტრინგების შენახვა და წაკითხვა ---
// localStorage ყველაფერს სტრინგებად ინახავს
localStorage.setItem("score", "42");
const score = localStorage.getItem("score");
console.log("Score:", score); // '42' (a string, not a number!)
console.log("Score as number:", Number(score)); // 42

// --- ობიექტების შენახვა — აუცილებელია JSON.stringify/JSON.parse ---
// ობიექტები და მასივები სერიალიზებული უნდა იყოს შენახვამდე

// ობიექტის შენახვა
const userPreferences = {
  theme: "dark",
  language: "en",
  notifications: true,
  fontSize: 14,
};

localStorage.setItem("preferences", JSON.stringify(userPreferences));
console.log(localStorage.getItem("preferences"));

// ობიექტის წაკითხვა და პარსინგი
const savedPreferences = JSON.parse(localStorage.getItem("preferences"));
console.log("Saved preferences:", savedPreferences);
console.log("Theme:", savedPreferences.theme); // 'dark'

// მასივის შენახვა
const recentSearches = ["JavaScript", "localStorage", "cookies"];
localStorage.setItem("searches", JSON.stringify(recentSearches));

const savedSearches = JSON.parse(localStorage.getItem("searches"));
console.log("Recent searches:", savedSearches);

// --- პრაქტიკული მაგალითი: მომხმარებლის პარამეტრების / თემის შენახვა ---

const savePreferences = function (prefs) {
  localStorage.setItem("userPrefs", JSON.stringify(prefs));
  console.log("Preferences saved!");
};

const loadPreferences = function () {
  const saved = localStorage.getItem("userPrefs");
  if (saved) {
    return JSON.parse(saved);
  }
  // ნაგულისხმევი მნიშვნელობების დაბრუნება, თუ ჯერ არაფერია შენახული
  return { theme: "light", language: "en", fontSize: 16 };
};

const applyTheme = function (theme) {
  // რეალურ აპლიკაციაში body-ზე CSS კლასს გადართავდით:
  // document.body.classList.toggle('dark-mode', theme === 'dark');
  console.log(`Theme applied: ${theme}`);
};

// პარამეტრების შენახვა, ჩატვირთვა და გამოყენება
savePreferences({ theme: "dark", language: "en", fontSize: 18 });
const prefs = loadPreferences();
console.log("Loaded preferences:", prefs);
applyTheme(prefs.theme);

// პრაქტიკული მაგალითი: მარტივი todo სია პერსისტენტურობით
const todoManager = {
  key: "todos",

  getAll: function () {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  },

  add: function (text) {
    const todos = this.getAll();
    todos.push({ id: Date.now(), text: text, done: false });
    localStorage.setItem(this.key, JSON.stringify(todos));
    console.log(`Added todo: "${text}"`);
  },

  toggle: function (id) {
    const todos = this.getAll();
    const todo = todos.find(function (t) {
      return t.id === id;
    });
    if (todo) {
      todo.done = !todo.done;
      localStorage.setItem(this.key, JSON.stringify(todos));
      console.log(`Toggled: "${todo.text}" -- done: ${todo.done}`);
    }
  },

  remove: function (id) {
    const todos = this.getAll().filter(function (t) {
      return t.id !== id;
    });
    localStorage.setItem(this.key, JSON.stringify(todos));
    console.log("Todo removed");
  },

  display: function () {
    const todos = this.getAll();
    if (todos.length === 0) {
      console.log("No todos yet!");
      return;
    }
    todos.forEach(function (t) {
      console.log(`${t.done ? "[x]" : "[ ]"} ${t.text}`);
    });
  },
};

// გამოყენება:
// todoManager.add('Learn localStorage');
// todoManager.add('Build a project');
// todoManager.display();

// --- storage მოვლენა — ეშვება სხვა ტაბებში, როცა localStorage იცვლება ---
// ეშვება როცა localStorage იცვლება იმავე origin-ის სხვა ტაბში.
// არ ეშვება იმ ტაბში, რომელმაც ცვლილება განახორციელა.

window.addEventListener("storage", function (e) {
  console.log("Storage changed in another tab!");
  console.log("Key:", e.key);
  console.log("Old value:", e.oldValue);
  console.log("New value:", e.newValue);
  console.log("URL of page that changed it:", e.url);
});

////////////////////////////////////
// 7. sessionStorage
////////////////////////////////////

// sessionStorage — იგივე API რაც localStorage-ს.
// მონაცემები იშლება ტაბის/ფანჯრის დახურვისას.
// თითოეულ ტაბს ასევე საკუთარი იზოლირებული sessionStorage აქვს (ტაბებს შორის არ იზიარება).

// --- იგივე API რაც localStorage-ს ---

sessionStorage.setItem("currentPage", "dashboard");
sessionStorage.setItem("sessionId", "abc123xyz");

console.log("Current page:", sessionStorage.getItem("currentPage")); // 'dashboard'
console.log("Session ID:", sessionStorage.getItem("sessionId")); // 'abc123xyz'

sessionStorage.removeItem("sessionId");
console.log("After removal:", sessionStorage.getItem("sessionId")); // null

// sessionStorage.clear(); // removes everything for this tab

// --- ობიექტების შენახვა (იგივე JSON პატერნი რაც localStorage-ს) ---

const sessionData = {
  user: "George",
  loginTime: new Date().toISOString(),
  cartItems: ["item1", "item2"],
};
sessionStorage.setItem("session", JSON.stringify(sessionData));

const loadedSession = JSON.parse(sessionStorage.getItem("session"));
console.log("Session data:", loadedSession);
// --- პრაქტიკული მაგალითი: ფორმის მონაცემების შენარჩუნება შემთხვევითი განახლებისას ---

const saveFormData = function (formId, data) {
  sessionStorage.setItem(`form_${formId}`, JSON.stringify(data));
  console.log(`Form "${formId}" data saved to sessionStorage`);
};

const loadFormData = function (formId) {
  const saved = sessionStorage.getItem(`form_${formId}`);
  return saved ? JSON.parse(saved) : null;
};

// ფორმის მონაცემების შენახვისა და აღდგენის სიმულაცია
saveFormData("registration", {
  name: "Nino",
  email: "nino@example.com",
  step: 2,
});

const restoredForm = loadFormData("registration");
console.log("Restored form data:", restoredForm);

// --- პრაქტიკული მაგალითი: მისასალმებელი შეტყობინების ჩვენება სესიაში მხოლოდ ერთხელ ---

const hasSeenWelcome = sessionStorage.getItem("welcomeShown");
if (!hasSeenWelcome) {
  console.log("Showing welcome modal for the first time this session...");
  sessionStorage.setItem("welcomeShown", "true");
} else {
  console.log("Welcome modal already shown this session -- skipping");
}

// --- როდის გამოვიყენოთ sessionStorage vs localStorage ---
//
// localStorage: მუდმივი მონაცემები (პარამეტრები, შენახული სამუშაო)
//   - მონაცემები რჩება სანამ კოდით ან მომხმარებლით არ წაიშლება
//   - იზიარება იმავე origin-ის ყველა ტაბს შორის
//   - საუკეთესოა: მომხმარებლის პარამეტრები, თემები, პერსისტენტური მონაცემები
//
// sessionStorage: დროებითი მონაცემები (ფორმის მდგომარეობა, ერთჯერადი შეტყობინებები)
//   - მონაცემები იშლება ტაბის ან ფანჯრის დახურვისას
//   - თითოეულ ტაბს საკუთარი იზოლირებული საცავი აქვს (არ იზიარება)
//   - საუკეთესოა: დროებითი ფორმის მდგომარეობა, ერთჯერადი მოდალები, ტაბის მონაცემები

////////////////////////////////////
// 8. Cookies
////////////////////////////////////

// Cookies ბრაუზერში შენახული მონაცემების მცირე ნაწილებია.
// localStorage-სგან განსხვავებით, cookies ყოველი HTTP მოთხოვნით სერვერზე იგზავნება.
// მაქსიმალური ზომა: დაახლოებით 4 KB ერთი cookie-სთვის.

// --- document.cookie — cookies-ის წაკითხვა და ჩაწერა ---

// Cookies-ის წაკითხვა — აბრუნებს ყველა cookie-ს ერთ სტრინგად, წერტილ-მძიმით გამოყოფილს
console.log("All cookies:", document.cookie);
// e.g., 'username=George; theme=dark; visits=5'

// Cookie-ის დაყენება: ყოველი მინიჭება ერთ cookie-ს ამატებს ან ანახლებს (არა ყველას)
document.cookie = "username=George";
document.cookie = "theme=dark";

// --- Cookie-ის ატრიბუტები: ვადის გასვლა (expires, max-age) ---

// expires — კონკრეტული ვადის გასვლის თარიღი (UTC)
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 7); // 7 days from now
document.cookie = `remember=true; expires=${expiryDate.toUTCString()}`;

// max-age — წამები ვადის გასვლამდე (გადაფარავს expires-ს, თუ ორივე მითითებულია)
document.cookie = "session_token=abc123; max-age=3600"; // expires in 1 hour

// expires ან max-age-ის გარეშე, cookie არის "სესიის cookie", რომელიც
// ქრება ბრაუზერის დახურვისას.

// --- path და domain ატრიბუტები ---

// path — URL გზა, სადაც cookie ხელმისაწვდომია
document.cookie = "pagePref=list; path=/products";

// domain — დომენი, სადაც cookie ხელმისაწვდომია
// document.cookie = 'tracking=abc; domain=.example.com'; // accessible to subdomains

// Cookie მრავალი ატრიბუტით
document.cookie =
  "user_id=12345; max-age=86400; path=/; secure; SameSite=Strict";

// Cookie-ის ატრიბუტების შეჯამება:
// expires    -- კონკრეტული ვადის გასვლის თარიღი (UTC სტრინგი)
// max-age    -- წამები ვადის გასვლამდე (გადაფარავს expires-ს, თუ ორივე მითითებულია)
// path       -- URL გზა, სადაც cookie ხელმისაწვდომია (ნაგულისხმევი: მიმდინარე გზა)
// domain     -- დომენი, სადაც cookie ხელმისაწვდომია (ნაგულისხმევი: მიმდინარე დომენი)
// secure     -- მხოლოდ HTTPS-ით იგზავნება
// SameSite   -- SameSite — აკონტროლებს cross-site გაგზავნას
//               Lax: same-site + ზედა დონის ნავიგაცია (ნაგულისხმევი თანამედროვე ბრაუზერებში)
//               None: cross-site ნებადართულია (საჭიროებს secure ფლაგს)

// --- Cookie-ის წაშლა — max-age 0-ზე ან expires წარსულში ---

// ვარიანტი 1: expires ატრიბუტის დაყენება წარსულის თარიღზე
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

// ვარიანტი 2: max-age-ის 0-ზე დაყენება
document.cookie = "theme=; max-age=0; path=/";

// --- დამხმარე ფუნქციები cookies-თან სამუშაოდ ---

// Cookie-ის დაყენება სახელით, მნიშვნელობით და არასავალდებულო ვადით დღეებში
const setCookie = function (name, value, days) {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${date.toUTCString()}`;
  }
  cookieString += "; path=/";
  document.cookie = cookieString;
};

// კონკრეტული cookie-ის მიღება სახელით (აბრუნებს null-ს თუ ვერ იპოვა)
const getCookie = function (name) {
  const encodedName = encodeURIComponent(name) + "=";
  const cookies = document.cookie.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].startsWith(encodedName)) {
      return decodeURIComponent(cookies[i].substring(encodedName.length));
    }
  }
  return null;
};

// Cookie-ის წაშლა სახელით
const deleteCookie = function (name) {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

// ყველა cookie-ის მიღება ჩვეულებრივ ობიექტად
const getAllCookies = function () {
  if (!document.cookie) return {};

  return document.cookie.split("; ").reduce(function (obj, cookie) {
    const separatorIndex = cookie.indexOf("=");
    const key = decodeURIComponent(cookie.substring(0, separatorIndex));
    const value = decodeURIComponent(cookie.substring(separatorIndex + 1));
    obj[key] = value;
    return obj;
  }, {});
};

// დამხმარე ფუნქციების გამოყენება
setCookie("visitor_name", "Nino", 30); // expires in 30 days
console.log("Visitor:", getCookie("visitor_name")); // 'Nino'
console.log("All cookies as object:", getAllCookies());
// deleteCookie('visitor_name');

// --- პრაქტიკული მაგალითი: მომხმარებლის სახელის დამახსოვრება ვიზიტებს შორის ---
const greetUser = function () {
  const savedName = getCookie("user_name");
  if (savedName) {
    console.log(`Welcome back, ${savedName}!`);
  } else {
    // რეალურ აპლიკაციაში prompt()-ს ან ფორმის ველს გამოიყენებდით
    // const name = prompt('What is your name?');
    const name = "George"; // სიმულირებული შეყვანა
    setCookie("user_name", name, 365);
    console.log(`Nice to meet you, ${name}! I will remember you.`);
  }
};

greetUser();

// --- პრაქტიკული მაგალითი: გვერდის ვიზიტების თვალყურის დევნა ---
const trackVisits = function () {
  let visitCount = parseInt(getCookie("visit_count")) || 0;
  visitCount++;
  setCookie("visit_count", String(visitCount), 365);
  console.log(`You have visited this page ${visitCount} time(s)`);
};

trackVisits();

// --- Cookies vs localStorage vs sessionStorage — შედარება ---
//
// Feature             | Cookies          | localStorage     | sessionStorage
// --------------------|------------------|------------------|------------------
// Max size            | ~4 KB            | ~5-10 MB         | ~5-10 MB
// Sent to server      | Yes (every req)  | No               | No
// Expiration          | Configurable     | Never (manual)   | Tab close
// Scope               | All tabs         | All tabs         | Single tab
// Server-readable     | Yes              | No               | No
// Best for            | Auth tokens,     | User prefs,      | Temp state,
//                     | server config    | cached data      | form drafts

////////////////////////////////////
// 9. ინტერაქტიული დემო — HTML-თან ინტეგრაცია
////////////////////////////////////

// ეს სექცია აკავშირებს ზემოთ ნასწავლ ყველა კონცეფციას HTML ელემენტებთან
// და ქმნის სრულფასოვან ინტერაქტიულ აპლიკაციას:
//   - Hash-based routing (location.hash, hashchange event)
//   - URL პარამეტრები (URLSearchParams) ფილტრაცია/პაგინაციისთვის
//   - localStorage: თემის შენახვა, ჩანიშვნების CRUD
//   - Cookies: cookie consent banner, ვიზიტების მთვლელი
//   - window/navigator/screen ობიექტების ვიზუალიზაცია
//   - ცოცხალი URL Inspector ქვედა პანელში

// ========== მონაცემები ==========

const PRODUCTS = [
  { id: 1, name: "MacBook Pro 14", category: "electronics", price: 4999 },
  { id: 2, name: "iPhone 15 Pro", category: "electronics", price: 2999 },
  { id: 3, name: "Samsung Galaxy S24", category: "electronics", price: 1999 },
  { id: 4, name: "AirPods Pro", category: "electronics", price: 699 },
  { id: 5, name: "iPad Air", category: "electronics", price: 1899 },
  { id: 6, name: "Nike Air Max", category: "clothing", price: 399 },
  { id: 7, name: "Adidas Ultraboost", category: "clothing", price: 449 },
  { id: 8, name: "Levi's 501", category: "clothing", price: 199 },
  { id: 9, name: "North Face Jacket", category: "clothing", price: 599 },
  { id: 10, name: "Converse All Star", category: "clothing", price: 249 },
  { id: 11, name: "Clean Code", category: "books", price: 89 },
  { id: 12, name: "JavaScript: The Good Parts", category: "books", price: 69 },
  { id: 13, name: "Design Patterns", category: "books", price: 99 },
  { id: 14, name: "The Pragmatic Programmer", category: "books", price: 109 },
  { id: 15, name: "Eloquent JavaScript", category: "books", price: 79 },
  { id: 16, name: "საფეხბურთო ბურთი", category: "sports", price: 79 },
  { id: 17, name: "იოგა მატი", category: "sports", price: 59 },
  { id: 18, name: "ჩოგბურთის რაკეტი", category: "sports", price: 349 },
  { id: 19, name: "კალათბურთის ბურთი", category: "sports", price: 99 },
  { id: 20, name: "სარბენი ფეხსაცმელი", category: "sports", price: 299 },
];

const CATEGORY_LABELS = {
  all: "ყველა",
  electronics: "ელექტრონიკა",
  clothing: "ტანსაცმელი",
  books: "წიგნები",
  sports: "სპორტი",
};

const ITEMS_PER_PAGE = 4;
const NOTES_KEY = "demo_notes";

// ========== XSS-ის თავიდან ასაცილებელი დამხმარე ფუნქცია ==========

const escapeHtml = function (text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

// ========== Hash-based Router ==========
// location.hash-ს ვიყენებთ ნავიგაციისთვის, რადგან ის file:// პროტოკოლზეც
// მუშაობს და გვერდის გადატვირთვას არ იწვევს.
// ფორმატი: #page?param1=value1&param2=value2
// რეალურ SPA-ში history.pushState-ს გამოიყენებდნენ სუფთა URL-ებისთვის.

const parseHash = function () {
  const hash = location.hash.slice(1) || "home";
  const qIndex = hash.indexOf("?");

  if (qIndex === -1) {
    return { page: hash, params: new URLSearchParams() };
  }

  return {
    page: hash.substring(0, qIndex),
    params: new URLSearchParams(hash.substring(qIndex + 1)),
  };
};

const navigateTo = function (page, params) {
  let hash = "#" + page;
  if (params) {
    const str = params.toString();
    if (str) hash += "?" + str;
  }
  location.hash = hash;
};

// ========== URL Inspector — ცოცხალი URL მონიტორი ==========
// location ობიექტის ყველა property-ს ვაჩვენებთ ქვედა პანელში

const updateUrlInspector = function () {
  document.getElementById("ui-href").textContent = location.href;
  document.getElementById("ui-protocol").textContent = location.protocol;
  document.getElementById("ui-host").textContent = location.host;
  document.getElementById("ui-pathname").textContent = location.pathname;
  document.getElementById("ui-hash").textContent = location.hash || "(ცარიელი)";

  const hashParsed = parseHash();
  document.getElementById("ui-page").textContent = hashParsed.page;
  document.getElementById("ui-params").textContent =
    hashParsed.params.toString() || "(არ არის)";
};

// ========== Theme Manager — localStorage ==========
// მომხმარებლის არჩეული თემა localStorage-ში ინახება და
// გვერდის განახლების შემდეგაც ნარჩუნდება.

const initTheme = function () {
  const saved = localStorage.getItem("demo_theme");
  if (saved === "dark") {
    document.body.classList.add("dark-theme");
  }
  updateThemeButton();
};

const toggleTheme = function () {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("demo_theme", isDark ? "dark" : "light");
  updateThemeButton();
};

const updateThemeButton = function () {
  const isDark = document.body.classList.contains("dark-theme");
  document.getElementById("theme-toggle").textContent = isDark
    ? "Light Mode"
    : "Dark Mode";
};

// ========== Cookie Banner ==========
// პირველ ვიზიტზე cookie consent banner ჩანს.
// მომხმარებლის არჩევანი cookie-ში ინახება.

const initCookieBanner = function () {
  const consent = getCookie("demo_consent");
  if (!consent) {
    document.getElementById("cookie-banner").classList.remove("hidden");
  }
};

// ========== Visit Counter — Cookies ==========
// ყოველ ვიზიტზე cookie-ის მნიშვნელობას ვზრდით.

const updateVisitCount = function () {
  let visits = parseInt(getCookie("demo_visits")) || 0;
  visits++;
  setCookie("demo_visits", String(visits), 365);
  document.getElementById("visit-count").textContent = "ვიზიტი: " + visits;
};

// ========== Notes Manager — localStorage ==========
// ჩანიშვნები localStorage-ში ინახება JSON ფორმატში.

const getNotes = function () {
  const data = localStorage.getItem(NOTES_KEY);
  return data ? JSON.parse(data) : [];
};

const saveNotes = function (notes) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};

const addNote = function (text) {
  const notes = getNotes();
  notes.unshift({
    id: Date.now(),
    text: text,
    date: new Date().toLocaleDateString("ka-GE"),
  });
  saveNotes(notes);
};

const deleteNote = function (id) {
  const notes = getNotes().filter(function (n) {
    return n.id !== id;
  });
  saveNotes(notes);
};

const clearAllNotes = function () {
  localStorage.removeItem(NOTES_KEY);
};

// ========== Page Renderers ==========

// --- მთავარი გვერდი: ბრაუზერის ინფო + Storage მონიტორი ---

const renderHome = function () {
  const app = document.getElementById("app");

  const info = {
    browser: detectBrowser(),
    language: navigator.language,
    online: navigator.onLine ? "დიახ" : "არა",
    platform: navigator.platform,
    viewport: window.innerWidth + " x " + window.innerHeight,
    screenRes: screen.width + " x " + screen.height,
    pixelRatio: window.devicePixelRatio,
    cookiesOn: navigator.cookieEnabled ? "დიახ" : "არა",
  };

  // localStorage-ის შიგთავსი
  const lsKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    lsKeys.push({ key: key, value: localStorage.getItem(key) });
  }

  // Cookies-ის შიგთავსი
  const cookies = getAllCookies();
  const cookieEntries = Object.entries(cookies);

  // localStorage ცხრილის HTML
  let lsTableHtml = "";
  if (lsKeys.length === 0) {
    lsTableHtml = '<p class="empty-state">localStorage ცარიელია</p>';
  } else {
    lsTableHtml =
      '<table class="storage-table"><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>';
    lsKeys.forEach(function (item) {
      const displayVal =
        item.value.length > 80
          ? item.value.substring(0, 80) + "..."
          : item.value;
      lsTableHtml +=
        "<tr><td>" +
        escapeHtml(item.key) +
        "</td><td>" +
        escapeHtml(displayVal) +
        "</td></tr>";
    });
    lsTableHtml += "</tbody></table>";
  }

  // Cookies ცხრილის HTML
  let cookieTableHtml = "";
  if (cookieEntries.length === 0) {
    cookieTableHtml = '<p class="empty-state">Cookies ცარიელია</p>';
  } else {
    cookieTableHtml =
      '<table class="storage-table"><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody>';
    cookieEntries.forEach(function (entry) {
      cookieTableHtml +=
        "<tr><td>" +
        escapeHtml(entry[0]) +
        "</td><td>" +
        escapeHtml(entry[1]) +
        "</td></tr>";
    });
    cookieTableHtml += "</tbody></table>";
  }

  app.innerHTML =
    '<div class="welcome-text">' +
    "<h2>Browser Objects & Storage</h2>" +
    "<p>ინტერაქტიული დემო — ნავიგაცია, პაგინაცია, localStorage, Cookies</p>" +
    "</div>" +
    '<h3 class="section-heading">Browser & System Info</h3>' +
    '<p style="margin-bottom:12px;color:var(--text-secondary);font-size:0.9em">' +
    "window, navigator, screen ობიექტებიდან მიღებული ინფორმაცია:</p>" +
    '<div class="info-grid">' +
    '<div class="info-tile"><div class="label">Browser</div><div class="value">' +
    escapeHtml(info.browser) +
    "</div></div>" +
    '<div class="info-tile"><div class="label">Language</div><div class="value">' +
    escapeHtml(info.language) +
    "</div></div>" +
    '<div class="info-tile"><div class="label">Online</div><div class="value">' +
    info.online +
    "</div></div>" +
    '<div class="info-tile"><div class="label">Platform</div><div class="value">' +
    escapeHtml(info.platform) +
    "</div></div>" +
    '<div class="info-tile"><div class="label">Viewport</div><div class="value">' +
    info.viewport +
    "</div></div>" +
    '<div class="info-tile"><div class="label">Screen</div><div class="value">' +
    info.screenRes +
    "</div></div>" +
    '<div class="info-tile"><div class="label">Pixel Ratio</div><div class="value">' +
    info.pixelRatio +
    "</div></div>" +
    '<div class="info-tile"><div class="label">Cookies</div><div class="value">' +
    info.cookiesOn +
    "</div></div>" +
    "</div>" +
    '<h3 class="section-heading">localStorage Monitor</h3>' +
    '<div class="card">' +
    lsTableHtml +
    "</div>" +
    '<h3 class="section-heading">Cookies Monitor</h3>' +
    '<div class="card">' +
    cookieTableHtml +
    "</div>";
};

// --- პროდუქტების გვერდი: ფილტრაცია + პაგინაცია ---
// URLSearchParams-ს ვიყენებთ კატეგორიისა და გვერდის ნომრისთვის.
// URL ცვლილებისთანავე ქვედა URL Inspector ახლდება.

const renderProducts = function (params) {
  const app = document.getElementById("app");
  const currentCategory = params.get("category") || "all";
  let currentPage = parseInt(params.get("page")) || 1;

  // პროდუქტების ფილტრაცია კატეგორიით
  let filtered = PRODUCTS;
  if (currentCategory !== "all") {
    filtered = PRODUCTS.filter(function (p) {
      return p.category === currentCategory;
    });
  }

  // პაგინაციის გამოთვლა
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // ფილტრის ღილაკების HTML
  let filtersHtml = '<div class="filters">';
  Object.keys(CATEGORY_LABELS).forEach(function (cat) {
    const activeClass = cat === currentCategory ? " active" : "";
    filtersHtml +=
      '<button class="filter-btn' +
      activeClass +
      '" data-category="' +
      cat +
      '">' +
      CATEGORY_LABELS[cat] +
      "</button>";
  });
  filtersHtml += "</div>";

  // პროდუქტების ბარათების HTML
  let productsHtml = "";
  if (pageItems.length === 0) {
    productsHtml = '<p class="empty-state">პროდუქტები ვერ მოიძებნა</p>';
  } else {
    productsHtml = '<div class="products-grid">';
    pageItems.forEach(function (p) {
      productsHtml +=
        '<div class="product-card">' +
        "<h3>" +
        escapeHtml(p.name) +
        "</h3>" +
        '<span class="cat-tag">' +
        CATEGORY_LABELS[p.category] +
        "</span>" +
        '<div class="price">' +
        p.price +
        " &#8382;</div>" +
        "</div>";
    });
    productsHtml += "</div>";
  }

  // პაგინაციის ღილაკების HTML
  let paginationHtml = '<div class="pagination">';
  paginationHtml +=
    '<button class="page-btn" data-page="1"' +
    (currentPage === 1 ? " disabled" : "") +
    ">&laquo;</button>";
  paginationHtml +=
    '<button class="page-btn" data-page="' +
    (currentPage - 1) +
    '"' +
    (currentPage === 1 ? " disabled" : "") +
    ">&lsaquo;</button>";

  for (let i = 1; i <= totalPages; i++) {
    paginationHtml +=
      '<button class="page-btn' +
      (i === currentPage ? " active" : "") +
      '" data-page="' +
      i +
      '">' +
      i +
      "</button>";
  }

  paginationHtml +=
    '<button class="page-btn" data-page="' +
    (currentPage + 1) +
    '"' +
    (currentPage === totalPages ? " disabled" : "") +
    ">&rsaquo;</button>";
  paginationHtml +=
    '<button class="page-btn" data-page="' +
    totalPages +
    '"' +
    (currentPage === totalPages ? " disabled" : "") +
    ">&raquo;</button>";
  paginationHtml += "</div>";

  const pageInfoHtml =
    '<div class="page-info">გვერდი ' +
    currentPage +
    " / " +
    totalPages +
    " (სულ " +
    filtered.length +
    " პროდუქტი)</div>";

  app.innerHTML =
    '<h2 class="page-title">პროდუქტები</h2>' +
    filtersHtml +
    productsHtml +
    paginationHtml +
    pageInfoHtml;

  // ფილტრის ღილაკებზე click — კატეგორიის შეცვლა URL-ში
  app.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const cat = this.dataset.category;
      const newParams = new URLSearchParams();
      if (cat !== "all") newParams.set("category", cat);
      newParams.set("page", "1");
      navigateTo("products", newParams);
    });
  });

  // პაგინაციის ღილაკებზე click — გვერდის შეცვლა URL-ში
  app.querySelectorAll(".page-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (this.disabled) return;
      const newParams = new URLSearchParams();
      if (currentCategory !== "all") newParams.set("category", currentCategory);
      newParams.set("page", this.dataset.page);
      navigateTo("products", newParams);
    });
  });
};

// --- ჩანიშვნების გვერდი: localStorage CRUD ---

const renderNotes = function () {
  const app = document.getElementById("app");
  const notes = getNotes();

  // ჩანიშვნების სიის HTML
  let notesListHtml = "";
  if (notes.length === 0) {
    notesListHtml =
      '<p class="empty-state">ჯერ არცერთი ჩანიშვნა არ არის. დაამატეთ პირველი!</p>';
  } else {
    notes.forEach(function (note) {
      notesListHtml +=
        '<div class="note-item" data-id="' +
        note.id +
        '">' +
        '<span class="note-text">' +
        escapeHtml(note.text) +
        "</span>" +
        '<span class="note-date">' +
        escapeHtml(note.date) +
        "</span>" +
        '<button class="btn-danger delete-note">წაშლა</button>' +
        "</div>";
    });
  }

  app.innerHTML =
    '<h2 class="page-title">ჩანიშვნები</h2>' +
    '<div class="note-form">' +
    '<input type="text" class="note-input" id="note-input" placeholder="ახალი ჩანიშვნა..." />' +
    '<button class="btn-primary" id="add-note">დამატება</button>' +
    "</div>" +
    '<div class="notes-header">' +
    '<span class="notes-count">' +
    notes.length +
    " ჩანიშვნა (localStorage-ში)</span>" +
    (notes.length > 0
      ? '<button class="btn-danger" id="clear-notes">ყველას წაშლა</button>'
      : "") +
    "</div>" +
    '<div id="notes-list">' +
    notesListHtml +
    "</div>";

  // ჩანიშვნის დამატება
  const noteInput = document.getElementById("note-input");
  const addBtn = document.getElementById("add-note");

  const handleAddNote = function () {
    const text = noteInput.value.trim();
    if (!text) return;
    addNote(text);
    renderNotes();
  };

  addBtn.addEventListener("click", handleAddNote);
  noteInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleAddNote();
  });

  // ჩანიშვნის წაშლა
  document.querySelectorAll(".delete-note").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const noteItem = this.closest(".note-item");
      const id = parseInt(noteItem.dataset.id);
      deleteNote(id);
      renderNotes();
    });
  });

  // ყველას წაშლა
  const clearBtn = document.getElementById("clear-notes");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      clearAllNotes();
      renderNotes();
    });
  }

  noteInput.focus();
};

// ========== Router ==========
// hashchange event-ს ვუსმენთ — ბრაუზერის back/forward ღილაკებიც მუშაობს.

const route = function () {
  const hashParsed = parseHash();

  // ნავიგაციის ბმულების active მდგომარეობის განახლება
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.toggle("active", link.dataset.page === hashParsed.page);
  });

  // შესაბამისი გვერდის რენდერი
  switch (hashParsed.page) {
    case "products":
      renderProducts(hashParsed.params);
      break;
    case "notes":
      renderNotes();
      break;
    default:
      renderHome();
  }

  updateUrlInspector();
  window.scrollTo(0, 0);
};

// ========== ინიციალიზაცია ==========

// თემა: localStorage-დან ვტვირთავთ
initTheme();

// Cookie Banner: cookie-ს ვამოწმებთ
initCookieBanner();

// ვიზიტების მთვლელი: cookie-ს ვზრდით
updateVisitCount();

// Theme toggle ღილაკი
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Cookie banner ღილაკები
document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    setCookie("demo_consent", "accepted", 365);
    document.getElementById("cookie-banner").classList.add("hidden");
  });

document
  .getElementById("decline-cookies")
  .addEventListener("click", function () {
    setCookie("demo_consent", "declined", 7);
    document.getElementById("cookie-banner").classList.add("hidden");
  });

// Hash change listener — ბრაუზერის back/forward ღილაკებისთვის
window.addEventListener("hashchange", route);

// პირველი რენდერი
route();
