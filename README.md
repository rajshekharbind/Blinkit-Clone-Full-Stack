README.md for Fullstack App (Frontend + Backend)

# BINKEYIT Fullstack Application

This is a fullstack web application consisting of:

- **Frontend**: React.js with Vite, Tailwind CSS, Redux
- **Backend**: Node.js, Express.js, MongoDB, Stripe, Multer, and more

---

## 📁 Folder Structure


---

## ⚙️ Technologies Used

### ✅ Frontend (`client/`)
- React.js
- Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- React Hook Form
- SweetAlert2
- React Icons

### ✅ Backend (`server/`)
- Node.js
- Express.js
- MongoDB with Mongoose
- Stripe (Payments)
- Multer (File Uploads)
- Cloudinary (Image Hosting)
- dotenv, bcryptjs, cors, helmet, cookie-parser, and more

---

## 🚀 Getting Started Locally

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/en) installed
- [MongoDB](https://www.mongodb.com/) (local or cloud)
- Stripe account (for secret key)

---

### 🔑 Environment Variables

Create a `.env` file inside `server/`:

server/.env
PORT=5000 MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=sk_test_your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret 
JWT_SECRET=your_jwt_secret


> ⚠️ **Never upload your `.env` file to GitHub.** Add it to `.gitignore`.

---

### ⚙️ Install Dependencies

```bash
# 1. Clone the project
git clone https://github.com/your-username/binkeyit-fullstack.git
cd binkeyit-fullstack

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install
cd server
npm run dev
Server runs at: http://localhost:8000
cd client
npm run dev
Frontend runs at: http://localhost:5173


---

## ✅ Extra Tips

- Commit your `.env.example` file like:
  ```env
  PORT=
  MONGO_URI=
  STRIPE_SECRET_KEY=
  CLOUDINARY_CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=
  JWT_SECRET=


