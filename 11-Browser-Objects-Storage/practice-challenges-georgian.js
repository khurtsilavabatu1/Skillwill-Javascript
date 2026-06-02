'use strict';

////////////////////////////////////
// ბრაუზერის ობიექტები და სტორიჯი
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - ფანჯრის ინსპექტორი
// (Window ობიექტი)

/*
გინდათ ააწყოთ უტილიტა, რომელიც შეისწავლის ბრაუზერის Window ობიექტს
და ტაიმერებს გამოიყენებს ინფორმაციის ინტერვალებით საჩვენებლად.

1. შექმენით ფუნქცია 'getViewportInfo', რომელიც აბრუნებს ობიექტს:
   - innerWidth: window.innerWidth
   - innerHeight: window.innerHeight
   - outerWidth: window.outerWidth
   - outerHeight: window.outerHeight
   - scrollX: window.scrollX
   - scrollY: window.scrollY
2. დალოგეთ viewport-ის ინფორმაციის ობიექტი
3. გამოიყენეთ window.setTimeout რომ დალოგოთ "ეს შეტყობინება 2 წამის შემდეგ გამოჩნდა!"
   2000ms დაყოვნების შემდეგ. შეინახეთ ტაიმერის ID ცვლადში 'delayTimer'.
4. შექმენით მთვლელის ცვლადი 0-დან. გამოიყენეთ window.setInterval
   მთვლელის ყოველ 1 წამში გასაზრდელად და "ტიკი: X" დასალოგად,
   სადაც X არის მთვლელის მნიშვნელობა. შეინახეთ ინტერვალის ID 'tickTimer'-ში.
5. გამოიყენეთ კიდევ ერთი setTimeout ინტერვალის 5 წამის შემდეგ
   გასაჩერებლად clearInterval(tickTimer)-ის გამოძახებით.
   დალოგეთ "ტაიმერი გაჩერდა 5 ტიკის შემდეგ!"
6. შექმენით ფუნქცია 'checkWindowFeatures', რომელიც ლოგავს
   არსებობს თუ არა შემდეგი თვისებები window ობიექტზე:
   - localStorage (typeof window.localStorage !== 'undefined')
   - sessionStorage
   - history
   - navigator
   თითოეული დალოგეთ როგორც "localStorage: ხელმისაწვდომი" ან "localStorage: მიუწვდომელი"
7. გამოიძახეთ checkWindowFeatures და დალოგეთ შეჯამება

სატესტო მონაცემები: გამოიყენეთ ბრაუზერის ნაგულისხმევი viewport-ის ზომები

მინიშნება: window.innerWidth იძლევა viewport-ის სიგანეს სქროლბარის ჩათვლით
მინიშნება: setTimeout აბრუნებს რიცხვით ტაიმერის ID-ს, რომელიც clearTimeout-ს გადაეცემა
მინიშნება: setInterval მეორდება სანამ clearInterval არ გამოიძახებთ

წარმატებები 😀
*/

// const getViewportInfo = function () {
//   return {
//     innerWidth: window.innerWidth,
//     innerHeight: window.innerHeight,
//     outerWidth: window.outerWidth,
//     outerHeight: window.outerHeight,
//     scrollX: window.scrollX,
//     scrollY: window.scrollY,
//   };
// };

// console.log('--- Viewport-ის ინფო ---');
// console.log(getViewportInfo());

// // დაყოვნებული შეტყობინება
// const delayTimer = setTimeout(function () {
//   console.log('ეს შეტყობინება 2 წამის შემდეგ გამოჩნდა!');
// }, 2000);

// // ინტერვალის მთვლელი
// let counter = 0;
// const tickTimer = setInterval(function () {
//   counter++;
//   console.log(`ტიკი: ${counter}`);
// }, 1000);

// // ინტერვალის გაჩერება 5 წამის შემდეგ
// setTimeout(function () {
//   clearInterval(tickTimer);
//   console.log('ტაიმერი გაჩერდა 5 ტიკის შემდეგ!');
// }, 5500);

// const checkWindowFeatures = function () {
//   const features = ['localStorage', 'sessionStorage', 'history', 'navigator'];
//   console.log('--- Window-ის ფიჩერები ---');
//   for (let i = 0; i < features.length; i++) {
//     const available = typeof window[features[i]] !== 'undefined';
//     console.log(`${features[i]}: ${available ? 'ხელმისაწვდომი' : 'მიუწვდომელი'}`);
//   }
// };

// checkWindowFeatures();


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - მოწყობილობის დეტექტივი
// (Navigator + Screen)

/*
ააწყვეთ ფუნქცია, რომელიც აგროვებს ბრაუზერისა და მოწყობილობის
ყოვლისმომცველ ინფორმაციას Navigator-ისა და Screen ობიექტების გამოყენებით,
და აფორმატებს მას წაკითხვადი ანგარიშის სახით.

1. შექმენით ფუნქცია 'getBrowserInfo', რომელიც აბრუნებს ობიექტს:
   - userAgent: navigator.userAgent
   - language: navigator.language
   - languages: navigator.languages (სასურველი ენების მასივი)
   - platform: navigator.platform
   - online: navigator.onLine (boolean)
   - cookiesEnabled: navigator.cookieEnabled
2. შექმენით ფუნქცია 'getScreenInfo', რომელიც აბრუნებს ობიექტს:
   - width: screen.width
   - height: screen.height
   - availWidth: screen.availWidth
   - availHeight: screen.availHeight
   - colorDepth: screen.colorDepth
   - pixelRatio: window.devicePixelRatio
3. შექმენით ფუნქცია 'detectBrowser', რომელიც კითხულობს navigator.userAgent-ს
   და აბრუნებს გამარტივებულ ბრაუზერის სახელს: 'Chrome', 'Firefox', 'Safari',
   'Edge', ან 'Unknown'
4. შექმენით ფუნქცია 'generateReport', რომელიც იძახებს ყველა ზემოთ
   მოცემულ ფუნქციას და აბრუნებს ფორმატირებულ მრავალხაზიან სტრინგ-ანგარიშს:
   "=== მოწყობილობის დეტექტივის ანგარიში ===
    ბრაუზერი: Chrome
    User Agent: Mozilla/5.0 ...
    ენა: en-US
    ონლაინ: დიახ
    ეკრანი: 1920x1080
    პიქსელის თანაფარდობა: 2x
    ======================================="
5. დაამატეთ online/offline ივენთის მსმენელი, რომელიც ლოგავს როცა
   კავშირის სტატუსი იცვლება: "კავშირის სტატუსი შეიცვალა: ონლაინ" ან "...ოფლაინ"
6. დალოგეთ სრული ანგარიში

მინიშნება: შეამოწმეთ 'Edg' 'Chrome'-ზე ადრე userAgent-ში, რადგან Edge-იც შეიცავს 'Chrome'-ს
მინიშნება: navigator.onLine აბრუნებს boolean-ს — გადააქციეთ 'დიახ'/'არა'-ად საჩვენებლად
მინიშნება: გამოიყენეთ template literals \n-ით მრავალხაზიანი სტრინგებისთვის

წარმატებები 😀
*/

// const getBrowserInfo = function () {
//   return {
//     userAgent: navigator.userAgent,
//     language: navigator.language,
//     languages: navigator.languages,
//     platform: navigator.platform,
//     online: navigator.onLine,
//     cookiesEnabled: navigator.cookieEnabled,
//   };
// };

// const getScreenInfo = function () {
//   return {
//     width: screen.width,
//     height: screen.height,
//     availWidth: screen.availWidth,
//     availHeight: screen.availHeight,
//     colorDepth: screen.colorDepth,
//     pixelRatio: window.devicePixelRatio,
//   };
// };

// const detectBrowser = function () {
//   const ua = navigator.userAgent;
//   if (ua.includes('Edg')) return 'Edge';
//   if (ua.includes('Chrome')) return 'Chrome';
//   if (ua.includes('Firefox')) return 'Firefox';
//   if (ua.includes('Safari')) return 'Safari';
//   return 'Unknown';
// };

// const generateReport = function () {
//   const browser = getBrowserInfo();
//   const scr = getScreenInfo();
//   const browserName = detectBrowser();

//   return `
// === მოწყობილობის დეტექტივის ანგარიში ===
// ბრაუზერი: ${browserName}
// User Agent: ${browser.userAgent}
// ენა: ${browser.language}
// ყველა ენა: ${browser.languages.join(', ')}
// პლატფორმა: ${browser.platform}
// ონლაინ: ${browser.online ? 'დიახ' : 'არა'}
// ქუქიები ჩართულია: ${browser.cookiesEnabled ? 'დიახ' : 'არა'}
// ეკრანი: ${scr.width}x${scr.height}
// ხელმისაწვდომი ეკრანი: ${scr.availWidth}x${scr.availHeight}
// ფერის სიღრმე: ${scr.colorDepth}-ბიტი
// პიქსელის თანაფარდობა: ${scr.pixelRatio}x
// =======================================`;
// };

// // კავშირის ცვლილებების მოსმენა
// window.addEventListener('online', function () {
//   console.log('კავშირის სტატუსი შეიცვალა: ონლაინ');
// });
// window.addEventListener('offline', function () {
//   console.log('კავშირის სტატუსი შეიცვალა: ოფლაინ');
// });

// // ანგარიშის გენერირება და ჩვენება
// console.log(generateReport());
// console.log(`აღმოჩენილი ბრაუზერი: ${detectBrowser()}`);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - URL პარსერი
// (Location ობიექტი)

/*
ააწყვეთ უტილიტა ფუნქციების ნაკრები, რომელიც ბრაუზერის Location
ობიექტთან და URLSearchParams-თან მუშაობს URL-ების დასაპარსად და ასაწყობად.

1. შექმენით ფუნქცია 'parseCurrentURL', რომელიც აბრუნებს ობიექტს
   შემდეგი თვისებებით window.location-იდან:
   - protocol: location.protocol (მაგ. 'https:')
   - host: location.host (მაგ. 'example.com:3000')
   - hostname: location.hostname (მაგ. 'example.com')
   - port: location.port (მაგ. '3000')
   - pathname: location.pathname (მაგ. '/products/shoes')
   - search: location.search (მაგ. '?color=red&size=42')
   - hash: location.hash (მაგ. '#section1')
   - href: location.href (სრული URL)
2. შექმენით ფუნქცია 'getQueryParams', რომელიც იღებს საძიებო სტრინგს
   (როგორიც არის '?color=red&size=42') და აბრუნებს ობიექტს ყველა
   გასაღები-მნიშვნელობის წყვილით URLSearchParams-ის გამოყენებით:
   { color: 'red', size: '42' }
3. შექმენით ფუნქცია 'buildQueryString', რომელიც იღებს გასაღები-მნიშვნელობის
   წყვილების ობიექტს და აბრუნებს query სტრინგს URLSearchParams-ით:
   { color: 'red', size: '42' } → '?color=red&size=42'
4. შექმენით ფუნქცია 'addQueryParam', რომელიც იღებს მიმდინარე საძიებო
   სტრინგს, გასაღებს და მნიშვნელობას, და აბრუნებს განახლებულ საძიებო
   სტრინგს ახალი პარამეტრით (ან განახლებულით, თუ უკვე არსებობს)
5. შექმენით ფუნქცია 'removeQueryParam', რომელიც იღებს საძიებო სტრინგს
   და გასაღებს, და აბრუნებს საძიებო სტრინგს ამ პარამეტრის გარეშე
6. აჩვენეთ ყველა ფუნქცია: დააპარსეთ მიმდინარე URL, ააწყვეთ query სტრინგები,
   დაამატეთ და წაშალეთ პარამეტრები

სატესტო მონაცემები: დააპარსეთ: '?category=shoes&sort=price&color=red'
           ააწყვეთ: { page: '2', limit: '10', filter: 'active' }
           დაამატეთ: 'brand' = 'nike' სატესტო საძიებო სტრინგში
           წაშალეთ: 'sort' სატესტო საძიებო სტრინგიდან

მინიშნება: new URLSearchParams('?key=val') ქმნის პარამეტრების ობიექტს
მინიშნება: params.get('key') აბრუნებს მნიშვნელობას, params.entries() — ყველა წყვილს
მინიშნება: params.set(key, value) ამატებს ან განაახლებს პარამეტრს
მინიშნება: params.delete(key) შლის პარამეტრს

წარმატებები 😀
*/

// const parseCurrentURL = function () {
//   return {
//     protocol: location.protocol,
//     host: location.host,
//     hostname: location.hostname,
//     port: location.port,
//     pathname: location.pathname,
//     search: location.search,
//     hash: location.hash,
//     href: location.href,
//   };
// };

// const getQueryParams = function (searchString) {
//   const params = new URLSearchParams(searchString);
//   const result = {};
//   for (const [key, value] of params.entries()) {
//     result[key] = value;
//   }
//   return result;
// };

// const buildQueryString = function (paramsObj) {
//   const params = new URLSearchParams();
//   for (const key in paramsObj) {
//     params.set(key, paramsObj[key]);
//   }
//   return '?' + params.toString();
// };

// const addQueryParam = function (searchString, key, value) {
//   const params = new URLSearchParams(searchString);
//   params.set(key, value);
//   return '?' + params.toString();
// };

// const removeQueryParam = function (searchString, key) {
//   const params = new URLSearchParams(searchString);
//   params.delete(key);
//   return '?' + params.toString();
// };

// // მიმდინარე URL-ის ინფორმაციის ჩვენება
// const urlInfo = parseCurrentURL();
// console.log('--- მიმდინარე URL-ის ინფო ---');
// console.log(urlInfo);

// // Query პარამეტრების დაპარსვა
// const testSearch = '?category=shoes&sort=price&color=red';
// const queryParams = getQueryParams(testSearch);
// console.log('--- Query პარამეტრების დაპარსვა ---');
// console.log(`საძიებო სტრინგი: ${testSearch}`);
// console.log('დაპარსული:', queryParams);

// // Query სტრინგის აწყობა
// const newQuery = buildQueryString({ page: '2', limit: '10', filter: 'active' });
// console.log(`\n--- Query სტრინგის აწყობა ---`);
// console.log(`აწყობილი: ${newQuery}`);

// // პარამეტრის დამატება
// const withBrand = addQueryParam(testSearch, 'brand', 'nike');
// console.log(`\n--- პარამეტრის დამატება ---`);
// console.log(`მანამდე: ${testSearch}`);
// console.log(`brand=nike-ის დამატების შემდეგ: ${withBrand}`);

// // პარამეტრის წაშლა
// const withoutSort = removeQueryParam(testSearch, 'sort');
// console.log(`\n--- პარამეტრის წაშლა ---`);
// console.log(`მანამდე: ${testSearch}`);
// console.log(`sort-ის წაშლის შემდეგ: ${withoutSort}`);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - თემის შემნახველი
// (localStorage)

/*
განახორციელეთ თემის პრეფერენციების სისტემა, რომელიც მომხმარებლის
პარამეტრებს localStorage-ში ინახავს JSON სერიალიზაციით.
პარამეტრები უნდა შენარჩუნდეს გვერდის გადატვირთვის შემდეგაც.

1. შექმენით ნაგულისხმევი პარამეტრების ობიექტი შემდეგი თვისებებით:
   - theme: 'light'
   - fontSize: 16
   - language: 'en'
   - sidebarCollapsed: false
2. შექმენით ფუნქცია 'saveSettings', რომელიც იღებს პარამეტრების ობიექტს
   და ინახავს localStorage-ში JSON.stringify-ის გამოყენებით.
   გამოიყენეთ გასაღები 'appSettings'. შენახვის შემდეგ დალოგეთ დადასტურება.
3. შექმენით ფუნქცია 'loadSettings', რომელიც კითხულობს localStorage-იდან
   გასაღებით 'appSettings', აპარსავს JSON.parse-ით და აბრუნებს ობიექტს.
   თუ ჯერ არაფერი არ არის შენახული, დააბრუნეთ ნაგულისხმევი პარამეტრები.
4. შექმენით ფუნქცია 'updateSetting', რომელიც იღებს გასაღებს და მნიშვნელობას,
   ტვირთავს მიმდინარე პარამეტრებს, განაახლებს მითითებულ გასაღებს,
   ინახავს განახლებულ პარამეტრებს და აბრუნებს ახალ პარამეტრების ობიექტს.
5. შექმენით ფუნქცია 'toggleTheme', რომელიც:
   ა) ტვირთავს მიმდინარე პარამეტრებს loadSettings-ით
   ბ) გადართავს თემას 'light'-სა და 'dark'-ს შორის
   გ) ინახავს განახლებულ პარამეტრებს
   დ) აბრუნებს ახალი თემის მნიშვნელობას
6. შექმენით ფუნქცია 'resetSettings', რომელიც შლის 'appSettings'-ს
   localStorage-იდან და აბრუნებს ნაგულისხმევ პარამეტრებს
7. აჩვენეთ სრული ნაკადი:
   - შეინახეთ საწყისი პარამეტრები
   - გადართეთ თემა ორჯერ (light → dark → light)
   - განაახლეთ fontSize 20-ზე
   - ჩატვირთეთ და გადაამოწმეთ საბოლოო პარამეტრები
   - დააბრუნეთ ნაგულისხმევ მნიშვნელობებზე

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი პარამეტრების ობიექტი

მინიშნება: JSON.stringify ობიექტს სტრინგად გარდაქმნის შესანახად
მინიშნება: JSON.parse JSON სტრინგს ისევ ობიექტად გარდაქმნის
მინიშნება: localStorage.getItem აბრუნებს null-ს, თუ გასაღები არ არსებობს
მინიშნება: localStorage.removeItem(key) შლის კონკრეტულ გასაღებს

წარმატებები 😀
*/

// const defaultSettings = {
//   theme: 'light',
//   fontSize: 16,
//   language: 'en',
//   sidebarCollapsed: false,
// };

// const saveSettings = function (settingsObj) {
//   localStorage.setItem('appSettings', JSON.stringify(settingsObj));
//   console.log('პარამეტრები შენახულია:', settingsObj);
// };

// const loadSettings = function () {
//   const stored = localStorage.getItem('appSettings');
//   if (stored) {
//     return JSON.parse(stored);
//   } else {
//     return { ...defaultSettings };
//   }
// };

// const updateSetting = function (key, value) {
//   const current = loadSettings();
//   current[key] = value;
//   saveSettings(current);
//   return current;
// };

// const toggleTheme = function () {
//   const current = loadSettings();
//   current.theme = current.theme === 'light' ? 'dark' : 'light';
//   saveSettings(current);
//   return current.theme;
// };

// const resetSettings = function () {
//   localStorage.removeItem('appSettings');
//   console.log('პარამეტრები ნაგულისხმევზე დაბრუნდა.');
//   return { ...defaultSettings };
// };

// // === სრული დემო ნაკადი ===

// // ნაბიჯი 1: საწყისი პარამეტრების შენახვა
// console.log('--- ნაბიჯი 1: საწყისი პარამეტრების შენახვა ---');
// saveSettings(defaultSettings);

// // ნაბიჯი 2: თემის ორჯერ გადართვა
// console.log('\n--- ნაბიჯი 2: თემის გადართვა ---');
// const firstToggle = toggleTheme();
// console.log(`თემა პირველი გადართვის შემდეგ: ${firstToggle}`); // 'dark'

// const secondToggle = toggleTheme();
// console.log(`თემა მეორე გადართვის შემდეგ: ${secondToggle}`); // 'light'

// // ნაბიჯი 3: fontSize-ის განახლება
// console.log('\n--- ნაბიჯი 3: შრიფტის ზომის განახლება ---');
// const updated = updateSetting('fontSize', 20);
// console.log('პარამეტრები fontSize განახლების შემდეგ:', updated);

// // ნაბიჯი 4: ჩატვირთვა და გადამოწმება
// console.log('\n--- ნაბიჯი 4: პარამეტრების გადამოწმება ---');
// const finalSettings = loadSettings();
// console.log('საბოლოო პარამეტრები:', finalSettings);

// // ნაბიჯი 5: რესეტი
// console.log('\n--- ნაბიჯი 5: რესეტი ---');
// const resetResult = resetSettings();
// console.log('რესეტის შემდეგ:', resetResult);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - სესიის მენეჯერი
// (sessionStorage + Cookies)

/*
ააწყვეთ სესიის მართვის სისტემა, რომელიც sessionStorage-ს იყენებს
დროებითი მონაცემებისთვის, ქუქიებს — მუდმივი ტოკენებისთვის,
და ადარებს სხვადასხვა სტორიჯის მეთოდებს.

1. შექმენით ფუნქცია 'setCookie', რომელიც იღებს სახელს, მნიშვნელობას
   და დღეების პარამეტრს. ფუნქციამ უნდა:
   ა) გამოთვალოს ვადის გასვლის თარიღი new Date()-ისა და setTime()-ის გამოყენებით
   ბ) ააწყოს ქუქის სტრინგი: "name=value;expires=...;path=/"
   გ) დააყენოს ქუქი document.cookie-ს გამოყენებით
2. შექმენით ფუნქცია 'getCookie', რომელიც იღებს ქუქის სახელს და
   აბრუნებს მის მნიშვნელობას (ან null-ს, თუ ვერ იპოვა). ფუნქციამ უნდა:
   ა) გაყოს document.cookie '; '-ით ცალკეული ქუქიების მისაღებად
   ბ) მოძებნოს ის, რომელიც იწყება "name="-ით ციკლის გამოყენებით
   გ) დააბრუნოს მნიშვნელობის ნაწილი ('='-ის შემდეგ)
3. შექმენით ფუნქცია 'deleteCookie', რომელიც იღებს ქუქის სახელს
   და შლის მას ვადის გასვლის თარიღის წარსულში დაყენებით
4. შექმენით ფუნქცია 'saveSessionData', რომელიც იღებს გასაღებს და
   ობიექტს, და ინახავს sessionStorage-ში JSON.stringify-ის გამოყენებით
5. შექმენით ფუნქცია 'getSessionData', რომელიც იღებს გასაღებს და
   აბრუნებს დაპარსულ ობიექტს sessionStorage-იდან (ან null-ს, თუ ვერ იპოვა)
6. შექმენით ფუნქცია 'compareStorageMethods', რომელიც ლოგავს
   ქუქიების, localStorage-ისა და sessionStorage-ის შედარების ცხრილს:
   - მაქსიმალური ზომა
   - პერსისტენტულობა (როდის ამოიწურება მონაცემები)
   - იგზავნება სერვერზე? (დიახ/არა)
   - API-ის სიმარტივე
7. აჩვენეთ სრული ნაკადი:
   - დააყენეთ ქუქი 'sessionToken' მნიშვნელობით 'abc123' 7 დღით
   - შეინახეთ მომხმარებლის პრეფერენციები sessionStorage-ში
   - წაიკითხეთ ორივე მნიშვნელობა უკან
   - დალოგეთ შედარების ცხრილი
   - წაშალეთ ქუქი და გაასუფთავეთ სესიის მონაცემები

სატესტო მონაცემები:
  ქუქი: name='sessionToken', value='abc123', days=7
  სესია: key='userPrefs', value={ theme: 'dark', lang: 'ka' }

მინიშნება: document.cookie არ გადაწერს ყველა ქუქის — მისი დაყენება ერთ ქუქის ამატებს/ანახლებს
მინიშნება: ქუქის წასაშლელად დააყენეთ expires წარსულ თარიღზე
მინიშნება: 1 დღე = 24 * 60 * 60 * 1000 მილიწამი
მინიშნება: sessionStorage-ის მონაცემები ქრება ტაბის დახურვისას

წარმატებები 😀
*/

// const setCookie = function (name, value, days) {
//   const date = new Date();
//   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//   const expires = 'expires=' + date.toUTCString();
//   document.cookie = `${name}=${value};${expires};path=/`;
//   console.log(`ქუქი დაყენებულია: ${name}=${value} (ვადა ${days} დღე)`);
// };

// const getCookie = function (name) {
//   const cookies = document.cookie.split('; ');
//   for (let i = 0; i < cookies.length; i++) {
//     if (cookies[i].startsWith(name + '=')) {
//       return cookies[i].split('=')[1];
//     }
//   }
//   return null;
// };

// const deleteCookie = function (name) {
//   document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
//   console.log(`ქუქი წაშლილია: ${name}`);
// };

// const saveSessionData = function (key, data) {
//   sessionStorage.setItem(key, JSON.stringify(data));
//   console.log(`სესიის მონაცემები შენახულია: ${key}`, data);
// };

// const getSessionData = function (key) {
//   const stored = sessionStorage.getItem(key);
//   if (stored) {
//     return JSON.parse(stored);
//   }
//   return null;
// };

// const compareStorageMethods = function () {
//   console.log('\n=== სტორიჯის მეთოდების შედარება ===');
//   console.log('| ფიჩერი           | ქუქიები        | localStorage    | sessionStorage  |');
//   console.log('|------------------|----------------|-----------------|-----------------|');
//   console.log('| მაქს. ზომა       | ~4 KB          | ~5-10 MB        | ~5-10 MB        |');
//   console.log('| პერსისტენტობა    | expires-ით     | გასუფთავებამდე  | ტაბის დახურვამდე|');
//   console.log('| სერვერზე იგზავნება| დიახ (ავტო)   | არა             | არა             |');
//   console.log('| API სიმარტივე    | ხელით სტრინგი  | მარტივი key-val | მარტივი key-val |');
//   console.log('| სკოუფი           | ყველა ტაბი     | ყველა ტაბი      | ერთი ტაბი       |');
//   console.log('====================================');
// };

// // === სრული დემო ნაკადი ===

// // ნაბიჯი 1: ქუქის დაყენება
// console.log('--- ნაბიჯი 1: ქუქის დაყენება ---');
// setCookie('sessionToken', 'abc123', 7);

// // ნაბიჯი 2: სესიის მონაცემების შენახვა
// console.log('\n--- ნაბიჯი 2: სესიის მონაცემების შენახვა ---');
// const userPrefs = { theme: 'dark', lang: 'ka' };
// saveSessionData('userPrefs', userPrefs);

// // ნაბიჯი 3: ორივეს უკან წაკითხვა
// console.log('\n--- ნაბიჯი 3: მონაცემების წაკითხვა ---');
// const token = getCookie('sessionToken');
// console.log(`ქუქი 'sessionToken': ${token}`);

// const prefs = getSessionData('userPrefs');
// console.log(`სესია 'userPrefs':`, prefs);

// console.log(`\nდაუმუშავებელი document.cookie: ${document.cookie}`);

// // ნაბიჯი 4: შედარება
// compareStorageMethods();

// // ნაბიჯი 5: გასუფთავება
// console.log('\n--- ნაბიჯი 5: გასუფთავება ---');
// deleteCookie('sessionToken');
// sessionStorage.removeItem('userPrefs');
// console.log('ყველა სესიის მონაცემი გასუფთავებულია.');
