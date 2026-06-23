# თავი 15 — DOM Manipulation (ბიუჯეტის ტრეკერი)

## პროექტის აღწერა

ბიუჯეტის ტრეკერი — აპლიკაცია, რომელიც საშუალებას გაძლევთ:
- დაამატოთ შემოსავალი და ხარჯი
- ნახოთ ბალანსი რეალურ დროში
- გაფილტროთ ტრანზაქციები ტიპის მიხედვით
- წაშალოთ ერთი ან ყველა ტრანზაქცია
- მონაცემები ინახება `localStorage`-ში

---

## პროექტის სტრუქტურა

```
15-DOM-Manipulation/
├── starter/          ← სავარჯიშო (ჩელენჯი აქ უნდა შეასრულოთ)
│   ├── index.html
│   └── script.js
├── final/            ← საბოლოო ვერსია (პასუხები)
│   ├── project.html
│   ├── project.js
│   └── script.js
└── README.md         ← ეს ფაილი
```

---

## გამოყენებული DOM მეთოდები

| მეთოდი | სად გამოიყენება | რას აკეთებს |
|--------|----------------|-------------|
| `createElement` | `createTransactionEl`, `showEmpty`, `updateCategoryOptions` | ახალ HTML ელემენტს ქმნის |
| `textContent` | `createTransactionEl`, `updateSummary`, `updateCount` | ელემენტში ტექსტს აყენებს |
| `classList.add/remove` | `createTransactionEl`, `updateSummary` | CSS კლასებს ამატებს/შლის |
| `classList.toggle` | `filterTransactions`, `addTransaction` | კლასს ჩართავს/გამორთავს პირობით |
| `setAttribute` | `createTransactionEl` | `data-id` ატრიბუტს აყენებს |
| `append` | `createTransactionEl`, `showEmpty` | რამდენიმე child-ს ერთდროულად ამატებს |
| `appendChild` | `renderTransactions`, `updateCategoryOptions` | ერთ child-ს ამატებს |
| `prepend` | `addTransaction` | ელემენტს სიის თავში ჩასვამს |
| `remove()` | `deleteTransaction`, `addTransaction` | ელემენტს DOM-იდან შლის |
| `removeChild` | `renderTransactions`, `clearAll`, `updateCategoryOptions` | while ციკლით ყველა child-ს შლის |
| `DocumentFragment` | `renderTransactions` | ბეჩ რენდერინგი (1 reflow) |
| `querySelector` | `deleteTransaction`, `addTransaction` | ელემენტს პოულობს სელექტორით |
| `querySelectorAll` | DOM References | ყველა შესაბამის ელემენტს პოულობს |
| `getElementById` | DOM References | ელემენტს ID-ით პოულობს |
| `closest` | Event Delegation | უახლოეს მშობელს პოულობს |

---

## ფუნქციების აღწერა

### `createTransactionEl(tx)`
ტრანზაქციის ერთი რიგის (row) აგება ნულიდან DOM ელემენტებით.

**შედეგი:** აბრუნებს `div.tx-row` ელემენტს, რომელიც შეიცავს:
- აღწერას და კატეგორიას (`tx-info`)
- თანხას ნიშნით (`+` ან `-`)
- წაშლის ღილაკს (`×`)

**DOM მეთოდები:** `createElement`, `classList.add`, `setAttribute`, `textContent`, `append`

---

### `addTransaction(e)`
ფორმის submit-ის დამუშავება — ახალი ტრანზაქციის შექმნა და დამატება.

**რას აკეთებს:**
1. ფორმიდან კითხულობს მნიშვნელობებს (`descInput`, `amountInput`, `typeSelect`, `categorySelect`)
2. ტრანზაქციის ობიექტს ქმნის `id`, `description`, `amount`, `type`, `category`, `date` ველებით
3. მასივის თავში ამატებს (`unshift`)
4. თუ ფილტრი აქტიურია — სრულ ხელახალ რენდერს აკეთებს
5. თუ ფილტრი `"all"` არის — `prepend`-ით სიის თავში ჩასვამს
6. ბალანსს, localStorage-ს განაახლებს და ფორმას ასუფთავებს

**DOM მეთოდები:** `prepend`, `remove()`, `classList.toggle`

---

### `deleteTransaction(id)`
ერთი ტრანზაქციის წაშლა ID-ით.

**რას აკეთებს:**
1. `querySelector`-ით პოულობს ელემენტს `data-id`-ით
2. `remove()`-ით შლის DOM-იდან
3. `filter`-ით შლის მასივიდან
4. ბალანსსა და მთვლელს განაახლებს
5. თუ სია ცარიელია — `showEmpty()`-ს იძახებს

**DOM მეთოდები:** `querySelector`, `remove()`

---

### `renderTransactions(txArray)`
მთელი სიის ხელახალი რენდერი (გამოიყენება ფილტრაციისას).

**რას აკეთებს:**
1. `while + removeChild` — ჯერ სიას ასუფთავებს
2. თუ მასივი ცარიელია — `showEmpty()` + `return`
3. `DocumentFragment`-ში ამატებს ყველა ელემენტს
4. ერთი `appendChild`-ით DOM-ში ჩასვამს (1 reflow)

**DOM მეთოდები:** `removeChild`, `DocumentFragment`, `appendChild`

---

### `updateSummary()`
ბალანსის ბარათების განახლება.

**რას აკეთებს:**
1. `filter + reduce` — ითვლის ჯამურ შემოსავალს და ხარჯს
2. `textContent` — აახლებს თანხებს ბარათებში
3. `classList` — ბალანსის ფერს ცვლის (`positive` / `negative`)

**DOM მეთოდები:** `textContent`, `classList.remove`, `classList.add`

---

### `filterTransactions(type)`
ტრანზაქციების ფილტრაცია ტიპის მიხედვით (`"all"`, `"income"`, `"expense"`).

**რას აკეთებს:**
1. `classList.toggle` — აქტიურ ღილაკს მონიშნავს
2. `Array.filter` — ფილტრავს მასივს
3. `renderTransactions` — გაფილტრულ სიას ხატავს

**DOM მეთოდები:** `classList.toggle`

---

### `clearAll()`
ყველა ტრანზაქციის წაშლა `confirm`-ის შემდეგ.

**DOM მეთოდები:** `removeChild` (while ციკლით)

---

### `updateCategoryOptions()`
ტიპის (`income`/`expense`) ცვლილებისას კატეგორიის `<select>`-ის განახლება.

**რას აკეთებს:**
1. ძველ `<option>`-ებს შლის (`while + removeChild`)
2. ახალ `<option>`-ებს ქმნის და ამატებს (`createElement + appendChild`)

---

### `showEmpty()`
ცარიელი მდგომარეობის შეტყობინების ჩვენება: "ტრანზაქციები არ არის".

**DOM მეთოდები:** `createElement`, `append`, `appendChild`

---

### `updateCount(count)`
ტრანზაქციების მთვლელის ტექსტის განახლება.

**DOM მეთოდები:** `textContent`

---

### `saveToStorage()` / `loadFromStorage()`
მონაცემების შენახვა და წაკითხვა `localStorage`-იდან.

---

### `loadSampleData()`
სატესტო მონაცემების ჩატვირთვა (6 ტრანზაქცია) პირველ გაშვებაზე.

---

### Event Delegation (წაშლის ღილაკი)
ერთი `click` listener `transactionList`-ზე — `e.target.classList.contains("btn-delete")` ამოწმებს, `closest("[data-id]")` კი მშობელ row-ს პოულობს. ეს საშუალებას იძლევა ახლად დამატებულ ელემენტებზეც იმუშაოს ცალკე listener-ების გარეშე.
