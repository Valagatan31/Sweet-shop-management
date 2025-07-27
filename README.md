🍬 Sweet Shop :
A full‑stack web application built with React (frontend) and Django REST Framework (backend) that allows users to browse sweets, 
filter by categories, search, and add them to a cart.

 Project Overview
The Sweet Shop is an online platform where users can:

-- Browse through a list of available sweets (with images, price, category, and stock information).

-- Search sweets by name.

-- Filter sweets by category.

-- Register and log in to their own account.

-- Add sweets to their cart (cart stored locally or on the backend depending on configuration).

The backend is built in Django REST Framework, serving REST APIs for:

User registration and login (token-based authentication).

Fetching sweets.

Managing the shopping cart.

The frontend is built in React.js, using:

axios for API calls,

useState and useEffect hooks for state management and lifecycle,

Context API to manage cart state,

CSS for styling.

 Features
-- User Registration and Login
-- Token‑based authentication
-- Browse sweets with images and details
-- Search & filter sweets
-- Add to cart functionality
-- Cart summary with total price
-- Fully responsive frontend


 Tech Stack:
Frontend:
--React.js
--Context API
--Axios
--CSS (custom)
Backend:
--Django
--Django REST Framework
SQLite (default) or any other database

 Installation and Setup
- Prerequisites
Make sure you have the following installed:

Node.js (v14+)

Python 3

Git

API Endpoints:
| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| `POST` | `/api/register/` | Register new user         |
| `POST` | `/api/login/`    | Login user (get token)    |
| `GET`  | `/api/sweets/`   | Get list of sweets        |
| `GET`  | `/api/cart/`     | Get logged-in user's cart |
| `POST` | `/api/cart/add/` | Add an item to cart       |

Interface Image:

<img width="1890" height="839" alt="image" src="https://github.com/user-attachments/assets/0e7f5117-a755-4e62-bd0c-7bc989e61bdb" />
<img width="1888" height="639" alt="image" src="https://github.com/user-attachments/assets/8ee08f1d-6ed6-4ae1-80b2-9770f820e35c" />

User can register:
<img width="1654" height="862" alt="image" src="https://github.com/user-attachments/assets/2aa9dce0-4a10-4b29-b498-d574c7837e7a" />

User can Login:
 If login with the wrong username and password:
    <img width="1562" height="733" alt="image" src="https://github.com/user-attachments/assets/6db2095e-6103-434e-9a11-8c8a3516a51e" />
If user login with correct username and password:
     <img width="1687" height="714" alt="image" src="https://github.com/user-attachments/assets/912f8769-0f35-46ed-a571-370582c6668b" />

After login user can logout:
<img width="1426" height="639" alt="image" src="https://github.com/user-attachments/assets/0d58ea56-0038-4cd1-a501-b5dfe6dc4c61" />

user can see it cart:
<img width="1770" height="824" alt="image" src="https://github.com/user-attachments/assets/7213675a-fc34-4470-bb4b-5f7281f64ac0" />

User can search sweet:
<img width="661" height="622" alt="image" src="https://github.com/user-attachments/assets/0c4f1aea-0649-41ba-902e-18dfd0d01943" />

User can filter :
<img width="954" height="726" alt="image" src="https://github.com/user-attachments/assets/aea4483a-8a96-4e5f-97b6-6d4c2dbb21ce" />

Admin Can enter the new sweet:
<img width="1485" height="904" alt="image" src="https://github.com/user-attachments/assets/820a768e-2e48-4fb7-aee4-a4e7dfa5990d" />

After the add new sweet ,interface will be :
<img width="1483" height="817" alt="image" src="https://github.com/user-attachments/assets/583edb75-3bb7-495b-8059-12ab9be957a3" />


Admin Panel:
<img width="1394" height="976" alt="image" src="https://github.com/user-attachments/assets/686e4aea-c7d6-4196-9881-7e0b5f64d4b7" />










