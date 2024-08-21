// this file uses a template to fill the website with posts, assigning them a random genre

// TEMP CONST
const genres = [
  "blues",
  "country",
  "disco",
  "electronic",
  "funk",
  "hiphop",
  "jazz",
  "metal",
  "pop",
  "punk",
  "r&b",
  "rock",
];

function addPost(genre, title, text, date, profile) {
  // posts section of the home page
  const postSection = document.getElementById("post-section");
  // create a new post
  const post = document.createElement("div");
  post.setAttribute("class", "post-box");
  // add img to post
  const imgEl = document.createElement("img");
  Object.assign(imgEl, {
    src: "https://placehold.co/600x400",
    alt: "placeholder",
    className: "post-img",
  });
  post.append(imgEl);
  // add category to post
  const genreEl = document.createElement("h2");
  Object.assign(genreEl, {
    className: "category",
    textContent: genre,
  });
  post.append(genreEl);
  // add title to post
  const titleEl = document.createElement("a");
  Object.assign(titleEl, {
    href: "guh",
    className: "postTitle",
    textContent: title,
  });
  post.append(titleEl);
  // add date to post
  const dateEl = document.createElement("span");
  Object.assign(dateEl, {
    className: "post-date",
    textContent: date,
  });
  post.append(dateEl);
  // add description to post
  const textEl = document.createElement("p");
  Object.assign(textEl, {
    className: "post-description",
    textContent: text,
  });

  // add post to post section
  postSection.append(post);
}

// addPost(
//   genres[Math.floor(Math.random() * genres.length)],
//   "Post Title",
//   "Post Description",
//   "08-19-24",
//   "Profile Name"
// );

// I'm putting this to the side for now, and using partials to fill the website
