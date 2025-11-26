# SimpleShop – Next.js + NextAuth + Express Demo

SimpleShop is a **minimal product management demo** built for a Next.js App Router assignment.  
It focuses on **polished UI**, **responsive layout**, and **basic authentication** with protected routes.

## Tech Stack

- **Next.js (App Router)**
- **NextAuth.js** (Google + Credentials)
- **Tailwind CSS** + **DaisyUI**
- **Express.js** backend (in-memory products API)

## Live Demo

- Frontend: https://your-vercel-url.vercel.app
- Backend: https://your-backend-url (optional)

## Features / Routes Summary

- `/` – Landing page with:
    - Sticky Navbar (logo, 4+ routes, login/register)
    - Hero, Features, Highlight Products, Testimonials, CTA banner, FAQ, Contact
    - Footer with links & copyright

- `/login` – Login page
    - Google social login
    - Credentials (demo user: `demo@demo.com` / `demo123`)
    - Redirects to `/` or `callbackUrl` after login

- `/register` – Simple UI-only register form

- `/items` – Item list page
    - Title + description
    - Search bar & priority filter (UI only)
    - Grid of 6+ product cards

- `/items/[id]` – Item details page
    - Large image/banner
    - Title, price, date, priority
    - Full description
    - Back button

- `/dashboard/add-product` – **Protected**
    - Only for logged-in users (redirects others to `/login`)
    - Form: title, short description, full description, price, date, priority, image URL
    - On success: shows confirmation alert

- `/dashboard/manage-products` – **Protected**
    - Table of all products
    - Actions: View (details page), Delete

## Backend API (Express)

Base URL: `http://localhost:5000`

- `GET /products` – list all products
- `GET /products/:id` – get single product
- `POST /products` – add product
- `DELETE /products/:id` – delete product

> Products are stored in memory for simplicity (no database).

## Setup & Installation

### 1. Clone repo

```bash
git clone https://github.com/your-username/simpleshop.git
cd simpleshop
