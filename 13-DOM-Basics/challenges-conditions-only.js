////////////////////////////////////
// DOM Basics
// Practice Challenges - Conditions Only
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Element Inspector
// (getElementById)

/*
Build a small utility that inspects individual elements by their ID
and displays their properties.

1. Create a function 'inspectElement' that takes an element ID string
   and returns an object with:
   - tagName: the element's tag name (e.g., 'DIV', 'P')
   - id: the element's id
   - hasChildren: boolean, whether it has child elements
   - childCount: number of child elements
   - textLength: length of the element's textContent
2. Use getElementById to select elements with these IDs:
   'greeting-text', 'counter-display', 'output-1'
   and log the inspection result for each.
3. Create a function 'setElementText' that takes an ID and a string,
   finds the element by ID, and sets its textContent.
   If the element is not found, log "Element not found: <id>"
4. Call setElementText with 'greeting-text' and 'Hello from the inspector!'
5. Call setElementText with 'nonexistent' to test the not-found path
6. Create a function 'getMultipleById' that takes an array of ID strings,
   finds each element, and returns an array of the found elements
   (skip null values). Log the count of found vs requested.

TEST DATA: Use the IDs from the practice page HTML

HINT: element.tagName returns the tag in uppercase
HINT: element.children gives child elements (not text nodes)
HINT: getElementById returns null for non-existent IDs

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #2 - Profile Builder
// (querySelector)

/*
Build a profile card editor that uses querySelector to find and modify
elements within a specific section of the page.

1. Create a function 'updateProfile' that takes an object with
   properties: name, role, email, avatarLetter, avatarColor.
   Use querySelector to find and update:
   - '.profile-name' → textContent = name
   - '.profile-role' → textContent = role
   - '.profile-email' → textContent = email
   - '#avatar' → textContent = avatarLetter, style.background = avatarColor
2. Call updateProfile with:
   { name: 'Ana Kapanadze', role: 'UX Designer', email: 'ana@design.ge',
     avatarLetter: 'A', avatarColor: '#e91e63' }
3. Create a function 'readProfile' that uses querySelector to read
   the current profile data and returns it as an object with the same
   properties as above (read from the DOM elements).
4. Log the profile object before and after updateProfile.
5. Create a function 'highlightElement' that takes a CSS selector string
   and adds a yellow border (3px solid #fdd835) and padding (4px)
   to the found element. If not found, log a warning.
6. Call highlightElement with '.profile-name'
7. Call highlightElement with '.nonexistent-class' to test the warning

HINT: querySelector('#avatar') is equivalent to getElementById('avatar')
HINT: querySelector('.profile-info .profile-email') targets nested elements
HINT: Remember that querySelector returns null if not found

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #3 - Task Manager
// (querySelectorAll)

/*
Build a task manager that works with multiple list items using querySelectorAll.

1. Create a function 'getTaskCount' that uses querySelectorAll('.task-item')
   and returns the total number of tasks.
2. Create a function 'getTasksByPriority' that takes a priority string
   ('high', 'medium', 'low') and uses querySelectorAll to find all
   matching .priority-{level} elements. Return the count.
3. Create a function 'completeTask' that takes an index (0-based) and:
   - Uses querySelectorAll('.task-item') to get all tasks
   - If the index is valid, adds the 'completed' class to that task
   - If invalid, logs "Invalid task index"
4. Create a function 'completeAllTasks' that uses querySelectorAll
   and forEach to add the 'completed' class to every task.
5. Create a function 'getTaskTexts' that uses querySelectorAll('.task-item')
   and returns an array of the text content of each task (trimmed).
   Use a for loop to build the array.
6. Log the count of all tasks, count by each priority, then complete
   task at index 0, then log all task texts.

HINT: querySelectorAll returns a NodeList — use .length and [index]
HINT: NodeList supports forEach but NOT map/filter — use for loops
HINT: classList.add('completed') adds a CSS class

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #4 - Color Grid Controller
// (getElementsByClassName)

/*
Build a controller for the color grid using getElementsByClassName.

1. Create a function 'getColorBoxCount' that uses
   getElementsByClassName('color-box') and returns the count.
2. Create a function 'fadeBox' that takes an index and opacity value,
   finds all color-box elements with getElementsByClassName,
   and sets the opacity of the element at the given index.
   If index is invalid, log "Invalid box index".
3. Create a function 'fadeAllBoxes' that takes an opacity value
   and applies it to ALL color boxes using a for loop.
4. Create a function 'scaleBox' that takes an index and a scale value
   (e.g., 1.2) and sets transform: scale(value) on that box.
5. Create a function 'resetAllBoxes' that restores opacity to 1
   and removes any transform from all color boxes.
6. Test: fade all boxes to 0.3, then scale box at index 2,
   then reset all.

HINT: getElementsByClassName returns a live HTMLCollection
HINT: HTMLCollection does NOT have forEach — use a for loop
HINT: style.transform = `scale(${value})` for scaling
HINT: style.transform = '' removes inline transform

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #5 - Table Analyzer
// (getElementsByTagName)

/*
Build a table analyzer that reads and highlights rows using getElementsByTagName.

1. Create a function 'getTableData' that:
   - Uses getElementById to get 'student-table'
   - Uses getElementsByTagName to get the tbody, then its tr elements
   - For each row, gets the td cells and extracts:
     { name: string, grade: number, status: string }
   - Returns an array of these objects
2. Create a function 'getAverageGrade' that calls getTableData
   and calculates the average grade.
3. Create a function 'highlightRow' that takes a row index (0-based)
   and a color string, and sets that row's backgroundColor.
4. Create a function 'highlightAboveAverage' that:
   - Gets the table data and average grade
   - Highlights (light green '#e8f5e9') all rows with grade >= average
   - Highlights (light red '#ffebee') all rows with grade < average
5. Create a function 'getColumnValues' that takes a column index
   and returns an array of all values in that column (from tbody rows).
6. Log: table data, average grade, column 0 values, then highlight rows.

HINT: table.getElementsByTagName('tbody')[0] gets the first tbody
HINT: row.getElementsByTagName('td') gets cells in a row
HINT: Number(cell.textContent) converts cell text to number

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #6 - Content Editor
// (innerHTML & textContent)

/*
Build a content editor that demonstrates the difference between
innerHTML and textContent.

1. Create a function 'getContentInfo' that takes an element ID and returns:
   - innerHTML: the element's innerHTML
   - textContent: the element's textContent
   - innerHTMLLength: innerHTML length
   - textContentLength: textContent length
   - hasTags: whether innerHTML contains '<' (HTML tags)
2. Create a function 'safeSetContent' that takes an element ID and text,
   and uses textContent to set it (safe from XSS).
3. Create a function 'richSetContent' that takes an element ID and HTML,
   and uses innerHTML to set it (renders HTML).
4. Create a function 'appendContent' that takes an element ID and HTML,
   and appends to the existing innerHTML using +=.
5. Create a function 'clearContent' that takes an element ID and
   sets innerHTML to ''.
6. Test all functions on 'content-area':
   - Log content info
   - Set rich content with a heading and paragraph
   - Append a notification div
   - Log content info again
   - Clear the content

HINT: innerHTML includes HTML tags: '<strong>Bold</strong> text'
HINT: textContent strips tags: 'Bold text'
HINT: textContent is always safe — it escapes HTML

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #7 - Style Manager
// (style property)

/*
Build a style manager that programmatically changes element styles.

1. Create a function 'setStyles' that takes an element ID and an object
   of style properties (e.g., { color: 'red', fontSize: '20px' })
   and applies them all to the element using a for...in loop.
2. Create a function 'resetStyles' that takes an element ID and
   clears all inline styles using style.cssText = ''.
3. Create a function 'toggleDarkMode' that takes an element ID and:
   - If backgroundColor is 'rgb(26, 35, 126)' (or similar dark), resets to default
   - Otherwise sets dark theme: bg '#1a237e', color '#fff', padding '20px'
4. Create a function 'animateSize' that takes an element ID and uses
   setInterval to gradually increase fontSize from 1rem to 3rem
   (increment by 0.1rem every 50ms). Stop when reaching 3rem.
5. Apply setStyles to 'style-target' with:
   { color: '#fff', backgroundColor: '#3949ab', padding: '20px',
     borderRadius: '12px', fontWeight: 'bold' }
6. Test toggleDarkMode on 'style-target' twice (dark → light → dark)

HINT: for...in iterates over object keys: for (const key in styles) { }
HINT: element.style[key] = value works with camelCase keys
HINT: parseFloat('1.5rem') returns 1.5
HINT: getComputedStyle(el).backgroundColor returns the computed color

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #8 - Notification System
// (innerHTML, style, querySelectorAll)

/*
Build a notification system that creates, styles, and manages
notification elements dynamically.

1. Create a function 'createNotification' that takes a type
   ('success', 'error', 'info') and a message string.
   It should add a notification div to #notification-area using innerHTML +=.
   The div should have class "notification {type}" and contain the message.
2. Create a function 'getNotificationCount' that uses querySelectorAll
   to count all .notification elements inside #notification-area.
3. Create a function 'removeLastNotification' that uses querySelectorAll
   to find all notifications, and removes the last one by setting
   its style.display = 'none'.
4. Create a function 'clearAllNotifications' that sets
   #notification-area's innerHTML to ''.
5. Create a function 'styleNotifications' that uses querySelectorAll
   to find all visible .notification elements and adds
   a bottom margin (8px) and border-radius (8px) to each.
6. Test: add 3 notifications (one of each type), log count,
   remove last, log count again, style remaining.

HINT: innerHTML += adds content without destroying existing content
HINT: querySelectorAll('.notification') finds all notification elements
HINT: The last element is at index [nodeList.length - 1]

GOOD LUCK 😀
*/
