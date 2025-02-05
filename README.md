# Umurava Skills Challenge 🚀

![Umurava Banner](https://placehold.co/1200x400/286EF0/white?text=Umurava+Skills+Challenge\nShowcase+Your+Tech+Prowess!&font=worksans)

A competitive platform where tech enthusiasts enhance their skills through challenges and hackathons, while institutions discover top talent.

Live preview is available [here](https://umuravahackathon.vercel.app)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
- [Author](#author)

## Tech Stack

### Frameworks & Languages

- **Next.js** (App Router) – Full-stack React framework
- **TypeScript** – Strongly typed JavaScript

### Styling & UI Components

- **Tailwind CSS** – Utility-first CSS framework
- **Shadcn/ui** – Modern component library

### Database & ORM/ODM

- **MongoDB** – NoSQL database
- **Mongoose** – Object-Document Mapper

## Features

- 🔒 Secure Authentication with Clerk
- 🗄️ Project Management with MongoDB
- 💻 Coding Challenges & Hackathons
- 📊 Performance Analytics
- 📱 Responsive UI Design
- 🎨 Clean & Modern Interface

## Getting Started

### Pre-requisites

- [Node v17+](https://nodejs.org/en/download)
- [Clerk Auth API Keys](https://clerk.com)
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)

### Installation

```bash
# Clone repository
git clone https://github.com/iamcaleb3rw/umuravahackathon.git
cd umuravahackathon

# Install dependencies
npm install
```

### Environment Variables 🔑

Create a `.env.local` file in your root directory with the following variables:

### Clerk Authentication

```env
# REQUIRED - Get from Clerk Dashboard
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# OPTIONAL - Clerk Configuration
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/onboarding
SIGNING_SECRET=your_clerk_signing_secret

# REQUIRED - MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
```

### Running the project

```
npm run dev
```

The app will be available at [localhost:3000/](http://localhost:3000)

---

## Author

🚀 Built with ❤️ by [Caleb Ganza](https://calebganza.vercel.app)
