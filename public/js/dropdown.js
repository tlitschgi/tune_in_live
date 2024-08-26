// this script is purely visual/front-end
const buttonArray = document.querySelectorAll(".dropdown-link");
const filter = document.getElementsByClassName("filter")[0];

console.log(buttonArray);
buttonArray.forEach(function (elem) {
  elem.addEventListener("click", function (event) {
    const clickedObject = event.target;
    filter.textContent = clickedObject.textContent;

    // send request to database with clickedObject.textContent
    const id = event.target.id + 'ID';
    const posts = document.querySelectorAll(".post-box");
    posts.forEach(function(post) {
      if (post.id == id) {
        console.log(post);
        post.display = 'block'
      }
      else {
        post.display = 'none';
      }
    })
  });
});

// doesn't quite work