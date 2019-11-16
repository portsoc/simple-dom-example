// create an element and bind it to
// a variab el called myElem
// (so we can refer) to it later
const myElem = document.createElement("p");

console.log(myElem);

// notice that we have created it, but it
// does not appear *in* the document yet.

// we created a p element.  Paragraphs can
// contain text, so let's add some using the
// special property "textContent".
myElem.textContent = "hello world";
console.log(myElem);

// now let's add the paragraph to the document
document.body.appendChild(myElem);


