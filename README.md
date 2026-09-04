# 🛍️ Cyber Mart

> A modern, responsive e-commerce showcase built with a focus on clean design, smooth user experience, and practical application architecture.

🌐 **Live Website:** https://cybermart.wordcel.app

**Cyber Mart** is a modern e-commerce website designed to demonstrate how a polished online shopping experience can be built using contemporary web technologies.

It provides a complete customer-facing shopping journey — from discovering products and selecting variants to managing a cart and moving through the checkout experience.

The project is structured as part of a broader e-commerce package that can also be paired with an **admin panel**, allowing an e-commerce owner or business to manage the content and products displayed on the storefront.

---

## ✨ Overview

Cyber Mart focuses primarily on the **customer-facing shopping experience**.

Visitors can:

- 🛍️ Browse and explore products
- 🔎 Search and filter products
- 🏷️ Explore products by category
- 🎨 Select product variants such as size and color
- 🛒 Add products to the shopping cart
- ➕ Increase or decrease quantities
- 🗑️ Remove items from the cart
- 💳 Proceed through the checkout flow
- 📱 Use the website comfortably across different screen sizes

The interface is designed to be clean, engaging, and easy to navigate while maintaining a practical structure underneath.

---

## 🌐 Live Demo

### Customer Website

**https://cybermart.wordcel.app**

The live website represents the customer-facing side of the e-commerce experience.

### Admin Panel

An accompanying admin panel is part of the broader project structure and is intended to provide e-commerce owners with a way to manage the storefront.

Planned access:

**https://cybermart.wordcel.app/admin**

> The admin panel is currently under development and may not yet be publicly available.

---

## 🎯 Built for E-Commerce

Cyber Mart is designed with more than just the customer interface in mind.

The broader e-commerce package can be adapted for businesses that want to manage their own online storefront.

Depending on the implementation, an e-commerce owner can use an accompanying admin panel to manage areas such as:

- 🛍️ Products
- 🏷️ Categories
- 🎨 Product variants
- 💰 Pricing
- 📦 Inventory
- 🖼️ Product images
- 📝 Product information
- 📊 Store-related data

This creates a separation between the **customer storefront** and the **management side of the store**, allowing the storefront to remain focused on the shopping experience.

---

## 🧰 Tech Stack

### Frontend

| Technology          | Purpose                   |
| ------------------- | ------------------------- |
| **Next.js**         | Application framework     |
| **React**           | UI development            |
| **TypeScript**      | Type-safe development     |
| **Tailwind CSS**    | Styling and responsive UI |
| **React Hook Form** | Form management           |
| **Zod**             | Form and input validation |

### Application

- Responsive e-commerce interface
- Product browsing and discovery
- Category filtering
- Product search
- Product variant selection
- Cart management
- Quantity management
- Checkout flow
- Form validation
- Toast notifications
- Type-safe data structures

---

## 🛒 Product & Cart Experience

A key part of Cyber Mart is its handling of **product variants**.

Products can contain different attributes such as:

- Size
- Color
- Quantity

The cart distinguishes between different product variants rather than treating every item with the same product ID as identical.

This allows customers to add different variants of the same product while preventing the same variant from being unintentionally added multiple times.

---

## 🎨 User Experience

The website is designed around a straightforward shopping journey.

### Product Discovery

Customers can browse products through categories, search, and filtering, making it easier to find relevant products.

### Product Selection

Product details allow customers to select available variants before adding an item to their cart.

### Cart Management

The cart provides control over:

- Selected product variants
- Quantity
- Individual cart items
- Order totals

### Checkout

The checkout flow uses structured forms and validation to ensure that the information entered by the customer follows the expected format.

---

## 📱 Responsive Design

Cyber Mart is built to provide a consistent experience across different devices.

The interface adapts to:

- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

The goal is to preserve usability and visual hierarchy rather than simply shrinking the desktop layout for smaller screens.

---

## 🏗️ Project Structure

The project follows a modular structure intended to keep application logic, UI components, and data models organized.

```text
Cyber Mart
│
├── EClient/
│   ├── app/
│   │   ├── cart/
│   │   ├── products/
│   │   ├── payment/
│   │   └── ...
│   │
│   ├── components/
│   │   └── ...
│   │
│   ├── types/
│   │   └── ...
│   │
│   ├── public/
│   │   └── ...
│   │
│   └── package.json
│
├── EAdmin/
│   └── ...
│
└── README.md
```

The structure can evolve as additional functionality is introduced.

---

## 🔐 Validation & Type Safety

TypeScript is used throughout the project to make application data structures explicit and reduce potential runtime errors.

Form handling uses schema-based validation to ensure that user input matches the expected structure before being processed.

This makes the application easier to maintain and provides a safer foundation for future development.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- **Node.js**
- **npm**, **pnpm**, **yarn**, or **bun**
- **Git**

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Client

```bash
cd EClient
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The application will then be available through the local development server.

---

## 📦 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build and checks the application for build-time issues.

```bash
npm run start
```

Starts the production server after creating a production build.

```bash
npm run lint
```

Runs the project's linting checks.

---

## 🗺️ Future Improvements

The project can be extended with features such as:

- 🔐 User authentication
- 👤 Customer accounts
- ❤️ Wishlist functionality
- 💾 Persistent cart storage
- 📦 Order history
- 💳 Real payment integration
- 🗄️ Database integration
- 👨‍💼 Complete admin management
- 📊 Store analytics
- ⭐ Product reviews and ratings
- 🚚 Order tracking
- 📧 Transactional email notifications

These additions can help evolve the project into a more complete production-ready e-commerce platform.

---

## 🧠 What This Project Demonstrates

Cyber Mart demonstrates practical experience with:

- Modern React development
- Next.js App Router
- TypeScript
- Responsive UI development
- Reusable component architecture
- Client-side state management
- Product variant logic
- Shopping cart architecture
- Form handling and validation
- User-focused interface design
- Modular project organization

The focus is on bringing these technologies together to create a **coherent, usable e-commerce product**, rather than simply demonstrating individual technologies.

---

## 📸 Preview

Screenshots and additional previews of the storefront can be added here.

Recommended previews:

1. Landing page
2. Product listing
3. Product details
4. Shopping cart
5. Checkout
6. Mobile experience

---

## 🤝 Contribution

Suggestions, improvements, and contributions are welcome.

If you discover an issue or have an idea for improving Cyber Mart, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is currently intended for educational, portfolio, and demonstration purposes.

---

## 👨‍💻 About Cyber Mart

Cyber Mart is a showcase e-commerce project built to explore modern web development practices while creating a realistic and polished online shopping experience.

The project is designed with extensibility in mind, allowing the storefront to be connected with a management system for businesses that want greater control over their online store.

**Built with Next.js · React · TypeScript · Tailwind CSS**

---

### ⭐ Interested in the project?

Check out the live storefront:

**https://cybermart.wordcel.app**

If you're looking for a customizable e-commerce solution, Cyber Mart provides a foundation that can be adapted to different products, brands, and business requirements.
