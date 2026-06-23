# Skillwill — JavaScript

ეს რეპოზიტორია შეიცავს Skillwill-ის JavaScript კურსის სასწავლო მასალებს.

## სტრუქტურა

თითოეული თავი ცალკე საქაღალდეშია:

| # | თემა |
|---|------|
| 01 | Fundamentals Part 1 |
| 02 | Fundamentals Part 2 |
| 03 | Developer Skills |
| 04 | HTML & CSS |
| 05 | Guess My Number (პროექტი) |
| 06 | Modal (პროექტი) |
| 07 | Pig Game (პროექტი) |
| 08 | Behind the Scenes / Advanced Arrays & Forms |
| 09 | Data Structures & Operators / Array Methods |
| 10 | Functions / Objects, Date & Strings |
| 11 | Arrays Bankist / Browser Objects & Storage |
| 12 | Numbers, Dates & Timers / Callbacks, Timers & DOM |
| 13 | DOM Basics / Advanced DOM Bankist |
| 14 | OOP |
| 15 | DOM Manipulation |

თითოეულ საქაღალდეში მოიძებნება:
- `starter/` — საწყისი ფაილები (სავარჯიშოებისთვის)
- `final/` — საბოლოო ვერსიები (ლექციის შემდეგ)

---

## როგორ დავიწყო?

### 1. Git-ის დაყენება

თუ Git არ გაქვთ დაყენებული:

- **Windows:** ჩამოტვირთეთ [git-scm.com](https://git-scm.com/download/win) და დააინსტალირეთ
- **Mac:** ტერმინალში ჩაწერეთ `git --version` — თუ არ არის, ავტომატურად შემოგთავაზებთ დაყენებას

დაყენების შემდეგ შეამოწმეთ:

```bash
git --version
```

### 2. რეპოზიტორიის კლონირება (პირველად)

გახსენით ტერმინალი და გადადით სასურველ საქაღალდეში:

```bash
cd Desktop
```

შემდეგ კლონირეთ:

```bash
git clone https://github.com/khurtsilavabatu1/Skillwill-Javascript.git
```

ეს შექმნის `Skillwill-Javascript` საქაღალდეს ყველა ფაილით. შედით მასში:

```bash
cd Skillwill-Javascript
```

### 3. ახალი მასალის ჩამოტვირთვა

ყოველ ახალ ლექციამდე, გახსენით ტერმინალი პროექტის საქაღალდეში და ჩაწერეთ:

```bash
git pull
```

ეს ჩამოტვირთავს ბოლო ცვლილებებს.

### 4. VS Code-ში გახსნა

```bash
code .
```

ან VS Code-ში: `File → Open Folder → Skillwill-Javascript`

---

## ხშირი პრობლემები

### `git pull` არ მუშაობს?

თუ თქვენ ფაილებში ცვლილებები შეიტანეთ და კონფლიქტი წარმოიქმნა:

```bash
git stash
git pull
git stash pop
```

### არ ვიცი რომელ საქაღალდეში ვარ?

```bash
pwd
```

ეს გაჩვენებთ მიმდინარე მდებარეობას.

### საქაღალდეში ფაილების ნახვა:

```bash
ls
```

---

## Git-ის მოკლე გზამკვლევი

ცალკე Git-ის სახელმძღვანელო იხილეთ: [GIT-GUIDE.md](GIT-GUIDE.md)
