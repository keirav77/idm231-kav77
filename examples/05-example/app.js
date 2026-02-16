 * Week 05: DOM - Follow Along JavaScript
 * 
 * INSTRUCTIONS FOR STUDENTS:
 * 1. Open this file in your code editor
 * 2. Open index.html in your browser
 * 3. Follow along with the instructor
 * 4. Write code in the sections marked TODO
 * 5. Save this file (Cmd+S or Ctrl+S)
 * 6. Refresh your browser to see the changes!
 */

console.log('✅ JavaScript file loaded!');

// =============================================================================
// Example 1: Change Text (The Basics!)
// =============================================================================
// GOAL: When you click the button, change the text in the box
//
// TODO: Follow these steps:
//
// Step 1: Find the button
// Hint: const changeTextBtn = document.getElementById('change-text-btn');


// Step 2: Find the demo box
// Hint: const demoBox = document.getElementById('demo-box');


// Step 3: Find the output area
// Hint: const selectOutput = document.getElementById('select-output');


// Step 4: Add a click event listener to the button
// When clicked, do these things:
// - Change demoBox.textContent to 'Text changed!'
// - Change selectOutput.textContent to show what happened
// - Use console.log to print a message
//
// Hint: changeTextBtn.addEventListener('click', () => { ... });
changeTextBtn= document.getElementById('change-text-btn');
demoBox = document.getElementById('demo-box');
selectOutput = document.getElementById('select-output');
demoBox.textContent = 'Text Changed!';
selectOutput.textContent = 'Console: Text changed!';
console.log('✅ Text changed!');


// =============================================================================
// Example 2: Highlight Multiple Items
// =============================================================================
// GOAL: Click a button to highlight all fruit items at once
//
// TODO: Follow these steps:
//
// Step 1: Find the button and output area


// Step 2: Add a click event listener
// When clicked:
// - Use querySelectorAll to find ALL elements with class 'fruit-item'
// - Loop through them with forEach
// - Add the 'highlight' class to each item
// - Update the output to say how many items were found
//
// Hint: Use .forEach((item) => { ... }) to loop through




// =============================================================================
// Example 3: Add New Items to a List
// =============================================================================
// GOAL: Type something in the input box and add it to the shopping list
//
// TODO: Follow these steps:
//
// Step 1: Find the input, button, list, and output


// Step 2: Add a click event listener to the button
// When clicked:
// - Get the text from the input: newItemInput.value
// - Create a new <li> element: document.createElement('li')
// - Set its text: newLi.textContent = inputText
// - Add it to the list: shoppingList.appendChild(newLi)
// - Clear the input: newItemInput.value = ''
// - Update the output
//
// Hint: Check if input is empty first! if (text.trim() !== '')




// =============================================================================
// Example 4: Remove Items from a List
// =============================================================================
// GOAL: Click on any task to remove it from the list
//
// TODO: Follow these steps:
//
// Step 1: Find all task items and the output
// Hint: Use querySelectorAll to get all elements with class 'task'


// Step 2: Loop through each task with forEach
// For each task, add a click event listener
// When clicked:
// - Save the task text in a variable (before removing!)
// - Get the parent: task.parentNode
// - Remove it: parent.removeChild(task)
// - Update the output to show which task was removed




// =============================================================================
// Example 5: Toggle Classes On and Off
// =============================================================================
// GOAL: Click button to add/remove the highlight class
//
// TODO: Follow these steps:
//
// Step 1: Find the box, button, and output


// Step 2: Add click event listener to toggle button
// When clicked:
// - Use classList.toggle('highlight') to add/remove the class
// - Read the current classes: attributeBox.className
// - Show them in the output




// =============================================================================
// 🎉 You Did It!
// =============================================================================
// If you got all 5 examples working, congratulations! 
// You now know the core DOM manipulation techniques.
//
// Want more practice? Try these challenges:
// 1. Add a "Remove All" button for the shopping list
// 2. Make the fruit items change color when you click them
// 3. Add a button that counts all list items on the page
// 4. Create a "Reset" button that removes all highlights

console.log('👋 Ready to start! Follow along with your instructor.');

const highlightBtn = document.querySelector("#highlight-button");
highlightBtn.addEventListener("click", () => {
    const items = document.querySelectorAll('.fruit-item');
    items.forEach((item) => {
        item.classList.add("highlight");
    });
    const output = document.querySelector("#highlight-output");
    output.textContent = `Found ${items.length} items.`;
});

const addItemBtn = document.querySelector("#add-item-button");
addItemBtn.addEventListener("click", () => {
    const newItemInput= document.querySelector ("#new-item-input");
    const inputText = newItemInput.value;
   
    if (inputText.trim() !== '') {
        const newItem = document.createElement("li");
        newItem.textContent= inputText;
        document.querySelector("#shopping-list").appendChild(newItem);
        newItemInput.value = '';
    }





