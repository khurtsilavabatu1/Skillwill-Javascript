// ========================================
//    სათამაშოების ფაბრიკა - Promise სიმულაცია
// ========================================
//
// პროცესი: მასალის შეკვეთა → დამზადება → ხარისხის შემოწმება → შეფუთვა → გაგზავნა → გაყიდვა
//
// ყოველ ეტაპზე არის წარუმატებლობის შანსი (reject)
// თითოეული ეტაპი წინაზეა დამოკიდებული
//

// ============ ნაწილი 1: ფუნქციების შექმნა ============
// ქვემოთ ზოგი ფუნქცია მზადაა, ზოგი შენ უნდა დაწერო.
// ყურადღებით წაიკითხე მზა ფუნქციები რომ ნიმუში გაიგო.

// ✅ ეს მზადაა — ნიმუშად გამოიყენე
function orderMaterials(toyName) {
  return new Promise((resolve, reject) => {
    console.log(`📦 "${toyName}" - მასალის შეკვეთა...`);
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        resolve({
          toy: toyName,
          materials: ["პლასტმასი", "საღებავი", "ჭანჭიკები"],
        });
      } else {
        reject(`მასალის მომწოდებელმა უარი თქვა "${toyName}"-სთვის`);
      }
    }, 1000);
  });
}
// ✅ ეს მზადაა — ნიმუშად გამოიყენე
function manufacture(order) {
  return new Promise((resolve, reject) => {
    console.log(`�icing "${order.toy}" - დამზადება მიმდინარეობს...`);
    setTimeout(() => {
      const success = Math.random() > 0.15;
      if (success) {
        resolve({
          ...order,
          status: "დამზადებული",
          quality: Math.floor(Math.random() * 100),
        });
      } else {
        reject(`"${order.toy}" - საწარმოო ხაზზე შეფერხება მოხდა`);
      }
    }, 1500);
  });
}

// ✅ ეს მზადაა
function qualityCheck(product) {
  return new Promise((resolve, reject) => {
    console.log(
      `🔍 "${product.toy}" - ხარისხის შემოწმება... (quality: ${product.quality})`,
    );
    setTimeout(() => {
      if (product.quality >= 30) {
        resolve({
          ...product,
          status: "შემოწმებული",
          grade: product.quality >= 70 ? "A" : "B",
        });
      } else {
        reject(
          `"${product.toy}" - ხარისხის შემოწმება ვერ გაიარა (quality: ${product.quality})`,
        );
      }
    }, 800);
  });
}

// ❌ ეს შენ უნდა დაწერო!
// packToy ფუნქცია:
// - პარამეტრად იღებს product ობიექტს (qualityCheck-დან მოსული)
// - აბრუნებს new Promise-ს
// - console.log-ით დაბეჭდე: 🎁 "${product.toy}" - შეფუთვა (grade: ${product.grade})...
// - setTimeout 600ms
// - წარმატების შანსი: Math.random() > 0.1
// - წარმატებისას resolve: { ...product, status: "შეფუთული", trackingId: "TRK-" + Math.floor(Math.random() * 10000) }
// - წარუმატებლობისას reject: `"${product.toy}" - შეფუთვის მასალა ამოიწურა`

function packToy(product) {
  // შენი კოდი აქ
}

// ❌ ეს შენ უნდა დაწერო!
// shipToy ფუნქცია:
// - პარამეტრად იღებს packed ობიექტს (packToy-დან მოსული)
// - აბრუნებს new Promise-ს
// - console.log-ით დაბეჭდე: 🚚 "${packed.toy}" - გაგზავნა (${packed.trackingId})...
// - setTimeout 1000ms
// - წარმატების შანსი: Math.random() > 0.1
// - წარმატებისას resolve: { ...packed, status: "გაგზავნილი", deliveryDays: Math.floor(Math.random() * 5) + 1 }
// - წარუმატებლობისას reject: `"${packed.toy}" - კურიერმა ამანათი დაკარგა (${packed.trackingId})`

function shipToy(packed) {
  // შენი კოდი აქ
}

// ❌ ეს შენ უნდა დაწერო!
// sellToy ფუნქცია:
// - პარამეტრად იღებს shipped ობიექტს (shipToy-დან მოსული)
// - აბრუნებს new Promise-ს (ეს ყოველთვის წარმატებულია, reject არ სჭირდება)
// - ფასი: თუ shipped.grade === "A" მაშინ 50, თუარადა 30
// - console.log-ით დაბეჭდე: 💰 "${shipped.toy}" - გაიყიდა $${price}-ად (${shipped.deliveryDays} დღეში მიტანა)
// - resolve: { ...shipped, status: "გაყიდული", price }

function sellToy(shipped) {
  // შენი კოდი აქ
}

// ============ ნაწილი 2: სავარჯიშოები ============

// -------- სავარჯიშო 1: .then().catch() --------
// orderMaterials-ით შეუკვეთე "ტედი დათვი"
// .then chain-ით გაატარე ყველა ეტაპზე:
//   orderMaterials → manufacture → qualityCheck → packToy → shipToy → sellToy
// .catch-ით დაიჭირე შეცდომა და დაბეჭდე: "❌ პროცესი შეწყდა: " + error

function runWithThen() {
  // შენი კოდი აქ
}

// runWithThen();

// -------- სავარჯიშო 2: async/await + try/catch --------
// იგივე პროცესი async/await-ით
// სათამაშო: "ლეგო მანქანა"

async function runWithAwait() {
  // შენი კოდი აქ
}

// runWithAwait();

// -------- სავარჯიშო 3: Promise.all - პარალელური წარმოება --------
// ერთდროულად გაუშვი 3 სათამაშოს წარმოება: "თოჯინა", "რობოტი", "თვითმფრინავი"
// თითოეული გაატარე მთელ პროცესზე (დაწერე helper async ფუნქცია)
// Promise.all-ით დაელოდე სამივეს
// დაბეჭდე მთლიანი შემოსავალი (ყველა price-ის ჯამი)
//
// გაითვალისწინე: Promise.all reject-ს აკეთებს თუ ერთიც კი ვერ მოხერხდა
// bonus: სცადე Promise.allSettled რომ ნახო რომელი წარმატებულია და რომელი არა

async function runFactory() {
  // შენი კოდი აქ
}

// runFactory();
