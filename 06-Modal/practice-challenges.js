"use strict";

////////////////////////////////////
// Modal Window Project
// Practice Challenges - With Solutions
////////////////////////////////////

////////////////////////////////////
// Practice Challenge #1 - Accordion Component
// (classList.toggle + querySelectorAll + for loop)

/*
Build an accordion component where clicking a section header
expands/collapses that section's content using classList.toggle.

1. Imagine you have this HTML structure:
   <div class="accordion">
     <div class="accordion-item">
       <button class="accordion-header">Section 1</button>
       <div class="accordion-content hidden">Content for section 1</div>
     </div>
     <div class="accordion-item">
       <button class="accordion-header">Section 2</button>
       <div class="accordion-content hidden">Content for section 2</div>
     </div>
     <div class="accordion-item">
       <button class="accordion-header">Section 3</button>
       <div class="accordion-content hidden">Content for section 3</div>
     </div>
   </div>

2. Select all accordion headers using querySelectorAll
3. Loop through the headers with a for loop
4. Add a click event listener to each header
5. When a header is clicked, find its sibling content element
   (use parentElement to go up, then querySelector to find the content)
6. Toggle the 'hidden' class on the content element
7. BONUS: When opening one section, close all others first
   (loop through all content elements and add 'hidden' to each)

TEST DATA: Use the HTML structure above. Create it dynamically
with JavaScript if you want extra practice.

HINT: To get the content element related to a clicked header:
      const content = headerElement.parentElement.querySelector('.accordion-content');
HINT: For the bonus, select all '.accordion-content' elements and
      add 'hidden' to each before toggling the clicked one

GOOD LUCK :)
*/

// // Step 1: Select all headers
// const headers = document.querySelectorAll('.accordion-header');
//
// // Step 2: Loop and add event listeners
// for (let i = 0; i < headers.length; i++) {
//   headers[i].addEventListener('click', function () {
//     // Find the content element inside the same accordion-item
//     const content = headers[i].parentElement.querySelector('.accordion-content');
//
//     // BONUS: Close all other sections first
//     const allContents = document.querySelectorAll('.accordion-content');
//     for (let j = 0; j < allContents.length; j++) {
//       if (allContents[j] !== content) {
//         allContents[j].classList.add('hidden');
//       }
//     }
//
//     // Toggle the clicked section
//     content.classList.toggle('hidden');
//   });
// }

////////////////////////////////////
// Practice Challenge #2 - Image Gallery with Lightbox
// (classList.add/remove + overlay + keyboard events)

/*
Build an image gallery where clicking a thumbnail opens the full
image in a modal/lightbox overlay.

1. Imagine you have this HTML structure:
   <div class="gallery">
     <img class="thumbnail" src="img1.jpg" data-full="img1-full.jpg" alt="Image 1" />
     <img class="thumbnail" src="img2.jpg" data-full="img2-full.jpg" alt="Image 2" />
     <img class="thumbnail" src="img3.jpg" data-full="img3-full.jpg" alt="Image 3" />
     <img class="thumbnail" src="img4.jpg" data-full="img4-full.jpg" alt="Image 4" />
   </div>
   <div class="lightbox hidden">
     <div class="lightbox-overlay"></div>
     <img class="lightbox-image" src="" alt="Full size" />
     <button class="lightbox-close">&times;</button>
   </div>

2. Select all thumbnail images using querySelectorAll
3. Select the lightbox, lightbox image, lightbox overlay, and close button
4. Create an 'openLightbox' function that:
   a. Sets the lightbox image src to the clicked thumbnail's data-full attribute
   b. Removes the 'hidden' class from the lightbox
5. Create a 'closeLightbox' function that:
   a. Adds the 'hidden' class to the lightbox
6. Loop through all thumbnails and add click listeners to call openLightbox
7. Add click listener to the close button and overlay to call closeLightbox
8. Add keydown listener to document to close on Escape key

TEST DATA: Use the HTML structure above.

HINT: Access data attributes with element.dataset.full or
      element.getAttribute('data-full')
HINT: Inside the click handler, use 'this' or the event target
      to get the clicked thumbnail's data attribute

GOOD LUCK :)
*/

// // Select elements
// const thumbnails = document.querySelectorAll('.thumbnail');
// const lightbox = document.querySelector('.lightbox');
// const lightboxImage = document.querySelector('.lightbox-image');
// const lightboxOverlay = document.querySelector('.lightbox-overlay');
// const lightboxClose = document.querySelector('.lightbox-close');
//
// // Open lightbox function
// const openLightbox = function (imageSrc) {
//   lightboxImage.src = imageSrc;
//   lightbox.classList.remove('hidden');
// };
//
// // Close lightbox function
// const closeLightbox = function () {
//   lightbox.classList.add('hidden');
//   lightboxImage.src = '';
// };
//
// // Add click listeners to all thumbnails
// for (let i = 0; i < thumbnails.length; i++) {
//   thumbnails[i].addEventListener('click', function () {
//     const fullImageSrc = thumbnails[i].getAttribute('data-full');
//     openLightbox(fullImageSrc);
//   });
// }
//
// // Close on button click
// lightboxClose.addEventListener('click', closeLightbox);
//
// // Close on overlay click
// lightboxOverlay.addEventListener('click', closeLightbox);
//
// // Close on Escape key
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
//     closeLightbox();
//   }
// });
