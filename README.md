# TuneInLive

TuneInLive is a music blog site where users can create posts, comment on posts, search for events by genre, and bookmark posts for later. The project follows the Model-View-Controller (MVC) architecture and includes authentication, session management, and RESTful API functionality.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication:** Users can sign up, log in, and log out.
- **Create and Manage Posts:** Users can create, edit, and delete their own posts.
- **Commenting:** Users can comment on posts.
- **Genre Filtering:** Posts can be filtered by genre.
- **Bookmarking:** Users can bookmark posts for easy access later.
- **Responsive Design:** The site is mobile-friendly and responsive.

## Technologies Used
### Backend:
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL

### Frontend:
- Handlebars.js
- CSS
- JavaScript

### Authentication:
- express-session
- bcrypt

### Deployment:
- Render

## Project Structure
tuneInLive/
│
├── config/
│   └── connection.js
├── controllers/
│   ├── api/
│   │   ├── commentRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── homeRoutes.js
│   └── dashboardRoutes.js
├── db/
│   ├── insert-many.sql
│   ├── insert-one.sql
│   ├── schema.sql
│   ├── schema2.sql
│   ├── seeds.sql
│   ├── select.sql
│   ├── shell-commands.sql
│   ├── update.sql
│   └── delete.sql
├── models/
│   ├── concert.js
│   ├── genre.js
│   ├── index.js
│   ├── post.js
│   └── user.js
├── node_modules/
├── public/
│   ├── css/
│   │   ├── homeStyles.css
│   │   └── modalStyle.css
│   ├── js/
│   │   ├── dropdown.js
│   │   ├── loginModal.js
│   │   └── postFiller.js
├── seeds/
│   ├── concertData.json
│   ├── genreData.json
│   ├── postData.json
│   ├── seeds.js
│   └── userData.json
├── utils/
│   ├── auth.js
│   └── helpers.js
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   │   ├── header.handlebars
│   │   └── footer.handlebars
│   ├── homepage.handlebars
│   ├── dashboard.handlebars
│   ├── login.handlebars
│   └── signup.handlebars
├── .env
├── .gitignore
├── index.html
├── package-lock.json
├── server.js
├── package.json
└── README.md

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/tuneInLive.git

2. **Navigate to the project directory:**
    cd tuneInLive

3. **Install the dependencies:**
    npm install

4. **Set up the database:**
   - Create a PostgreSQL database and update the .env file with your database credentials.
   - Run the schema and seed files:
        npm run seed

5. **Start the application:**
    npm start
Visit http://localhost:3001 in your browser.

# Usage

## Sign Up/Login
Create a new account or log in to access full functionality.

## Create a Post
Work in progess: will be an available feature in the future!

## Comment on Posts
Work in progess: will be an available feature in the future!

## Filter by Genre
Use the dropdown menu to filter posts by your favorite genre.

## Bookmark Posts
Click the bookmark button on any post to save it for later.

# API Endpoints

## User Routes
- **POST /api/users:** Create a new user.
- **POST /api/users/login:** Log in a user.
- **POST /api/users/logout:** Log out the current user.

## Post Routes
- **GET /api/posts:** Get all posts.
- **POST /api/posts:** Create a new post.
- **PUT /api/posts/:id:** Update a post.
- **DELETE /api/posts/:id:** Delete a post.

## Comment Routes
- **POST /api/comments:** Create a new comment.
- **DELETE /api/comments/:id:** Delete a comment.

## Bookmark Routes
- **POST /api/bookmarks:** Bookmark a post.
- **DELETE /api/bookmarks/:id:** Remove a bookmark.

# Contributing
Contributions are welcome! Please open an issue or submit a pull request for any features or bug fixes.

# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.