////////////////////////////////////
// ბრაუზერის ობიექტები და სტორიჯი
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
===============================================================
1. WINDOW ობიექტი (WINDOW OBJECT)
===============================================================

`window` არის ბრაუზერის გლობალური ობიექტი. ყველა გლობალური
ცვლადი, ფუნქცია და ობიექტი ხდება `window`-ის თვისება (property).
ზედა დონეზე `this` მიუთითებს `window`-ს.

ძირითადი თვისებები: innerWidth, innerHeight, outerWidth, outerHeight
ძირითადი მეთოდები: open(), close(), alert(), confirm(), prompt(),
                   setTimeout(), setInterval(), clearTimeout(),
                   clearInterval(), scrollTo(), scrollBy()
*/

'use strict';

// --- window არის გლობალური ობიექტი ---
// var-ით გამოცხადებული გლობალური ცვლადები window-ის თვისებები ხდება
// (let და const არ მიებმება window-ს)

console.log(typeof window); // 'object'

var myGlobal = 'hello';
console.log(window.myGlobal); // 'hello'

let myLocal = 'world';
console.log(window.myLocal); // undefined -- let/const არ არის window-ზე


// --- innerWidth / innerHeight ---
// Viewport-ის ზომები (კონტენტის არე, ტულბარების გარეშე)

console.log('Viewport სიგანე:', window.innerWidth); // მაგ., 1280
console.log('Viewport სიმაღლე:', window.innerHeight); // მაგ., 720

// outerWidth / outerHeight -- ბრაუზერის სრული ფანჯარა ტულბარების ჩათვლით
console.log('გარე სიგანე:', window.outerWidth); // მაგ., 1440
console.log('გარე სიმაღლე:', window.outerHeight); // მაგ., 900


// --- window.open() / window.close() ---
// open(url, target, features) ახალ ფანჯარას ან ტაბს ხსნის
// close() ფანჯარას ხურავს (მხოლოდ სკრიპტით გახსნილ ფანჯრებზე მუშაობს)

// მაგალითი (კომენტარშია, რადგან popup-ს ხსნის):
// const popup = window.open('https://example.com', '_blank', 'width=600,height=400');
// popup.close();


// --- window.alert(), window.confirm(), window.prompt() ---

// alert -- აჩვენებს შეტყობინების ფანჯარას OK ღილაკით
// window.alert('Hello!');

// confirm -- აბრუნებს true-ს (OK) ან false-ს (Cancel)
// const confirmed = window.confirm('დარწმუნებული ხარ?');
// console.log('დადასტურებული:', confirmed);

// prompt -- აბრუნებს მომხმარებლის შეყვანილ ტექსტს, ან null-ს გაუქმებისას
// const userName = window.prompt('შენი სახელი?', 'ნაგულისხმევი');
// console.log('შეყვანილი:', userName);


// --- setTimeout და clearTimeout ---
// setTimeout(callback, delay, ...args) ფუნქციას ერთხელ ასრულებს დაყოვნების შემდეგ (მილიწამებში)

const timeoutId = setTimeout(function () {
  console.log('ეს 2 წამის შემდეგ გაეშვება');
}, 2000);

// clearTimeout აუქმებს მომლოდინე timeout-ს მის გაშვებამდე
// clearTimeout(timeoutId);

// დამატებითი არგუმენტების გადაცემა შესაძლებელია setTimeout-ის მეშვეობით
setTimeout(
  function (greeting, name) {
    console.log(`${greeting}, ${name}!`); // 'Hello, World!'
  },
  1000,
  'Hello',
  'World'
);


// --- setInterval და clearInterval ---
// setInterval(callback, interval) ფუნქციას განმეორებით ასრულებს ფიქსირებული ინტერვალით

let counter = 0;
const intervalId = setInterval(function () {
  counter++;
  console.log(`ტიკი #${counter}`);
}, 3000);

// clearInterval აჩერებს მიმდინარე ინტერვალს
setTimeout(function () {
  clearInterval(intervalId);
  console.log('ინტერვალი შეჩერდა 10 წამის შემდეგ');
}, 10000);


// პრაქტიკული მაგალითი: countdown ტაიმერი
const startCountdown = function (seconds) {
  console.log(`Countdown: ${seconds} წამი`);

  const tick = function () {
    if (seconds === 0) {
      clearInterval(timer);
      console.log('დრო ამოიწურა!');
      return;
    }
    console.log(`${seconds} წამი დარჩენილია...`);
    seconds--;
  };

  tick(); // დაუყოვნებლივ გამოვიძახოთ, რომ საწყისი დაყოვნება არ იყოს
  const timer = setInterval(tick, 1000);
  return timer;
};

// სატესტოდ კომენტარი მოხსენით:
// startCountdown(5);


// --- scrollTo და scrollBy ---
// scrollTo(x, y) გვერდზე აბსოლუტურ პოზიციაზე გადააადგილებს
// window.scrollTo(0, 0);
// window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });

// scrollBy(x, y) მიმდინარე პოზიციიდან შეფარდებითად გადააადგილებს
// window.scrollBy(0, 200);   // 200px ქვემოთ
// window.scrollBy(0, -100);  // 100px ზემოთ

// პრაქტიკული მაგალითი: გლუვი სქროლი ზემოთ
const scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


/*
===============================================================
2. NAVIGATOR ობიექტი (NAVIGATOR OBJECT)
===============================================================

`navigator` ობიექტი შეიცავს ინფორმაციას ბრაუზერისა და
მომხმარებლის სისტემის შესახებ. ეს არის `window`-ის
მხოლოდ-წასაკითხი (read-only) თვისება.

ძირითადი თვისებები: userAgent, language, languages, platform,
                   onLine, cookieEnabled, geolocation, clipboard,
                   hardwareConcurrency, maxTouchPoints
*/

// --- navigator.userAgent ---
// სტრინგი, რომელიც ბრაუზერს ამოიცნობს
console.log('User Agent:', navigator.userAgent);

// ბრაუზერის ამოცნობა (feature detection უფრო სანდოა)
const detectBrowser = function () {
  const ua = navigator.userAgent;
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  return 'უცნობი';
};

console.log('ბრაუზერი:', detectBrowser());


// --- navigator.language / navigator.languages ---
// მომხმარებლის სასურველი ენა ბრაუზერის პარამეტრებიდან
console.log('ენა:', navigator.language); // მაგ., 'en-US'
console.log('ყველა ენა:', navigator.languages); // მაგ., ['en-US', 'en', 'ka']

// პრაქტიკული მაგალითი: მომხმარებლის მისალმება ბრაუზერის ენის მიხედვით
const greetByLanguage = function () {
  const lang = navigator.language.slice(0, 2);
  const greetings = {
    en: 'Hello!',
    ka: 'გამარჯობა!',
    es: 'Hola!',
    fr: 'Bonjour!',
    de: 'Hallo!',
  };
  console.log(greetings[lang] || greetings['en']);
};

greetByLanguage();


// --- navigator.platform (deprecated, მაგრამ ჯერ კიდევ ფართოდ გამოიყენება) ---
console.log('პლატფორმა:', navigator.platform); // მაგ., 'MacIntel', 'Win32'

// თანამედროვე შემცვლელი (მხოლოდ Chromium-ში):
// if (navigator.userAgentData) {
//   console.log('პლატფორმა:', navigator.userAgentData.platform);
// }


// --- navigator.onLine ---
// აბრუნებს true-ს თუ ბრაუზერი ონლაინ არის, false-ს თუ ოფლაინ
console.log('ონლაინ:', navigator.onLine);

// ონლაინ/ოფლაინ მოვლენების მოსმენა
window.addEventListener('online', function () {
  console.log('კავშირი აღდგა!');
});

window.addEventListener('offline', function () {
  console.log('კავშირი დაიკარგა -- ოფლაინ');
});


// --- navigator.cookieEnabled ---
// აბრუნებს true-ს თუ ბრაუზერი Cookies-ს იღებს
console.log('Cookies ჩართულია:', navigator.cookieEnabled);


// --- navigator.geolocation ---
// ასინქრონული API -- საჭიროებს მომხმარებლის ნებართვას

const getLocation = function () {
  if (!navigator.geolocation) {
    console.log('Geolocation მხარდაჭერილი არ არის');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    // წარმატების callback
    function (position) {
      console.log('განედი:', position.coords.latitude);
      console.log('გრძედი:', position.coords.longitude);
      console.log('სიზუსტე:', position.coords.accuracy, 'მეტრი');
    },
    // შეცდომის callback
    function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log('მომხმარებელმა გეოლოკაცია უარყო');
          break;
        case error.POSITION_UNAVAILABLE:
          console.log('ლოკაცია მიუწვდომელია');
          break;
        case error.TIMEOUT:
          console.log('მოთხოვნის დრო ამოიწურა');
          break;
      }
    },
    // პარამეტრები
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );
};

// სატესტოდ კომენტარი მოხსენით (საჭიროებს ბრაუზერს geolocation-ის მხარდაჭერით):
// getLocation();


// --- navigator.clipboard (თანამედროვე Clipboard API) ---
// საჭიროებს HTTPS-ს და მომხმარებლის ჟესტს (დაწკაპუნება, ღილაკის დაჭერა და ა.შ.)

const copyToClipboard = async function (text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('დაკოპირდა:', text);
  } catch (err) {
    console.log('კოპირება ვერ მოხერხდა:', err.message);
  }
};

// სატესტოდ კომენტარი მოხსენით:
// copyToClipboard('გამარჯობა JS-დან!');


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

console.log('ბრაუზერის ინფო:', getBrowserInfo());


/*
===============================================================
3. SCREEN ობიექტი (SCREEN OBJECT)
===============================================================

`screen` ობიექტი შეიცავს ინფორმაციას მომხმარებლის ფიზიკური
ეკრანის შესახებ. სასარგებლოა სურათის ხარისხის შერჩევისა და
განლაგების (layout) გადაწყვეტილებებისთვის.

ძირითადი თვისებები: width, height, availWidth, availHeight,
                   colorDepth, pixelDepth
დაკავშირებული: window.devicePixelRatio
*/

// --- screen.width / screen.height ---
// ეკრანის სრული გარჩევადობა პიქსელებში
console.log('ეკრანის სიგანე:', screen.width); // მაგ., 1920
console.log('ეკრანის სიმაღლე:', screen.height); // მაგ., 1080

// --- screen.availWidth / screen.availHeight ---
// ხელმისაწვდომი არე (taskbar/dock-ის გარეშე)
console.log('ხელმისაწვდომი სიგანე:', screen.availWidth); // მაგ., 1920
console.log('ხელმისაწვდომი სიმაღლე:', screen.availHeight); // მაგ., 1040

// --- screen.colorDepth / screen.pixelDepth ---
// ბიტები ერთი პიქსელის ფერისთვის
console.log('ფერის სიღრმე:', screen.colorDepth); // მაგ., 24 (16M ფერი)
console.log('პიქსელის სიღრმე:', screen.pixelDepth); // თანამედროვე ბრაუზერებში colorDepth-ის იდენტურია

// --- window.devicePixelRatio ---
// ფიზიკური პიქსელები ერთ CSS პიქსელზე (Retina/HiDPI = 2+)
console.log('პიქსელის თანაფარდობა:', window.devicePixelRatio); // მაგ., 2 Retina-ზე


// პრაქტიკული მაგალითი: მოწყობილობის ტიპის ამოცნობა ეკრანის სიგანით
const getDeviceType = function () {
  const width = screen.width;
  if (width < 768) return 'მობილური';
  if (width < 1024) return 'ტაბლეტი';
  return 'დესკტოპი';
};

console.log('მოწყობილობის ტიპი:', getDeviceType());

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

console.log('ეკრანის ინფო:', getScreenInfo());

// პრაქტიკული მაგალითი: სურათის ხარისხის რეკომენდაცია ეკრანის შესაძლებლობების მიხედვით
const getRecommendedImageQuality = function () {
  const ratio = window.devicePixelRatio;
  const width = screen.width;

  if (ratio >= 2 && width >= 1920) return 'ულტრა-მაღალი (4K ასეტები)';
  if (ratio >= 2) return 'მაღალი (2x ასეტები)';
  if (width >= 1920) return 'მაღალი (1x Full-HD)';
  if (width >= 1024) return 'საშუალო';
  return 'დაბალი (ტრაფიკის დაზოგვა)';
};

console.log('რეკომენდირებული ხარისხი:', getRecommendedImageQuality());


/*
===============================================================
4. LOCATION ობიექტი (LOCATION OBJECT)
===============================================================

`location` ობიექტი წარმოადგენს გვერდის მიმდინარე URL-ს.
ის უზრუნველყოფს თვისებებს URL-ის ყველა ნაწილისთვის და
ნავიგაციის მეთოდებს.

თვისებები: href, protocol, hostname, host, port, pathname,
           search, hash, origin
მეთოდები: assign(), replace(), reload()

დაკავშირებული: URL კონსტრუქტორი, URLSearchParams
*/

// --- Location-ის თვისებები ---
console.log('სრული URL:', location.href);
console.log('პროტოკოლი:', location.protocol); // 'http:' ან 'https:'
console.log('ჰოსტის სახელი:', location.hostname); // მაგ., 'example.com'
console.log('პორტი:', location.port); // მაგ., '3000'
console.log('გზა:', location.pathname); // მაგ., '/products'
console.log('ძიება:', location.search); // მაგ., '?id=42'
console.log('ჰეში:', location.hash); // მაგ., '#details'
console.log('წარმოშობა:', location.origin); // 'https://example.com:3000'


// --- ნავიგაციის მეთოდები ---

// assign(url) -- გადასვლა URL-ზე (ისტორიაში ემატება)
// location.assign('https://example.com/new-page');

// replace(url) -- გადასვლა URL-ზე (ისტორიაში არ ემატება)
// მომხმარებელს არ შეუძლია Back-ით დაბრუნება შეცვლილ გვერდზე
// location.replace('https://example.com/new-page');

// reload() -- მიმდინარე გვერდის გადატვირთვა
// location.reload();

// ასევე შეგიძლიათ ნავიგაცია location.href-ის პირდაპირ მინიჭებით:
// location.href = 'https://example.com/another-page';


// --- URL კონსტრუქტორი (თანამედროვე მიდგომა) ---
// უზრუნველყოფს URL-ების პარსინგისა და მანიპულაციის სუფთა გზას

const myUrl = new URL('https://shop.example.com:3000/products?id=42#details');
console.log('URL წარმოშობა:', myUrl.origin); // 'https://shop.example.com:3000'
console.log('URL გზა:', myUrl.pathname); // '/products'
console.log('URL ძიება:', myUrl.search); // '?id=42'
console.log('URL ჰეში:', myUrl.hash); // '#details'

// URL ობიექტის ნაწილების შეცვლა
myUrl.pathname = '/cart';
myUrl.hash = '#summary';
console.log('შეცვლილი URL:', myUrl.href);


// --- URLSearchParams (query სტრინგებთან მუშაობის თანამედროვე გზა) ---

const params = new URLSearchParams('?category=shoes&sort=price&page=2');

// get -- ერთი პარამეტრის მნიშვნელობის მიღება
console.log('კატეგორია:', params.get('category')); // 'shoes'
console.log('სორტირება:', params.get('sort')); // 'price'
console.log('არარსებული:', params.get('color')); // null

// has -- პარამეტრის არსებობის შემოწმება
console.log('აქვს category:', params.has('category')); // true
console.log('აქვს color:', params.has('color')); // false

// getAll -- ერთი გასაღების ყველა მნიშვნელობის მიღება (მრავალმნიშვნელობიანი პარამეტრებისთვის)
const multiParams = new URLSearchParams('?color=red&color=blue&color=green');
console.log('ყველა ფერი:', multiParams.getAll('color')); // ['red', 'blue', 'green']

// set -- პარამეტრის დაყენება ან განახლება (ცვლის არსებულ მნიშვნელობას)
params.set('page', '3');
params.set('limit', '20');

// append -- ახალი მნიშვნელობის დამატება არსებულების წაშლის გარეშე
params.append('tag', 'new');
params.append('tag', 'sale');

// delete -- პარამეტრის სრულად წაშლა
params.delete('sort');

// toString -- query სტრინგის ხელახლა აგება
console.log('განახლებული:', params.toString());

// ყველა პარამეტრზე იტერაცია
for (const [key, value] of params) {
  console.log(`  ${key} = ${value}`);
}

// ჩვეულებრივ ობიექტად გადაყვანა (დუბლიკატი გასაღებებისთვის მხოლოდ ბოლო მნიშვნელობას ინახავს)
const paramsObject = Object.fromEntries(params);
console.log('პარამეტრები ობიექტად:', paramsObject);


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

console.log(
  'დაპარსილი:',
  extractUrlParams('https://shop.example.com/products?color=red&color=blue&sort=price#reviews')
);


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

const shopUrl = buildUrl('https://shop.example.com/products', {
  category: 'electronics',
  sort: 'price',
  brand: ['Apple', 'Samsung'],
  page: 1,
});

console.log('აგებული URL:', shopUrl);


/*
===============================================================
5. HISTORY ობიექტი (HISTORY OBJECT)
===============================================================

`history` ობიექტი წვდომას იძლევა ბრაუზერის სესიის ისტორიაზე --
გვერდების სია, რომლებიც მომხმარებელმა მიმდინარე ტაბში მოინახულა.

თვისებები: length
მეთოდები: back(), forward(), go(n), pushState(), replaceState()
მოვლენები: popstate
*/

// --- history.length ---
console.log('ისტორიის ჩანაწერები:', history.length);


// --- back(), forward(), go() ---
// history.back()     -- ერთი გვერდით უკან (იგივეა რაც Back ღილაკი)
// history.forward()  -- ერთი გვერდით წინ (იგივეა რაც Forward ღილაკი)
// history.go(n)      -- n ნაბიჯით გადასვლა (უარყოფითი = უკან, დადებითი = წინ)
// history.go(-2)     -- 2 გვერდით უკან
// history.go(0)      -- მიმდინარე გვერდის გადატვირთვა


// --- pushState() და replaceState() ---
// URL-ის შეცვლა გვერდის გადატვირთვის გარეშე (გამოიყენება SPA-ში).
// არცერთი არ იწვევს გვერდის ჩატვირთვას -- მხოლოდ URL-ს ცვლიან მისამართის ზოლში.

// pushState(stateObj, title, url) -- ახალ ჩანაწერს ამატებს ისტორიის სტეკში
// history.pushState({ page: 'about' }, '', '/about');

// replaceState(stateObj, title, url) -- ცვლის მიმდინარე ჩანაწერს (ახალს არ ამატებს)
// history.replaceState({ page: 'home' }, '', '/home');


// --- popstate მოვლენა ---
// ეშვება როცა მომხმარებელი back/forward-ს იყენებს.
// არ ეშვება როცა pushState ან replaceState პირდაპირ გამოიძახება.

window.addEventListener('popstate', function (e) {
  console.log('მომხმარებელმა back/forward გამოიყენა!');
  console.log('State:', e.state);
});


// პრაქტიკული მაგალითი: მარტივი SPA (Single Page Application) როუტერი
const spaRouter = {
  routes: {
    '/': { title: 'მთავარი', content: 'კეთილი იყოს თქვენი მობრძანება!' },
    '/about': { title: 'ჩვენ შესახებ', content: 'გაიგეთ მეტი ჩვენ შესახებ.' },
    '/contact': { title: 'კონტაქტი', content: 'დაგვიკავშირდით.' },
  },

  navigate: function (path) {
    const route = this.routes[path];
    if (!route) {
      console.log('404 -- გვერდი ვერ მოიძებნა:', path);
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

// სატესტოდ კომენტარი მოხსენით (ბრაუზერში გაუშვით):
// spaRouter.init();
// spaRouter.navigate('/about');
// spaRouter.navigate('/contact');
// შემდეგ ბრაუზერის Back ღილაკს დააჭირეთ popstate მოვლენების სანახავად.


/*
===============================================================
6. localStorage
===============================================================

localStorage მონაცემებს ინახავს ბრაუზერის დახურვის შემდეგაც.
მონაცემები რჩება ბრაუზერის დახურვისა და ხელახლა გახსნის შემდეგაც.
მხოლოდ სტრინგებს ინახავს -- ობიექტებისთვის გამოიყენეთ
JSON.stringify / JSON.parse.
შენახვის ლიმიტი დაახლოებით 5-10 MB-ია.

მეთოდები: setItem(), getItem(), removeItem(), clear()
თვისებები: length
ასევე: key(index)
*/

// --- setItem(key, value) ---
localStorage.setItem('username', 'George');
localStorage.setItem('theme', 'dark');
localStorage.setItem('fontSize', '16');

// --- getItem(key) ---
// აბრუნებს null-ს, თუ გასაღები არ არსებობს
const username = localStorage.getItem('username');
console.log('მომხმარებელი:', username); // 'George'

const missing = localStorage.getItem('nonexistent');
console.log('არარსებული:', missing); // null

// --- removeItem(key) ---
localStorage.removeItem('fontSize');
console.log('წაშლის შემდეგ:', localStorage.getItem('fontSize')); // null

// --- clear() ---
// შლის ყველაფერს localStorage-დან (სიფრთხილით გამოიყენეთ!)
// localStorage.clear();

// --- length და key(index) ---
console.log('შენახული ელემენტები:', localStorage.length);
console.log('პირველი გასაღები:', localStorage.key(0));


// --- სტრინგების შენახვა vs რიცხვები ---
// localStorage ყველაფერს სტრინგებად ინახავს
localStorage.setItem('score', '42');
const score = localStorage.getItem('score');
console.log('ქულა:', score); // '42' (სტრინგია!)
console.log('რიცხვად:', Number(score)); // 42


// --- ობიექტების და მასივების შენახვა JSON-ით ---
// ობიექტები და მასივები სერიალიზებული უნდა იყოს შენახვამდე

const userPrefs = {
  theme: 'dark',
  language: 'en',
  notifications: true,
  fontSize: 14,
};

// შენახვა: ობიექტი -> JSON სტრინგი
localStorage.setItem('preferences', JSON.stringify(userPrefs));

// ჩატვირთვა: JSON სტრინგი -> ობიექტი
const savedPrefs = JSON.parse(localStorage.getItem('preferences'));
console.log('შენახული პარამეტრები:', savedPrefs);
console.log('თემა:', savedPrefs.theme); // 'dark'

// მასივის შენახვა
const recentSearches = ['JavaScript', 'localStorage', 'cookies'];
localStorage.setItem('searches', JSON.stringify(recentSearches));

const loadedSearches = JSON.parse(localStorage.getItem('searches'));
console.log('ბოლო ძიებები:', loadedSearches);


// პრაქტიკული მაგალითი: თემის პერსისტენტურობა
const savePreferences = function (prefs) {
  localStorage.setItem('userPrefs', JSON.stringify(prefs));
  console.log('პარამეტრები შენახულია!');
};

const loadPreferences = function () {
  const saved = localStorage.getItem('userPrefs');
  if (saved) return JSON.parse(saved);
  return { theme: 'light', language: 'en', fontSize: 16 }; // ნაგულისხმევი
};

savePreferences({ theme: 'dark', language: 'en', fontSize: 18 });
const prefs = loadPreferences();
console.log('ჩატვირთული პარამეტრები:', prefs);


// პრაქტიკული მაგალითი: todo სია პერსისტენტურობით
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
    console.log(`დაემატა: "${text}"`);
  },

  toggle: function (id) {
    const todos = this.getAll();
    const todo = todos.find(function (t) { return t.id === id; });
    if (todo) {
      todo.done = !todo.done;
      localStorage.setItem(this.key, JSON.stringify(todos));
      console.log(`გადართულია: "${todo.text}" -- შესრულებული: ${todo.done}`);
    }
  },

  remove: function (id) {
    const todos = this.getAll().filter(function (t) { return t.id !== id; });
    localStorage.setItem(this.key, JSON.stringify(todos));
    console.log('Todo წაიშალა');
  },

  display: function () {
    const todos = this.getAll();
    if (todos.length === 0) {
      console.log('ჯერ არცერთი todo არ არის!');
      return;
    }
    todos.forEach(function (t) {
      console.log(`${t.done ? '[x]' : '[ ]'} ${t.text}`);
    });
  },
};

// გამოყენება:
// todoManager.add('ისწავლე localStorage');
// todoManager.add('ააგე პროექტი');
// todoManager.display();


// --- storage მოვლენა ---
// ეშვება სხვა ტაბებში, როცა localStorage იცვლება.
// არ ეშვება იმ ტაბში, რომელმაც ცვლილება განახორციელა.

window.addEventListener('storage', function (e) {
  console.log('Storage შეიცვალა სხვა ტაბში!');
  console.log('გასაღები:', e.key);
  console.log('ძველი მნიშვნელობა:', e.oldValue);
  console.log('ახალი მნიშვნელობა:', e.newValue);
  console.log('URL:', e.url);
});


/*
===============================================================
7. sessionStorage
===============================================================

sessionStorage-ს იგივე API აქვს, რაც localStorage-ს.
ძირითადი განსხვავებები:
- მონაცემები იშლება ტაბის/ფანჯრის დახურვისას
- თითოეულ ტაბს საკუთარი იზოლირებული sessionStorage აქვს (არ იზიარება)

გამოიყენეთ sessionStorage დროებითი მონაცემებისთვის: ფორმის
მდგომარეობა, ერთჯერადი შეტყობინებები, ტაბის მონაცემები.
*/

// --- იგივე API, რაც localStorage-ს ---
sessionStorage.setItem('currentPage', 'dashboard');
sessionStorage.setItem('sessionId', 'abc123xyz');

console.log('გვერდი:', sessionStorage.getItem('currentPage')); // 'dashboard'
console.log('სესია:', sessionStorage.getItem('sessionId')); // 'abc123xyz'

sessionStorage.removeItem('sessionId');
console.log('წაშლის შემდეგ:', sessionStorage.getItem('sessionId')); // null

// sessionStorage.clear(); // ამ ტაბის ყველაფერს შლის


// --- ობიექტების შენახვა (იგივე JSON პატერნი, რაც localStorage-ს) ---
const sessionData = {
  user: 'George',
  loginTime: new Date().toISOString(),
  cartItems: ['item1', 'item2'],
};

sessionStorage.setItem('session', JSON.stringify(sessionData));
const loaded = JSON.parse(sessionStorage.getItem('session'));
console.log('სესიის მონაცემები:', loaded);


// პრაქტიკული მაგალითი: ფორმის მონაცემების შენარჩუნება შემთხვევითი განახლებისას
const saveFormData = function (formId, data) {
  sessionStorage.setItem(`form_${formId}`, JSON.stringify(data));
  console.log(`ფორმა "${formId}" შენახულია`);
};

const loadFormData = function (formId) {
  const saved = sessionStorage.getItem(`form_${formId}`);
  return saved ? JSON.parse(saved) : null;
};

saveFormData('registration', {
  name: 'ნინო',
  email: 'nino@example.com',
  step: 2,
});

const restored = loadFormData('registration');
console.log('აღდგენილი ფორმა:', restored);


// პრაქტიკული მაგალითი: მისასალმებელი შეტყობინების ჩვენება სესიაში მხოლოდ ერთხელ
const hasSeenWelcome = sessionStorage.getItem('welcomeShown');
if (!hasSeenWelcome) {
  console.log('კეთილი იყოს მობრძანება! (პირველად ამ სესიაში)');
  sessionStorage.setItem('welcomeShown', 'true');
} else {
  console.log('მისალმება უკვე ნაჩვენებია -- გამოტოვება');
}


// --- როდის გამოვიყენოთ sessionStorage vs localStorage ---
//
// localStorage:
//   - მონაცემები რჩება სანამ ხელით არ წაიშლება
//   - იზიარება იმავე origin-ის ყველა ტაბს შორის
//   - საუკეთესოა: მომხმარებლის პარამეტრები, თემები, პერსისტენტური მონაცემები
//
// sessionStorage:
//   - მონაცემები იშლება ტაბის/ფანჯრის დახურვისას
//   - თითოეულ ტაბს საკუთარი იზოლირებული საცავი აქვს
//   - საუკეთესოა: დროებითი ფორმის მდგომარეობა, ერთჯერადი მოდალები, ტაბის მონაცემები


/*
===============================================================
8. COOKIES
===============================================================

Cookies ბრაუზერში შენახული მონაცემების მცირე ნაწილებია.
localStorage-სგან განსხვავებით, cookies ყოველი HTTP მოთხოვნით
სერვერზე იგზავნება. მაქსიმალური ზომა: ~4 KB ერთი cookie-სთვის.

API: document.cookie (წაკითხვა/ჩაწერა)
ატრიბუტები: expires, max-age, path, domain, secure, SameSite
*/

// --- Cookies-ის წაკითხვა ---
// აბრუნებს ყველა cookie-ს ერთ სტრინგად, წერტილ-მძიმით გამოყოფილს
console.log('ყველა cookie:', document.cookie);
// მაგ., 'username=George; theme=dark; visits=5'


// --- Cookie-ის დაყენება ---
// ყოველი მინიჭება ერთ cookie-ს ამატებს ან ანახლებს (არა ყველას)
document.cookie = 'username=George';
document.cookie = 'theme=dark';


// --- Cookie-ის ატრიბუტები: ვადის გასვლა ---

// expires -- კონკრეტული ვადის გასვლის თარიღი (UTC სტრინგი)
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 7); // 7 დღე
document.cookie = `remember=true; expires=${expiryDate.toUTCString()}`;

// max-age -- წამები ვადის გასვლამდე (გადაფარავს expires-ს, თუ ორივე მითითებულია)
document.cookie = 'session_token=abc123; max-age=3600'; // 1 საათი

// expires ან max-age-ის გარეშე, cookie არის "სესიის cookie",
// რომელიც ქრება ბრაუზერის დახურვისას.


// --- path და domain ატრიბუტები ---

// path -- URL გზა, სადაც cookie ხელმისაწვდომია
document.cookie = 'pagePref=list; path=/products';

// domain -- დომენი, სადაც cookie ხელმისაწვდომია
// document.cookie = 'tracking=abc; domain=.example.com';

// Cookie მრავალი ატრიბუტით
document.cookie = 'user_id=12345; max-age=86400; path=/; secure; SameSite=Strict';


// --- Cookie-ის წაშლა ---
// max-age 0-ზე ან expires წარსულში დააყენეთ

// ვარიანტი 1: expires წარსულის თარიღზე
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

// ვარიანტი 2: max-age=0
document.cookie = 'theme=; max-age=0; path=/';


// --- დამხმარე ფუნქციები cookies-თან სამუშაოდ ---

// Cookie-ის დაყენება სახელით, მნიშვნელობით და ვადით (დღეებში)
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

// კონკრეტული cookie-ის მიღება სახელით (აბრუნებს null-ს თუ ვერ იპოვა)
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

// Cookie-ის წაშლა სახელით
const deleteCookie = function (name) {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

// ყველა cookie-ის მიღება ჩვეულებრივ ობიექტად
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

// დამხმარე ფუნქციების გამოყენება
setCookie('visitor_name', 'ნინო', 30); // 30 დღე
console.log('სტუმარი:', getCookie('visitor_name')); // 'ნინო'
console.log('ყველა cookie:', getAllCookies());
// deleteCookie('visitor_name');


// პრაქტიკული მაგალითი: მომხმარებლის სახელის დამახსოვრება ვიზიტებს შორის
const greetUser = function () {
  const savedName = getCookie('user_name');
  if (savedName) {
    console.log(`კეთილი იყოს შენი დაბრუნება, ${savedName}!`);
  } else {
    const name = 'გიორგი'; // სიმულირებული შეყვანა
    setCookie('user_name', name, 365);
    console.log(`სასიამოვნოა შენი გაცნობა, ${name}!`);
  }
};

greetUser();


// პრაქტიკული მაგალითი: გვერდის ვიზიტების თვალყურის დევნა
const trackVisits = function () {
  let visits = parseInt(getCookie('visit_count')) || 0;
  visits++;
  setCookie('visit_count', String(visits), 365);
  console.log(`ვიზიტების რაოდენობა: ${visits}`);
};

trackVisits();


// --- Cookie-ის ატრიბუტების შეჯამება ---
// expires    -- კონკრეტული ვადის გასვლის თარიღი (UTC სტრინგი)
// max-age    -- წამები ვადის გასვლამდე (გადაფარავს expires-ს)
// path       -- URL გზა, სადაც cookie ხელმისაწვდომია (ნაგულისხმევი: მიმდინარე გზა)
// domain     -- დომენი, სადაც cookie ხელმისაწვდომია (ნაგულისხმევი: მიმდინარე დომენი)
// secure     -- მხოლოდ HTTPS-ით იგზავნება
// SameSite   -- აკონტროლებს cross-site გაგზავნას:
//               Strict: მხოლოდ same-site
//               Lax: same-site + ზედა დონის ნავიგაცია (ნაგულისხმევი თანამედროვე ბრაუზერებში)
//               None: cross-site ნებადართულია (საჭიროებს secure ფლაგს)


/*
===============================================================
9. შედარება: COOKIES vs localStorage vs sessionStorage
===============================================================

თვისება              | Cookies          | localStorage     | sessionStorage
---------------------|------------------|------------------|------------------
მაქს. ზომა           | ~4 KB            | ~5-10 MB         | ~5-10 MB
სერვერზე იგზავნება   | დიახ (ყოველ req) | არა              | არა
ვადის გასვლა         | კონფიგურებადი    | არასდროს (ხელით) | ტაბის დახურვა
არეალი               | ყველა ტაბი       | ყველა ტაბი       | ერთი ტაბი
სერვერს კითხავს      | დიახ             | არა              | არა
საუკეთესოა           | ავტორიზაციის     | მომხმარებლის     | დროებითი
                     | ტოკენები,        | პარამეტრები,     | მდგომარეობა,
                     | სერვერის კონფიგ  | ქეშირებული data  | ფორმის დრაფტები
*/
