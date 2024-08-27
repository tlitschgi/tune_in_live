const saveArray = document.querySelectorAll(".save");

// loop through array
saveArray.forEach(function (element) {
  // add an event listener to element
  element.addEventListener("click", function (event) {
    // get the text content from 
    const text = event.target.textContent;
    if (text == "☆") {
      event.target.textContent = "★";
      // add to database
    } else if (text == "★") {
      event.target.textContent = "☆";
      // remove from database
    }
  });
});