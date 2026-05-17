'use strict';

////////////////////////////////////
// მოდალური ფანჯარის პროექტი
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - აკორდეონის კომპონენტი
// (classList.toggle + querySelectorAll + for ციკლი)

/*
ააწყვეთ აკორდეონის კომპონენტი, სადაც სექციის სათაურზე დაკლიკებით
ის გაიხსნება/დაიხურება classList.toggle-ის გამოყენებით.

1. წარმოიდგინეთ, რომ გაქვთ ეს HTML სტრუქტურა:
   <div class="accordion">
     <div class="accordion-item">
       <button class="accordion-header">სექცია 1</button>
       <div class="accordion-content hidden">სექცია 1-ის კონტენტი</div>
     </div>
     <div class="accordion-item">
       <button class="accordion-header">სექცია 2</button>
       <div class="accordion-content hidden">სექცია 2-ის კონტენტი</div>
     </div>
     <div class="accordion-item">
       <button class="accordion-header">სექცია 3</button>
       <div class="accordion-content hidden">სექცია 3-ის კონტენტი</div>
     </div>
   </div>

2. მოძებნეთ ყველა აკორდეონის სათაური querySelectorAll-ით
3. გაიარეთ სათაურები for ციკლით
4. თითოეულ სათაურს დაამატეთ click ივენთ ლისენერი
5. სათაურზე დაკლიკებისას, იპოვეთ მისი მეზობელი კონტენტ ელემენტი
   (გამოიყენეთ parentElement ზემოთ ასასვლელად, შემდეგ querySelector კონტენტის საპოვნელად)
6. გადართეთ 'hidden' კლასი კონტენტ ელემენტზე classList.toggle-ით
7. ბონუსი: ერთი სექციის გახსნისას, ჯერ დახურეთ ყველა დანარჩენი
   (გაიარეთ ყველა კონტენტ ელემენტი ციკლით და თითოეულს დაამატეთ 'hidden')

სატესტო მონაცემები: გამოიყენეთ ზემოთ მოცემული HTML სტრუქტურა. თუ დამატებითი
პრაქტიკა გინდათ, შექმენით ის დინამიურად JavaScript-ით.

მინიშნება: დაკლიკებულ სათაურთან დაკავშირებული კონტენტ ელემენტის მისაღებად:
          const content = headerElement.parentElement.querySelector('.accordion-content');
მინიშნება: ბონუსისთვის, მოძებნეთ ყველა '.accordion-content' ელემენტი და
          თითოეულს დაამატეთ 'hidden' დაკლიკებულის გადართვამდე

წარმატებები :)
*/

// // ნაბიჯი 1: ყველა სათაურის მოძებნა
// const headers = document.querySelectorAll('.accordion-header');
//
// // ნაბიჯი 2: ციკლი და ივენთ ლისენერების დამატება
// for (let i = 0; i < headers.length; i++) {
//   headers[i].addEventListener('click', function () {
//     // კონტენტ ელემენტის პოვნა იმავე accordion-item-ის შიგნით
//     const content = headers[i].parentElement.querySelector('.accordion-content');
//
//     // ბონუსი: ჯერ ყველა სხვა სექციის დახურვა
//     const allContents = document.querySelectorAll('.accordion-content');
//     for (let j = 0; j < allContents.length; j++) {
//       if (allContents[j] !== content) {
//         allContents[j].classList.add('hidden');
//       }
//     }
//
//     // დაკლიკებული სექციის გადართვა
//     content.classList.toggle('hidden');
//   });
// }


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - გალერეა ლაითბოქსით
// (classList.add/remove + ოვერლეი + კლავიატურის ივენთები)

/*
ააწყვეთ სურათების გალერეა, სადაც მინიატურაზე დაკლიკებით სრული
სურათი იხსნება მოდალურ/ლაითბოქს ოვერლეიში.

1. წარმოიდგინეთ, რომ გაქვთ ეს HTML სტრუქტურა:
   <div class="gallery">
     <img class="thumbnail" src="img1.jpg" data-full="img1-full.jpg" alt="სურათი 1" />
     <img class="thumbnail" src="img2.jpg" data-full="img2-full.jpg" alt="სურათი 2" />
     <img class="thumbnail" src="img3.jpg" data-full="img3-full.jpg" alt="სურათი 3" />
     <img class="thumbnail" src="img4.jpg" data-full="img4-full.jpg" alt="სურათი 4" />
   </div>
   <div class="lightbox hidden">
     <div class="lightbox-overlay"></div>
     <img class="lightbox-image" src="" alt="სრული ზომა" />
     <button class="lightbox-close">&times;</button>
   </div>

2. მოძებნეთ ყველა მინიატურა querySelectorAll-ით
3. მოძებნეთ ლაითბოქსი, ლაითბოქსის სურათი, ოვერლეი და დახურვის ღილაკი
4. შექმენით 'openLightbox' ფუნქცია, რომელიც:
   ა. აყენებს ლაითბოქსის სურათის src-ს დაკლიკებული მინიატურის data-full ატრიბუტიდან
   ბ. შლის 'hidden' კლასს ლაითბოქსიდან
5. შექმენით 'closeLightbox' ფუნქცია, რომელიც:
   ა. ამატებს 'hidden' კლასს ლაითბოქსს
6. გაიარეთ ყველა მინიატურა ციკლით და დაამატეთ click ლისენერი openLightbox-ის გამოსაძახებლად
7. დაამატეთ click ლისენერი დახურვის ღილაკს და ოვერლეის closeLightbox-ის გამოსაძახებლად
8. დაამატეთ keydown ლისენერი document-ზე Escape-ზე დასახურად

სატესტო მონაცემები: გამოიყენეთ ზემოთ მოცემული HTML სტრუქტურა.

მინიშნება: data ატრიბუტებზე წვდომა: element.dataset.full ან
          element.getAttribute('data-full')
მინიშნება: click ჰენდლერის შიგნით გამოიყენეთ 'this' ან ივენთის target
          დაკლიკებული მინიატურის data ატრიბუტის მისაღებად

წარმატებები :)
*/

// // ელემენტების მოძებნა
// const thumbnails = document.querySelectorAll('.thumbnail');
// const lightbox = document.querySelector('.lightbox');
// const lightboxImage = document.querySelector('.lightbox-image');
// const lightboxOverlay = document.querySelector('.lightbox-overlay');
// const lightboxClose = document.querySelector('.lightbox-close');
//
// // ლაითბოქსის გახსნის ფუნქცია
// const openLightbox = function (imageSrc) {
//   lightboxImage.src = imageSrc;
//   lightbox.classList.remove('hidden');
// };
//
// // ლაითბოქსის დახურვის ფუნქცია
// const closeLightbox = function () {
//   lightbox.classList.add('hidden');
//   lightboxImage.src = '';
// };
//
// // ყველა მინიატურას click ლისენერის დამატება
// for (let i = 0; i < thumbnails.length; i++) {
//   thumbnails[i].addEventListener('click', function () {
//     const fullImageSrc = thumbnails[i].getAttribute('data-full');
//     openLightbox(fullImageSrc);
//   });
// }
//
// // ღილაკზე დაკლიკებით დახურვა
// lightboxClose.addEventListener('click', closeLightbox);
//
// // ოვერლეიზე დაკლიკებით დახურვა
// lightboxOverlay.addEventListener('click', closeLightbox);
//
// // Escape ღილაკით დახურვა
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
//     closeLightbox();
//   }
// });


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - შეტყობინებების სისტემა
// (classList.add/remove + setTimeout + მრავალჯერადად გამოყენებადი ფუნქციები)

/*
ააწყვეთ შეტყობინებების ბანერის სისტემა, რომელიც აჩვენებს მესიჯებს,
ხურავს მათ ღილაკით და ავტომატურად იმალება დაგვიანებით.

1. წარმოიდგინეთ, რომ გაქვთ ეს HTML სტრუქტურა:
   <div class="notification hidden">
     <span class="notification-message">ეს არის შეტყობინება</span>
     <button class="notification-close">&times;</button>
   </div>
   <button class="btn-success">წარმატების ჩვენება</button>
   <button class="btn-error">შეცდომის ჩვენება</button>
   <button class="btn-info">ინფორმაციის ჩვენება</button>

2. მოძებნეთ შეტყობინების ელემენტი, მესიჯის span, დახურვის ღილაკი
   და ყველა ტრიგერ ღილაკი
3. შექმენით 'showNotification' ფუნქცია, რომელიც:
   ა. აყენებს მესიჯის ტექსტს
   ბ. შლის 'hidden' კლასს შეტყობინებიდან
   გ. შლის ყველა ტიპის კლასს ('success', 'error', 'info')
   დ. ამატებს შესაბამისი ტიპის კლასს
   ე. იყენებს setTimeout-ს 3000ms (3 წამი) შემდეგ ავტო-დამალვისთვის
4. შექმენით 'hideNotification' ფუნქცია, რომელიც:
   ა. ამატებს 'hidden' კლასს შეტყობინებას
5. დაამატეთ click ლისენერი დახურვის ღილაკს hideNotification-ის გამოსაძახებლად
6. დაამატეთ click ლისენერი თითოეულ ტრიგერ ღილაკს:
   - წარმატების ღილაკი: showNotification('ოპერაცია წარმატებულია!', 'success')
   - შეცდომის ღილაკი: showNotification('რაღაც შეცდომა მოხდა!', 'error')
   - ინფოს ღილაკი: showNotification('აი, რაღაც ინფორმაცია.', 'info')
7. ბონუსი: წინა timeout-ის გაწმენდა ახალი შეტყობინების ჩვენებისას
   (რათა სწრაფმა კლიკებმა ნაადრევი დამალვა არ გამოიწვიოს)

სატესტო მონაცემები: გამოიყენეთ ზემოთ მოცემული HTML სტრუქტურა.

მინიშნება: შეინახეთ timeout-ის ID: let timeoutId = setTimeout(...)
მინიშნება: წინა timeout-ის გაწმენდა: clearTimeout(timeoutId)
მინიშნება: რამდენიმე კლასის წასაშლელად: classList.remove('success', 'error', 'info')

წარმატებები :)
*/

// // ელემენტების მოძებნა
// const notification = document.querySelector('.notification');
// const notificationMessage = document.querySelector('.notification-message');
// const notificationClose = document.querySelector('.notification-close');
// const btnSuccess = document.querySelector('.btn-success');
// const btnError = document.querySelector('.btn-error');
// const btnInfo = document.querySelector('.btn-info');
//
// let notificationTimeout;
//
// // შეტყობინების ჩვენების ფუნქცია
// const showNotification = function (message, type) {
//   // წინა timeout-ის გაწმენდა
//   clearTimeout(notificationTimeout);
//
//   // მესიჯის ტექსტის დაყენება
//   notificationMessage.textContent = message;
//
//   // ყველა ტიპის კლასისა და hidden-ის წაშლა
//   notification.classList.remove('hidden', 'success', 'error', 'info');
//
//   // ახალი ტიპის კლასის დამატება
//   notification.classList.add(type);
//
//   // ავტო-დამალვა 3 წამის შემდეგ
//   notificationTimeout = setTimeout(function () {
//     hideNotification();
//   }, 3000);
// };
//
// // შეტყობინების დამალვის ფუნქცია
// const hideNotification = function () {
//   notification.classList.add('hidden');
// };
//
// // დახურვის ღილაკის ლისენერი
// notificationClose.addEventListener('click', hideNotification);
//
// // ტრიგერ ღილაკების ლისენერები
// btnSuccess.addEventListener('click', function () {
//   showNotification('ოპერაცია წარმატებულია!', 'success');
// });
//
// btnError.addEventListener('click', function () {
//   showNotification('რაღაც შეცდომა მოხდა!', 'error');
// });
//
// btnInfo.addEventListener('click', function () {
//   showNotification('აი, რაღაც ინფორმაცია.', 'info');
// });


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - ჩამოსაშლელი მენიუ
// (classList.toggle + გარე კლიკი + Escape ღილაკი)

/*
ააწყვეთ ჩამოსაშლელი მენიუ, რომელიც იხსნება ღილაკზე დაკლიკებით,
იხურება გარეთ დაკლიკებით და Escape ღილაკით.

1. წარმოიდგინეთ, რომ გაქვთ ეს HTML სტრუქტურა:
   <div class="dropdown">
     <button class="dropdown-toggle">მენიუ ▼</button>
     <ul class="dropdown-menu hidden">
       <li class="dropdown-item">პროფილი</li>
       <li class="dropdown-item">პარამეტრები</li>
       <li class="dropdown-item">დახმარება</li>
       <li class="dropdown-item">გამოსვლა</li>
     </ul>
   </div>

2. მოძებნეთ dropdown კონტეინერი, toggle ღილაკი და dropdown მენიუ
3. შექმენით 'toggleDropdown' ფუნქცია, რომელიც გადართავს 'hidden' კლასს
   dropdown მენიუზე
4. შექმენით 'closeDropdown' ფუნქცია, რომელიც ამატებს 'hidden' კლასს
   dropdown მენიუს
5. დაამატეთ click ლისენერი toggle ღილაკს toggleDropdown-ის გამოსაძახებლად
6. დაამატეთ click ლისენერი document-ს dropdown-ის დასახურად
   გარეთ დაკლიკებისას:
   - შეამოწმეთ, არის თუ არა დაკლიკებული ელემენტი dropdown კონტეინერის გარეთ
   - თუ გარეთაა, გამოიძახეთ closeDropdown
7. დაამატეთ keydown ლისენერი document-ზე Escape-ზე დასახურად
8. დაამატეთ click ლისენერი თითოეულ dropdown ელემენტს:
   - დალოგეთ ელემენტის ტექსტი
   - დახურეთ dropdown ელემენტზე დაკლიკების შემდეგ
9. ბონუსი: რამდენიმე dropdown-ის მართვა — ახლის გახსნისას
   დახურეთ სხვა dropdown-ები

სატესტო მონაცემები: გამოიყენეთ ზემოთ მოცემული HTML სტრუქტურა.

მინიშნება: ელემენტის გარეთ კლიკის შესამოწმებლად:
          if (!dropdown.contains(e.target)) closeDropdown();
მინიშნება: 'e.target' არის ელემენტი, რომელზეც რეალურად დაკლიკეს
მინიშნება: element.contains(otherElement) ამოწმებს, არის თუ არა
          otherElement element-ის შიგნით (ან არის თავად element)

წარმატებები :)
*/

// ელემენტების მოძებნა
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Dropdown-ის გადართვა
const toggleDropdown = function () {
  dropdownMenu.classList.toggle('hidden');
};

// Dropdown-ის დახურვა
const closeDropdown = function () {
  dropdownMenu.classList.add('hidden');
};

// Toggle ღილაკის კლიკი
dropdownToggle.addEventListener('click', function (e) {
  toggleDropdown();
});

// გარეთ დაკლიკებით დახურვა
document.addEventListener('click', function (e) {
  if (!dropdown.contains(e.target)) {
    closeDropdown();
  }
});

// Escape ღილაკით დახურვა
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !dropdownMenu.classList.contains('hidden')) {
    closeDropdown();
  }
});

// Dropdown ელემენტის კლიკი
for (let i = 0; i < dropdownItems.length; i++) {
  dropdownItems[i].addEventListener('click', function () {
    console.log(`არჩეულია: ${dropdownItems[i].textContent}`);
    closeDropdown();
  });
}
