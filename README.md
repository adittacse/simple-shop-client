# SimpleShop – Next.js + MongoDB + Express + Node.js

SimpleShop is a **minimal product management** built for a Next.js App Router.  
It focuses on **polished UI**, **responsive layout**, and **basic authentication** with protected routes.

## Tech Stack

- **Next.js (App Router)**
- **Firebase** (Google + Email Credentials)
- **Tailwind CSS** + **DaisyUI**
- **Express.js** backend

## Live Demo

- Frontend: https://simple-shop-189e1.web.app
- Backend: https://simple-shop-server.onrender.com

## Features / Routes Summary

- `/` – Landing page with:
    - Sticky Navbar (logo, 4+ routes, login/register)
    - Hero, Features, Highlight Products, Testimonials, CTA banner, FAQ, Contact
    - Footer with links & copyright

- `/login` – Login page
    - Google social login
    - Redirects to `/` or `callbackUrl` after login

- `/register` – Simple UI-only register form

- `/items` – Item list page
    - Title + description
    - Grid of product cards

- `/items/[id]` – Item details page
    - Large image/banner
    - Title, Price
    - Short Description
    - Full description

- `/dashboard/add-product` – **Protected**
    - Only for logged-in users (redirects others to `/login`)
    - Form: title, short description, full description, price, image URL
    - On success: shows confirmation alert

- `/dashboard/manage-products` – **Protected**
    - Table of all products
    - Actions: View, Edit, Delete

## Backend API (Express)

Base URL: `https://simple-shop-server.onrender.com`

- `GET /products` – list all products
- `GET /products/:id` – get single product
- `POST /products` – add product
- `DELETE /products/:id` – delete product

