
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
Differents between getElementById, getElementsByClassName, and querySelector / querySelectorAll is:

getElementById(): It selects element by id. The id must be unique. It returns only one element.

getElementsByClassName(): It selects elements by class name. One or more elements can have same class. It returns HTMLCollection.

querySelector(): It selects element by CSS selector. It returns only 1st matching element.

querySelectorAll(): It selects element by CSS selector. It returns all matching element. And it returns NodeList.

### 2. How do you create and insert a new element into the DOM?
Ans:
step-1: Create new element. Ex: const p = document.createElement('p');
step-2: Add something into the element. Ex: p.innerText = "Tasnima  Tabassum Tima";
step-3: Select the parent element. Let, parent node is "<div id="parent"></div>". Ex: const parent = document.getElementById('parent');
step-4: Append this element into parent.Ex: parent.appendChild(p);

### 3. What is Event Bubbling? And how does it work?
Ans:
When an event happens on a child element, it moves upward to its parent elements.
When clicked on a button, the event happens on that element 1st. Then it continuously moves to upward to its parent and then grandparent. Before the last move, it moves to the document and finally it moves to the window. this is called Event Bubbling. 

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: 
Without adding event listener to many childs, we add one event listener to the parent. It is called Event Delegation. 

advantage:
1. No need to add many event listener.
2. It works for after added elements.
3. code is clean.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
Difference between preventDefault() and stopPropagation() methods:
preventDefault(): 
1. Stop link from opening
2. When a form is submitted, the page reloads.

stopPropagation():
1. It is used for stops event bubbling.