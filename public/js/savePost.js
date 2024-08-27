const saveArray = document.querySelectorAll(".save");

// Get the modal
var modal = document.getElementById("loginModal");

function signIn() {

}

// loop through array
saveArray.forEach(function (element) {
  // add an event listener to element
  element.addEventListener("click", async (event) => {
    // if user is signed in
    if (signIn()) {
      const text = event.target.textContent;
      if (text == "☆") {
        event.target.textContent = "★";

        // add to database
        const concert_id = Number(event.target.dataset.concert_id);
        const user_id = Number(event.target.dataset.user_id);

        const response = await fetch("/api/post", {
          // go to bookmark
          method: "POST",
          body: JSON.stringify({ concert_id, user_id }), // send concert id and user id
          headers: { "Content-Type": "application/json" },
        });

        //   if (response.ok) {
        //     alert("Post bookmarked yay");
        //   } else {
        //     console.log(response.statusText);
        //   }
      } else if (text == "★") {
        event.target.textContent = "☆";
        // remove from database
      }
    } else {
        modal.style.display = "block";
    }
  });
});
