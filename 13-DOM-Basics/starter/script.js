"use strict";

////////////////////////////////////
// ინტერაქტიული დემო — Starter
////////////////////////////////////

// ეს ფაილი შეიცავს TODO-ებს, რომლებიც თქვენ უნდა შეავსოთ.
// ყოველი TODO-ს აღწერაში მოცემულია რა კონცეფციას იყენებს
// და რა უნდა გააკეთოს ფუნქციამ.


// ========== Section 1: getElementById ==========

// TODO 1: getElementById-ით ამოიღეთ #greeting-text ელემენტი
// და შეცვალეთ მისი textContent: "Hello, DOM World!"
// კონცეფცია: document.getElementById(), textContent


// TODO 2: getElementById-ით ამოიღეთ #counter-display ელემენტი.
// შექმენით ცვლადი count = 0.
// დაამატეთ click event listener-ები #btn-increment, #btn-decrement, #btn-reset ღილაკებზე:
//   - increment: count + 1, განაახლეთ counter-display-ის textContent
//   - decrement: count - 1 (მინიმუმ 0), განაახლეთ counter-display-ის textContent
//   - reset: count = 0, განაახლეთ counter-display-ის textContent
// კონცეფცია: getElementById, textContent, addEventListener


// TODO 3: getElementById-ით ამოიღეთ #output-1 ელემენტი.
// შეცვალეთ მისი innerHTML ისე, რომ შიგნით იყოს:
// "<strong>getElementById</strong> — ელემენტს ეძებს <em>id</em> ატრიბუტით"
// კონცეფცია: getElementById, innerHTML


// ========== Section 2: querySelector & querySelectorAll ==========

// TODO 4: querySelector-ით ამოიღეთ .profile-name ელემენტი
// და შეცვალეთ მისი textContent "Giorgi Lomidze"-ზე.
// ასევე querySelector-ით ამოიღეთ .profile-role და შეცვალეთ "Full Stack Developer"-ზე.
// კონცეფცია: querySelector (კლასით)


// TODO 5: querySelector-ით ამოიღეთ #avatar ელემენტი
// და შეცვალეთ მისი textContent "G"-ზე (Giorgi-ს პირველი ასო).
// ასევე შეცვალეთ მისი style.background "G"-სთვის შესაფერის ფერზე, მაგ. '#1e88e5'
// კონცეფცია: querySelector (id-ით), textContent, style


// TODO 6: #btn-update-profile ღილაკზე click listener-ის დამატება.
// კლიკისას querySelector-ით ამოიღეთ .profile-email და შეცვალეთ
// textContent: "giorgi@skillwill.ge"
// კონცეფცია: querySelector, addEventListener


// TODO 7: querySelectorAll-ით ამოიღეთ ყველა .task-item ელემენტი.
// #btn-count-tasks კლიკზე #output-2-ში აჩვენეთ რამდენი task-ია სულ.
// კონცეფცია: querySelectorAll, length


// TODO 8: #btn-complete-first კლიკზე querySelector-ით
// ამოიღეთ პირველი .task-item და დაამატეთ კლასი 'completed'.
// კონცეფცია: querySelector (პირველი ემთხვევა), classList.add


// TODO 9: #btn-highlight-high კლიკზე querySelectorAll-ით
// ამოიღეთ ყველა .priority-high ელემენტი და თითოეულის
// მშობელ ელემენტს (.task-item) შეუცვალეთ background ფერი '#fff3e0'-ზე.
// გამოიყენეთ for ციკლი ან forEach.
// კონცეფცია: querySelectorAll, parentElement, style


// ========== Section 3: getElementsByClassName & getElementsByTagName ==========

// TODO 10: getElementsByClassName-ით ამოიღეთ ყველა 'color-box' ელემენტი.
// #btn-count-boxes კლიკზე #output-3-ში აჩვენეთ რამდენი color-box-ია.
// კონცეფცია: getElementsByClassName, length


// TODO 11: #btn-fade-boxes კლიკზე getElementsByClassName('color-box')-ით
// ამოღებულ ყველა ელემენტს შეუცვალეთ opacity 0.3-ზე.
// #btn-restore-boxes კლიკზე დააბრუნეთ opacity 1-ზე.
// კონცეფცია: getElementsByClassName, style.opacity, for ციკლი


// TODO 12: getElementsByTagName('a')-ით ამოიღეთ #main-nav-ში არსებული ლინკები.
// #btn-count-links კლიკზე #output-3-ში აჩვენეთ ლინკების რაოდენობა.
// #btn-uppercase-links კლიკზე თითოეული ლინკის textContent გადაიყვანეთ uppercase-ში.
// მინიშნება: ჯერ getElementById-ით ამოიღეთ #main-nav, შემდეგ მასზე გამოიძახეთ getElementsByTagName
// კონცეფცია: getElementsByTagName, textContent, toUpperCase


// TODO 13: getElementsByTagName('tr')-ით ამოიღეთ #student-table-ში არსებული რიგები.
// #btn-count-rows კლიკზე #output-3-ში აჩვენეთ tbody-ში რამდენი მონაცემთა რიგია (thead-ის გარეშე).
// #btn-highlight-top კლიკზე ყველა რიგი, სადაც შეფასება >= 90, background გახადეთ '#e8f5e9'.
// მინიშნება: tbody-ს რიგები index 1-დან იწყება (ან tbody-ზე getElementsByTagName)
// კონცეფცია: getElementsByTagName, children, style


// ========== Section 4: innerHTML, textContent & style ==========

// TODO 14: #btn-show-inner კლიკზე #output-4-ში აჩვენეთ #content-area-ს innerHTML.
// #btn-show-text კლიკზე #output-4-ში აჩვენეთ #content-area-ს textContent.
// კონცეფცია: innerHTML vs textContent (კითხვა)


// TODO 15: #btn-set-inner კლიკზე #content-area-ს innerHTML შეუცვალეთ:
// "<h3 style='color: #3949ab'>Updated!</h3><p>This was set with <code>innerHTML</code></p>"
// #btn-set-text კლიკზე #content-area-ს textContent შეუცვალეთ:
// "This was set with textContent — HTML tags won't render here"
// კონცეფცია: innerHTML vs textContent (ჩაწერა)


// TODO 16: style თვისებების შეცვლა:
// #btn-style-color კლიკზე #style-target-ის color შეუცვალეთ '#e53935'-ზე
// #btn-style-bg კლიკზე #style-target-ის backgroundColor შეუცვალეთ '#1a237e'-ზე და color '#fff'-ზე
// #btn-style-size კლიკზე #style-target-ის fontSize შეუცვალეთ '2rem'-ზე
// #btn-style-reset კლიკზე ყველა style წაშალეთ: element.style.cssText = ''
// კონცეფცია: style.property, style.cssText


// TODO 17: innerHTML-ით დინამიური კონტენტის შექმნა.
// #btn-add-success კლიკზე #notification-area-ს innerHTML-ს დაუმატეთ (+=):
//   '<div class="notification success">Operation completed successfully!</div>'
// #btn-add-error კლიკზე: '<div class="notification error">Something went wrong!</div>'
// #btn-add-info კლიკზე: '<div class="notification info">Here is some useful information.</div>'
// #btn-clear-notifications კლიკზე: notification-area-ს innerHTML = ''
// კონცეფცია: innerHTML (დამატება += და გასუფთავება)
