# CraftMyPlate Backend API

It is built using **Node.js**, **Express**, and **MongoDB**. The API supports basic CRUD operations for managing products, allowing users to create, read, update, and delete products in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Deployment](#deployment)

---

## Features

- **Create**: Add new product  to the database.
- **Read**: Retrieve a list of all available product.
- **Update**: Modify details of an existing product.
- **Delete**: Remove a product from the database.

## Technologies

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for building API routes.
- **MongoDB Atlas**: NoSQL database to store and manage products.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: To manage environment variables securely.

API Endpoints
Here are the available API routes for the CraftMyPlate backend:

Get All Products
GET: api/products

Description: Retrieves a list of all products from the database.

Create a New Product
POST:  api/products

Description: Adds a new product to the database.

Update an Existing Product
PUT:  api/products/:id

Description: Updates an existing product details by its ID.


Delete a Product
DELETE:  api/products/:id

Description: Deletes a product from the database by its ID.






