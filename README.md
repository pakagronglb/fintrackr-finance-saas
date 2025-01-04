# 💰 FinTrackr - Modern Financial Management Platform

![banner](./public/overview.jpeg)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![DrizzleORM](https://img.shields.io/badge/DrizzleORM-0.30-green?style=for-the-badge)](https://orm.drizzle.team/)
[![Plaid](https://img.shields.io/badge/Plaid-Integrated-success?style=for-the-badge)](https://plaid.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-purple?style=for-the-badge)](https://clerk.dev/)

## 🌟 Project Overview

FinTrackr is a modern, full-stack financial management platform that helps users track their expenses, manage budgets, and gain insights into their financial health. Built with the latest web technologies and best practices in mind.

## ✨ Features

- 🔐 Secure authentication with Clerk
- 💳 Bank integration using Plaid API
- 📊 Interactive financial dashboards and charts
- 💰 Expense tracking and categorization
- 📱 Responsive design for all devices
- 🌓 Dark/Light mode support
- 📈 Real-time financial analytics
- 🔄 CSV import/export functionality

![account-overview](./public/account-page.jpeg)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** NeonDB (Postgres) with DrizzleORM
- **Authentication:** Clerk
- **Financial Integration:** Plaid
- **State Management:** Zustand
- **Charts:** Recharts
- **UI Components:** 
  - Radix UI
  - Shadcn/ui
  - React Hook Form
  - Zod Validation
- **API Integration:** Hono & TanStack Query
- **Development:** ESLint, Bun

![transaction-page](./public/transaction-page.jpeg)

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/pakagronglb/fintrackr-finance-saas.git
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Set up your database
```bash
bun db:generate
bun db:migrate
```

5. Run the development server
```bash
bun dev
```

## 🌐 Environment Variables

Create a `.env` file with the following variables:
```bash

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=''
CLERK_SECRET_KEY=''
CLERK_PUBLISHABLE_KEY=''
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'

# Database
DATABASE_URL='postgresql://neondb_owner:3rRBx6eMCvSd@ep-dawn-lake-a1fmsx2p.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'

# App
NEXT_PUBLIC_APP_URL='http://localhost:3000'

# Plaid
PLAID_CLIENT_TOKEN='6778db1f9ab60f00218c94ce'
PLAID_SECRET_TOKEN='d98bda86f00a5182210e9834588921'

# LemonSqueezy
LEMONSQUEEZY_STORE_ID=''
LEMONSQUEEZY_PRODUCT_ID=''
LEMONSQUEEZY_API_KEY=''
```

## 📝 Credits

This project was built following the excellent tutorial by [Code With Antonio](https://www.youtube.com/watch?v=N_uNKAus0II). Special thanks to Antonio for providing such comprehensive guidance on building modern full-stack applications.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

---

⭐️ If you found this project helpful, please give it a star!
