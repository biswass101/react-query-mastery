
# 📝 Todo API (React Query + Express + MongoDB + Mongoose )

A simple and clean **RESTful API** built with **Express.js**, **MongoDB**, and **Mongoose** to perform CRUD operations on todo items. Additionally the **React Query** Support in the frontend

---

## 🚀 Features

- ✅ Create, Read, Update, and Delete (CRUD) Todos by React Query 
- ⚙️ MongoDB + Mongoose for database modeling  
- 🌍 CORS enabled for frontend integration   
- 🧠 Clean and minimal structure (single-file version)

---

## 🗂️ Project Structure

```
.
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── hooks
│   │   ├── usesingleTodoQuery.ts
│   │   └── useTodosQuery.ts
│   ├── layout.tsx
│   ├── lib
│   │   └── api
│   ├── page.tsx
│   ├── single-todo
│   │   └── page.tsx
│   └── todos
│       └── page.tsx
├── .env
├── eslint.config.mjs
├── .gitignore
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── server
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
└── tsconfig.json

````

---

## 🧰 Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB / Mongoose**  
- **dotenv**  
- **cors**
- **Next JS**
- **React Query**

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/biswass101/react-query-mastery
cd react-query-mastery
````

### 2. Install dependencies
```bash
npm install
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Run the next app and server

```bash
npm run dev
cd server
node server.js
```

or with nodemon for server:

```bash
npm run dev
```

### 5. Test

Once running, visit:

```
http://localhost:3000/
http://localhost:5000/
```

You should see:

```
✅ Home page of next app
✅ Todo API is running...
```

---

## 🌍 Base URL for Server

```
http://localhost:5000
```

---

## 📘 Model: Todo

| Field       | Type     | Required | Default | Description            |
| ----------- | -------- | -------- | ------- | ---------------------- |
| `_id`       | ObjectId | Auto     | -       | Unique identifier      |
| `title`     | String   | ✅ Yes    | -       | Todo title             |
| `completed` | Boolean  | ❌ No     | false   | Task completion status |
| `createdAt` | Date     | Auto     | -       | Created timestamp      |
| `updatedAt` | Date     | Auto     | -       | Last update timestamp  |

---

## 🧩 API Endpoints

### 1. **Get All Todos**

```
GET /api/todos
```

**Response:**

```json
[
  {
    "_id": "6724b1b9d8a45e11120d4321",
    "title": "Learn React Query",
    "completed": false,
    "createdAt": "2025-11-01T18:00:00.500Z",
    "updatedAt": "2025-11-01T18:00:00.500Z"
  }
]
```

---

### 2. **Create Todo**

```
POST /api/todos
```

**Body:**

```json
{
  "title": "Finish MERN project"
}
```

**Response:**

```json
{
  "_id": "6724b1b9d8a45e11120d4321",
  "title": "Finish MERN project",
  "completed": false,
  "createdAt": "2025-11-01T18:10:00.120Z",
  "updatedAt": "2025-11-01T18:10:00.120Z"
}
```

---

### 3. **Update Todo**

```
PUT /api/todos/:id
```

**Body (optional fields):**

```json
{
  "title": "Complete MERN project",
  "completed": true
}
```

**Response:**

```json
{
  "_id": "6724b1b9d8a45e11120d4321",
  "title": "Complete MERN project",
  "completed": true
}
```

---

### 4. **Delete Todo**

```
DELETE /api/todos/:id
```

**Response:**

```json
{
  "message": "Todo deleted successfully"
}
```

---

### 5. **Root Endpoint**

```
GET /
```

**Response:**

```
✅ Todo API is running...
```

---

## 🧪 Example cURL Requests

### Create Todo

```bash
curl -X POST http://localhost:5000/api/todos \
-H "Content-Type: application/json" \
-d '{"title": "Learn Docker"}'
```

### Get Todos

```bash
curl http://localhost:5000/api/todos
```

### Update Todo

```bash
curl -X PUT http://localhost:5000/api/todos/<todo_id> \
-H "Content-Type: application/json" \
-d '{"completed": true}'
```

### Delete Todo

```bash
curl -X DELETE http://localhost:5000/api/todos/<todo_id>
```

---

## 🧠 Notes

* Make sure **MongoDB** is running locally or remotely (Atlas supported).
* Use **Postman**, **Thunder Client**, or **curl** to test endpoints.
* You can integrate this backend with React, Next.js, or any frontend framework.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Naeem Biswass Niloy**
Full Stack Developer | Aspiring DevOps / SRE Engineer | Competitive Programmer
[GitHub](https://github.com/biswass101) • [LinkedIn](https://www.linkedin.com/in/niloy097)

