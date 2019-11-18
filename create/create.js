// create an element and bind it to
// a variab el called myElem
// (so we can refer) to it later
const myElem = document.createElement("p");

console.log(myElem);

// notice that we have created it, but it
// does not appear *in* the document yet.

// now let's add the paragraph to the document
document.body.appendChild(myElem);


// we created a p element.  Paragraphs can
// contain text, so let's add some using the
// special property "textContent".
myElem.textContent = "hello world";
console.log(myElem);




function updateTheTime() {
  theTime.textContent = (new Date()).toISOString();
}

// now add a paragraph that tells the time
const theTime = document.createElement("p");
document.body.appendChild(theTime);
updateTheTime();

// now add a button to the page
const myButton = document.createElement("button");
myButton.textContent = "Update";
document.body.appendChild(myButton);

myButton.addEventListener("click", updateTheTime);

