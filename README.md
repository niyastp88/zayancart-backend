# ZayanCart Backend

A robust REST API backend for the ZayanCart Ecommerce platform built with Node.js, Express.js, and MongoDB. It provides secure authentication, product management, order processing, payment verification, and admin functionalities.

## Features

### Authentication & Security

* JWT Authentication
* Google OAuth Login
* OTP Email Verification
* Role-Based Access Control (Admin/User)

### Ecommerce Features

* Product Management
* Category Management
* Brand Management
* Material Management
* Cart & Wishlist APIs
* Order Management
* Product Reviews
* Return Request Handling

### Payment & Media

* Razorpay Payment Integration
* Payment Signature Verification
* Cloudinary Image Uploads

### Admin Dashboard APIs

* Revenue Analytics
* Order Statistics
* User Management
* Product Management

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Razorpay
* Cloudinary
* Nodemailer
* Google OAuth

## Installation

```bash
git clone https://github.com/niyastp88/zayancart-backend.git
cd backend
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_cluster_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=your_frontend_url

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

GOOGLE_CLIENT_ID=your_google_client_id

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
```

## Run Project

```bash
npm run start
```

## Create Admin Account

```bash
npm run seed
```
