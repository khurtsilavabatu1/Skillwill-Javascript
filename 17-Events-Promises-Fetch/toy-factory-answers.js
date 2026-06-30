// ========================================
//    სათამაშოების ფაბრიკა - Promise სიმულაცია
// ========================================
//
// პროცესი: მასალის შეკვეთა → დამზადება → ხარისხის შემოწმება → შეფუთვა → გაგზავნა → გაყიდვა
//
// ყოველ ეტაპზე არის წარუმატებლობის შანსი (reject)
// თითოეული ეტაპი წინაზეა დამოკიდებული
//

// ============ ეს ფუნქციები უკვე მზადაა — არ შეცვალო ============

function orderMaterials(toyName) {
  return new Promise((resolve, reject) => {
    console.log(`📦 "${toyName}" - მასალის შეკვეთა...`);
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        resolve({ toy: toyName, materials: ["პლასტმასი", "საღებავი", "ჭანჭიკები"] });
      } else {
        reject(`მასალის მომწოდებელმა უარი თქვა "${toyName}"-სთვის`);
      }
    }, 1000);
  });
}

function manufacture(order) {
  return new Promise((resolve, reject) => {
    console.log(`�icing "${order.toy}" - დამზადება მიმდინარეობს...`);
    setTimeout(() => {
      const success = Math.random() > 0.15;
      if (success) {
        resolve({ ...order, status: "დამზადებული", quality: Math.floor(Math.random() * 100) });
      } else {
        reject(`"${order.toy}" - საწარმოო ხაზზე შეფერხება მოხდა`);
      }
    }, 1500);
  });
}

function qualityCheck(product) {
  return new Promise((resolve, reject) => {
    console.log(`🔍 "${product.toy}" - ხარისხის შემოწმება... (quality: ${product.quality})`);
    setTimeout(() => {
      if (product.quality >= 30) {
        resolve({ ...product, status: "შემოწმებული", grade: product.quality >= 70 ? "A" : "B" });
      } else {
        reject(`"${product.toy}" - ხარისხის შემოწმება ვერ გაიარა (quality: ${product.quality})`);
      }
    }, 800);
  });
}

function packToy(product) {
  return new Promise((resolve, reject) => {
    console.log(`🎁 "${product.toy}" - შეფუთვა (grade: ${product.grade})...`);
    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        resolve({ ...product, status: "შეფუთული", trackingId: "TRK-" + Math.floor(Math.random() * 10000) });
      } else {
        reject(`"${product.toy}" - შეფუთვის მასალა ამოიწურა`);
      }
    }, 600);
  });
}

function shipToy(packed) {
  return new Promise((resolve, reject) => {
    console.log(`🚚 "${packed.toy}" - გაგზავნა (${packed.trackingId})...`);
    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        resolve({ ...packed, status: "გაგზავნილი", deliveryDays: Math.floor(Math.random() * 5) + 1 });
      } else {
        reject(`"${packed.toy}" - კურიერმა ამანათი დაკარგა (${packed.trackingId})`);
      }
    }, 1000);
  });
}

function sellToy(shipped) {
  return new Promise((resolve) => {
    const price = shipped.grade === "A" ? 50 : 30;
    console.log(`💰 "${shipped.toy}" - გაიყიდა $${price}-ად (${shipped.deliveryDays} დღეში მიტანა)`);
    resolve({ ...shipped, status: "გაყიდული", price });
  });
}

// ============ პასუხები ============

// -------- სავარჯიშო 1: .then().catch() --------

function runWithThen() {
  orderMaterials("ტედი დათვი")
    .then((order) => manufacture(order))
    .then((product) => qualityCheck(product))
    .then((checked) => packToy(checked))
    .then((packed) => shipToy(packed))
    .then((shipped) => sellToy(shipped))
    .then((result) => {
      console.log("✅ მთელი პროცესი წარმატებით დასრულდა!", result);
    })
    .catch((error) => {
      console.log("❌ პროცესი შეწყდა: " + error);
    });
}

// runWithThen();

// -------- სავარჯიშო 2: async/await + try/catch --------

async function runWithAwait() {
  try {
    const order = await orderMaterials("ლეგო მანქანა");
    const product = await manufacture(order);
    const checked = await qualityCheck(product);
    const packed = await packToy(checked);
    const shipped = await shipToy(packed);
    const sold = await sellToy(shipped);
    console.log("✅ მთელი პროცესი წარმატებით დასრულდა!", sold);
  } catch (error) {
    console.log("❌ პროცესი შეწყდა: " + error);
  }
}

// runWithAwait();

// -------- სავარჯიშო 3: Promise.all - პარალელური წარმოება --------

async function produceToy(toyName) {
  const order = await orderMaterials(toyName);
  const product = await manufacture(order);
  const checked = await qualityCheck(product);
  const packed = await packToy(checked);
  const shipped = await shipToy(packed);
  const sold = await sellToy(shipped);
  return sold;
}

async function runFactory() {
  try {
    const results = await Promise.all([
      produceToy("თოჯინა"),
      produceToy("რობოტი"),
      produceToy("თვითმფრინავი"),
    ]);

    const totalRevenue = results.reduce((sum, r) => sum + r.price, 0);
    console.log(`\n🏭 ფაბრიკის შემოსავალი: $${totalRevenue}`);
    console.log("სათამაშოები:", results.map((r) => `${r.toy} ($${r.price})`));
  } catch (error) {
    console.log("❌ ერთ-ერთი სათამაშოს წარმოება ვერ მოხერხდა: " + error);
  }

  // bonus: Promise.allSettled
  console.log("\n--- Promise.allSettled ---");
  const settled = await Promise.allSettled([
    produceToy("თოჯინა"),
    produceToy("რობოტი"),
    produceToy("თვითმფრინავი"),
  ]);

  settled.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(`✅ ${result.value.toy} - გაიყიდა $${result.value.price}-ად`);
    } else {
      console.log(`❌ ${result.reason}`);
    }
  });
}

// runFactory();
