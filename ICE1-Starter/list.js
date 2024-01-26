//Name: Aman Gulati
//Date: 26th jan 2024
//description: adding to elements to the given list

// Get the <ul> element
let list = document.getElementById("theList");

// ADD NEW ITEM TO END OF LIST
// Create element
let element = document.createElement("li");
// Create text node
let text = document.createTextNode("spinach");
// Add text node to element
element.appendChild(text);
// Add element to end of list
list.appendChild(element);

// ADD NEW ITEM START OF LIST
// Create element
element = document.createElement("li");
// Create text node
text = document.createTextNode("cream");
// Add text node to element
element.appendChild(text);
// Add element to start of list
list.insertBefore(element, list.childNodes[0]);

// All <li> elements
let allItems = list.getElementsByTagName("li");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Loop through elements
for (let i = 0; i < allItems.length; i++) {
    // Change class to cool
    allItems[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
let heading = document.querySelector("h2");
// h2 text
let headingText = heading.firstChild.nodeValue;
// No. of <li> elements
let itemCount = allItems.length;
// Content
let newHeadingText = headingText + "<span>" + itemCount + "</span>";
// Update h2 using innerHTML (not textContent) because it contains markup
heading.innerHTML = newHeadingText;

