const buttonArray = document.querySelectorAll(".dropdown-link");
const filter = document.getElementsByClassName("filter")[0];
const postArray = document.querySelectorAll(".post-box");

let sort = "All";

// place an event listener in each .dropdown-link button
buttonArray.forEach(function (elem) {
  
  elem.addEventListener("click", function (event) {
    // I know this isn't a great way to do this, it can be replaced later.
    sort = event.target.textContent;
    filter.textContent = event.target.textContent;
    // sort through post list and figure out what stays and goes.
    if (event.target.textContent == "All") {
      postArray.forEach(function (post) {
        post.style.display = "block";
      });
    } else {
      postArray.forEach(function (post) {
        if (post.id == sort) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    }
  });
});
