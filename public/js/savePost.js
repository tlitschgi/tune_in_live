const saveArray = document.querySelectorAll(".save");

// loop through array
saveArray.forEach(function (element) {
  // add an event listener to element
  element.addEventListener("click", async (event) => {
    const text = event.target.textContent;
    if (text == "☆") {
      event.target.textContent = "★";

      // add to database
      const concert_id = event.target.dataset.concert_id;
      const user_id = event.target.dataset.user_id;

      const response = await fetch("/api/postRoutes", { // go to bookmark
        method: "POST",
        body: JSON.stringify({concert_id, user_id}), // send concert id and user id
        headers: { "Content-Type": "application/json" },
      });
    } else if (text == "★") {
      event.target.textContent = "☆";
      // remove from database
    }

    // api code
    // const postId = button.getAttribute('data-post-id');

    // const response = await fetch('/api/bookmarks', {
    //     method: 'POST',
    //     body: JSON.stringify({ post_id: postId }),
    //     headers: { 'Content-Type': 'application/json' },
    // });

    // if (response.ok) {
    //     alert('Post bookmarked successfully!');
    // } else {
    //     alert('Failed to bookmark post.');
    // }
  });
});
