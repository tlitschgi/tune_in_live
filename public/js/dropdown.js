// this script is purely visual/front-end
const buttonArray = document.querySelectorAll(".dropdown-link");
const filter = document.getElementById("filter");

console.log(buttonArray);
buttonArray.forEach(function (elem) {
  elem.addEventListener("click", function (event) {
    const clickedObject = event.target;
    filter.textContent = clickedObject.textContent;

    // send request to database with clickedObject.textContent
  });
});
