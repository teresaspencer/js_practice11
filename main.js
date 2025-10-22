/* Practice Assignment 11:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

/////////////////
// NOTE: Questions 2 and 5 are about toggling. 
// While Part 1 is wrong, Part 2 will be correct. 
// This is not an error. You should try to make 
// both parts correct. 
////////////////

// 1) Add an event listener to the button with an id
// of "button1". Listen for the click event. The
// button should change the text content of the
// paragraph with an id of "p1" to:
// "Hello World! I'm listening to events."
const myP1 = document.getElementById("p1");
const changeP1 = document.getElementById("button1");

changeP1.addEventListener("click", function() {
    myP1.textContent = "Hello World! I'm listening to events."; 
});


// 2) Add an event listener to the button with an id
// of "button2". Listen for the click event. The
// button should change the text content of the
// paragraph with an id of "p2" to:
// "This button toggles text content."
// If the button is clicked a 2nd time,
// the text content should change back to:
// "Paragraph Two."
// The button should switch the text back
// and forth, so 3rd and 4th clicks will
// do the same, etc.
const myP2 = document.getElementById("p2");
const changeP2 = document.getElementById("button2");

let isToggled = true;
changeP2.addEventListener("click", 
    (event) => {
        if(isToggled) {
            myP2.textContent = "This button toggles text content.";
        } else {
            myP2.textContent = "Paragraph Two.";
        }
        isToggled = !isToggled;
    }, false);


/////////////////////
// Note: The remaining buttons and paragraphs
// do not have id attributes. You will need to
// construct selectors to meet these challenges.
////////////////////

// 3) In the "myPage" section, select the third
// button and assign a "click" listener. When
// clicked, it should change the text content
// of the third paragraph in the "myPage" section
// to "Third button clicked."
/////////
// HINT: You should look at the HTML carefully to
// make your selectors.
const page = document.getElementById("myPage");
const button3 = page.querySelector("button:nth-of-type(3)");
const myP3 = page.querySelector("div p:nth-of-type(3)");

button3.addEventListener("click", (event) => {
    myP3.textContent = "Third button clicked.";
});

// 4) In the "myPage" section, select the fourth
// button and assign a "click" listener. When
// clicked, it should add a class named
// "fourthPara" to the fourth paragraph
// in the "myPage" section.
const button4 = page.querySelector("button:nth-of-type(4)");
const myP4 = page.querySelector("div p:nth-of-type(4)");
class fourthPara {}

button4.addEventListener("click", (event) => {
    myP4.classList.add("fourthPara");
});

// 5) In the "myPage" section, select the fifth
// button and assign a "click" listener. When
// clicked, it should toggle the class named
// "fourthPara" for the fifth paragraph
// in the "myPage" section.
const button5 = page.querySelector("button:nth-of-type(5)");
const myP5 = page.querySelector("div p:nth-of-type(5)");

button5.addEventListener("click", (event) => {
    myP5.classList.toggle("fourthPara");
});

// 6) In the "myPage" section, select the sixth
// button and assign a "click" listener. When
// clicked, it should change the text content
// of the sixth paragraph in the "myPage"
// section to:
// "Event Bubbling. Stopping propagation."
// Your event listener should be set to
// Event Bubbling. You should stop the
// event propagation.
const button6 = page.querySelector("button:nth-of-type(6)");
const myP6 = page.querySelector("div p:nth-of-type(6)");

    button6.addEventListener("click", (event) => {
        myP6.textContent = "Event Bubbling. Stopping propagation.";
        event.stopPropagation();
    }, false
);

// 7) Provide a function named "addToSessionStorage"
// that accepts two parameters:
// The first parameter "storeName" is the store
// name for your session storage.
// The second parameter "objName" is an object.
// Inside the function, use sessionStorage to
// save "objName" under the store name.
// Your test object can contain any properties
// you want.
//////
// Hint: Use JSON methods on these storage problems.
/////
function addToSessionStorage(storeName, objName) {
    const json = JSON.stringify(objName);
    sessionStorage.setItem(storeName, json);
}


// 8) Provide a function named getFromSessionStorage
// that will retrieve the object you put in
// session storage with the previous function.
// Your function should accept a "storeName"
// parameter and return the object it retrieves.
function getFromSessionStorage(storeName) {
    const json = sessionStorage.getItem(storeName);
    return JSON.parse(json);
}


// 9) Provide a function emptyWebStorage
// that will remove all entries from local
// storage and session storage.
function emptyWebStorage() {
    sessionStorage.clear();
    localStorage.clear();
}

