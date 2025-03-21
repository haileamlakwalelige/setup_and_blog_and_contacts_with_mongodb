
```markdown
# Blog App Backend

This is a backend for a blog application built using Node.js, Express, and MongoDB. It supports creating, updating, deleting, and fetching blog posts. Additionally, it allows for image uploads using Multer.

## Features

- **CRUD operations** for Blog posts:
  - Create a new blog with an image upload
  - Update an existing blog by ID
  - Delete a blog by ID
  - Fetch a single blog by ID
  - Fetch all blogs
  
- **File Uploads** using Multer for handling image uploads for each blog post.

- **MongoDB Atlas** for database hosting.

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling for Node.js
- **Multer** - Middleware for handling multipart/form-data, used for image uploads

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/haileamlakwalelige/setup_and_blog_and_contacts_with_mongodb
cd setup_and_blog_and_contacts_with_mongodb
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Set up `.env` file:

Create a `.env` file at the root of the project and add the following environment variables:

```env
PORT=5000
MONGO_URI=mongodb://your-mongo-db-uri
```

Replace `your-mongo-db-uri` with your MongoDB connection string.

### 4. Run the server:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is 8800).

## API Endpoints

### 1. `POST /blogs`
Create a new blog post with an image upload.

**Request body:**
```json
{
  "topTitle": "Blog Top Title",
  "topDescription": "Blog Top Description",
  "title": "Blog Title",
  "date": "2025-03-21",
  "photo": "image_file" // Image file will be uploaded via form-data
}
```

### 2. `PUT /blogs/:id`
Update a blog post by ID.

**Request body:**
```json
{
  "topTitle": "Updated Blog Top Title",
  "topDescription": "Updated Blog Top Description",
  "title": "Updated Blog Title"
}
```

### 3. `DELETE /blogs/:id`
Delete a blog post by ID.

**Response:**
```json
{
  "message": "Blog deleted successfully",
  "deletedBlog": { ...blog details... }
}
```

### 4. `GET /blogs/:id`
Get a single blog post by ID.

### 5. `GET /blogs`
Get all blog posts.


### use the same step for contacts too, but use this kind of json data 
```markdown
{
    "fullName": "John Doe",
    "email": "johndoe@example.com",
    "message": "I am interested in your services. Please contact me."
}

## Contribution

Feel free to fork the repository and contribute. To submit a change:

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to your forked repository
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
