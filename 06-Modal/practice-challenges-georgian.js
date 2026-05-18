"use strict";

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
