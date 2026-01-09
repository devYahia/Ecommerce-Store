# Lancer3D E-commerce Store

A modern e-commerce platform for 3D printers, filaments, and accessories built with Next.js 14, Prisma, and PostgreSQL.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Components:** Radix UI + Custom Components
- **Deployment:** Self-hosted via Coolify

## 📦 Features

- 🛒 Full e-commerce functionality (Cart, Wishlist, Checkout)
- 🔐 Authentication with NextAuth.js
- 📦 Product catalog with categories, brands, and filtering
- 💳 Order management system
- 🎁 Rewards/Points program
- 🛠️ Service request system (3D Printing, Maintenance)
- 📝 Blog and CMS pages
- 📱 Fully responsive design
- 🔍 SEO optimized

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes
│   ├── (shop)/            # Shop routes
│   ├── admin/             # Admin dashboard
│   └── api/               # API routes
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── ui/                # Reusable UI components
│   └── features/          # Feature-specific components
├── lib/                   # Utilities and helpers
├── store/                 # Zustand stores
├── types/                 # TypeScript types
├── config/                # App configuration
└── generated/             # Prisma client
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devYahia/Ecommerce-Store.git
cd Ecommerce-Store
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your database URL:
```
DATABASE_URL="postgresql://..."
```

5. Push the schema to the database:
```bash
npx prisma db push
```

6. Generate Prisma client:
```bash
npx prisma generate
```

7. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📊 Database Schema

The database includes the following main entities:

- **Users** - Customer accounts and authentication
- **Products** - Product catalog with variants and attributes
- **Categories** - Hierarchical product categories
- **Brands** - Product manufacturers
- **Orders** - Customer orders and order items
- **Cart/Wishlist** - Shopping cart and wishlist
- **Reviews** - Product reviews and ratings
- **ServiceRequests** - 3D printing and maintenance requests
- **RewardPoints** - Loyalty program

## 🚀 Deployment (Coolify)

This project is configured for deployment on Coolify. The database URL is set to connect to a Coolify-managed PostgreSQL instance.

### Deployment Steps:

1. Create a new application in Coolify
2. Connect your Git repository
3. Set environment variables in Coolify:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
4. Deploy!

### Build Command:
```bash
npm run build
```

### Start Command:
```bash
npm start
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio
- `npx prisma db push` - Push schema changes
- `npx prisma generate` - Generate Prisma client

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | NextAuth.js secret key |
| `NEXTAUTH_URL` | Application URL |
| `NEXT_PUBLIC_APP_URL` | Public application URL |
| `NEXT_PUBLIC_APP_NAME` | Application name |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

---

Built with ❤️ by [Lancer3D](https://lancer3d.com)
