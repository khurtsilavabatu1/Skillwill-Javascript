# DOM მანიპულაცია - სასწავლო რესურსები

თითოეული თემისთვის მოცემულია ბმულები MDN Web Docs-ზე, W3Schools-ზე და JavaScript.info-ზე.

---

## ძირითადი მასალა

### 1. createElement (ელემენტის შექმნა)
DOM-ში ახალი ელემენტის დინამიურად შექმნა JavaScript-ით.

**MDN Web Docs:**
- [Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

**W3Schools:**
- [JavaScript DOM Elements - Creating](https://www.w3schools.com/js/js_htmldom_nodes.asp)

**JavaScript.info:**
- [Creating an element](https://javascript.info/modifying-document#creating-an-element)

---

### 2. appendChild (შვილი ელემენტის დამატება)
ახალი ან არსებული ელემენტის მშობელ ელემენტში დამატება ბოლო შვილად.

**MDN Web Docs:**
- [Node.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

**W3Schools:**
- [JavaScript appendChild()](https://www.w3schools.com/jsref/met_node_appendchild.asp)

**JavaScript.info:**
- [Inserting elements](https://javascript.info/modifying-document#append-prepend-before-after-replacewith)

---

### 3. insertBefore (ელემენტის ჩასმა კონკრეტულ ადგილას)
ახალი ელემენტის ჩასმა სხვა ელემენტამდე მშობელ კონტეინერში.

**MDN Web Docs:**
- [Node.insertBefore()](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

**W3Schools:**
- [JavaScript insertBefore()](https://www.w3schools.com/jsref/met_node_insertbefore.asp)

**JavaScript.info:**
- [insertBefore](https://javascript.info/modifying-document#insertbefore)

---

### 4. append / prepend / before / after (თანამედროვე ჩასმის მეთოდები)
ES6+ მეთოდები, რომლებიც უფრო მოქნილი ალტერნატივებია appendChild-ის და insertBefore-ის.

**MDN Web Docs:**
- [Element.append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [Element.prepend()](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend)
- [Element.before()](https://developer.mozilla.org/en-US/docs/Web/API/Element/before)
- [Element.after()](https://developer.mozilla.org/en-US/docs/Web/API/Element/after)

**W3Schools:**
- [JavaScript DOM Nodes](https://www.w3schools.com/js/js_htmldom_nodes.asp)

**JavaScript.info:**
- [append/prepend/before/after](https://javascript.info/modifying-document#append-prepend-before-after-replacewith)

---

### 5. removeChild (შვილი ელემენტის ამოღება)
ელემენტის ამოღება DOM-დან მშობელი ელემენტის მეშვეობით.

**MDN Web Docs:**
- [Node.removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

**W3Schools:**
- [JavaScript removeChild()](https://www.w3schools.com/jsref/met_node_removechild.asp)

**JavaScript.info:**
- [Removing nodes](https://javascript.info/modifying-document#removal-of-nodes)

---

### 6. remove() (თანამედროვე ამოღება)
ელემენტის პირდაპირი ამოღება DOM-დან, მშობელის მითითების გარეშე.

**MDN Web Docs:**
- [Element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)

**W3Schools:**
- [JavaScript remove()](https://www.w3schools.com/jsref/met_element_remove.asp)

---

### 7. replaceChild / replaceWith (ელემენტის ჩანაცვლება)
არსებული ელემენტის ახლით ჩანაცვლება DOM-ში.

**MDN Web Docs:**
- [Node.replaceChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
- [Element.replaceWith()](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith)

**W3Schools:**
- [JavaScript replaceChild()](https://www.w3schools.com/jsref/met_node_replacechild.asp)

---

### 8. cloneNode (ელემენტის კლონირება)
არსებული ელემენტის ზუსტი კოპიის შექმნა — ზედაპირული ან ღრმა.

**MDN Web Docs:**
- [Node.cloneNode()](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)

**W3Schools:**
- [JavaScript cloneNode()](https://www.w3schools.com/jsref/met_node_clonenode.asp)

**JavaScript.info:**
- [Cloning nodes](https://javascript.info/modifying-document#cloning-nodes-clonenode)

---

### 9. DocumentFragment (დოკუმენტის ფრაგმენტი)
ვირტუალური კონტეინერი რამდენიმე ელემენტის ერთიანად, ეფექტურად ჩასასმელად DOM-ში.

**MDN Web Docs:**
- [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
- [Document.createDocumentFragment()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)

**W3Schools:**
- [JavaScript createDocumentFragment()](https://www.w3schools.com/jsref/met_document_createdocumentfragment.asp)

**JavaScript.info:**
- [DocumentFragment](https://javascript.info/modifying-document#documentfragment) (brief mention)

---

## დამატებითი რესურსები

- [DOM Enlightenment](http://domenlightenment.com/) — Cody Lindley-ის წიგნი DOM-ის შესახებ
- [JavaScript.info - Modifying the document](https://javascript.info/modifying-document) — დოკუმენტის მოდიფიკაციის სრული თავი
- [MDN - Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) — MDN-ის სახელმძღვანელო
- [freeCodeCamp - DOM Manipulation](https://www.freecodecamp.org/news/dom-manipulation-in-javascript/) — DOM მანიპულაციის სტატია
