// use a querySelector to find the first element
// in the document that is an h1
const myHeading = document.querySelector("h1");

// write the text content of the element to the console
console.log(myHeading);
console.log(myHeading.textContent);

// update the text content of the element
myHeading.textContent = "Updated heading! Woooo!";

// write the element to the console
console.log(myHeading.textContent);



// now use querySelectorAll to select all
// the paragraphs - this gives us an array
const myParas = document.querySelectorAll("p");
console.log(myParas);

for (const para of myParas) {
  // we can write out each paragraph's text
  console.log(para.textContent);

  // and modify it...
  para.textContent = para.textContent + "  Additional text!";

  // and we can also change other things.

  para.style = "color: red;"
}

// we can also do any of this at the console.
// try typing: myHeading.textContent = "Bananas!";

