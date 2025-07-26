# The C4 Stack

A modern, type-safe boilerplate for building web applications with **Nuxt 4**, **TypeScript**, and **end-to-end type safety**.

## 🚀 Features

- **🔥 Nuxt 4** - Latest Vue.js framework with enhanced performance
- **📝 Full TypeScript** - Complete type safety from frontend to backend
- **🔐 Better Auth** - Modern authentication with Google OAuth
- **🗃️ Drizzle ORM** - Type-safe database operations with PostgreSQL
- **🌐 oRPC** - End-to-end type-safe API layer
- **🎨 Nuxt UI** - Beautiful, accessible component library
- **⚡ Vue Query** - Powerful data fetching and caching
- **🧹 Code Quality** - ESLint, Prettier, and TypeScript configured
- **📱 Responsive** - Mobile-first design approach

## 🏗️ Tech Stack

### Frontend

- **Nuxt 4** - Vue.js framework
- **TypeScript** - Type safety
- **Nuxt UI** - Component library
- **Vue Query** - Data fetching

### Backend

- **oRPC** - Type-safe API layer
- **Better Auth** - Authentication
- **Drizzle ORM** - Database operations
- **PostgreSQL** - Database
- **Zod** - Runtime validation

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Drizzle Kit** - Database migrations
- **TypeScript** - Static type checking

## 📦 Quick Start

### Prerequisites

- Node.js 22+
- PostgreSQL database
- Google OAuth credentials (for authentication)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd your-project-name
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# Authentication
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Environment
NODE_ENV="development"
```

### 3. Database Setup

```bash
# Generate migration files
npm run db:generate

# Run migrations
npm run db:migrate

# Generate auth schema
npm run db:auth
```

### 4. Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📁 Project Structure

```
your-project/
├── assets/              # Static assets (CSS, images)
├── components/          # Vue components
├── composables/         # Vue composables
├── layouts/             # Nuxt layouts
├── pages/               # File-based routing
├── plugins/             # Nuxt plugins
├── queries/             # API query hooks
├── server/              # Backend code
│   ├── api/             # API routes
│   ├── database/        # Database config & schemas
│   ├── orpc/            # oRPC procedures & routers
│   └── utils/           # Server utilities
├── shared/              # Shared utilities
├── types/               # TypeScript type definitions
└── utils/               # Client utilities
```

## 🗄️ Database Management

### Generate Migrations

```bash
npm run db:generate
```

### Run Migrations

```bash
npm run db:migrate
```

### Update Auth Schema

```bash
npm run db:auth
```

## 🔐 Authentication

This boilerplate includes **Better Auth** with Google OAuth integration. The authentication system provides:

- **Social Login** - Google OAuth
- **Session Management** - Secure session handling
- **Type Safety** - Full TypeScript support
- **Database Integration** - Drizzle ORM adapter

## 🌐 API Layer

The project uses **oRPC** for end-to-end type safety:

### Adding New Procedures

1. Create procedure in `server/orpc/procedures/`
2. Add to router in `server/orpc/router/`
3. Use in frontend with `useOrpc()`

### Example Usage

```typescript
// Frontend query
const { data, isLoading } = useHello();

// Backend procedure
export const hello = publicProcedure.handler(() => {
  return "Hello from oRPC!";
});
```

## 🧹 Code Quality

### Linting

```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### Type Checking

```bash
npm run type-check
```

### Development Tools

- **ESLint** - Code linting with Vue, TypeScript rules
- **Prettier** - Automatic code formatting
- **Import Sorting** - Organized imports
- **Unused Imports** - Automatic cleanup

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

- **Vercel** - Zero-config deployment
- **Netlify** - JAMstack deployment
- **Railway** - Full-stack deployment
- **Digital Ocean** - VPS deployment

## 📚 Key Concepts

### Composables

- `useOrpc()` - Access to type-safe API client
- `useUser()` - User authentication state

### Type Safety

- **Frontend to Backend** - oRPC provides end-to-end types
- **Database** - Drizzle ORM generates types from schema
- **Environment** - Zod validates environment variables

### Authentication Flow

1. User clicks "Sign in with Google"
2. Better Auth handles OAuth flow
3. User data stored in PostgreSQL
4. Session managed automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Better Auth Guide](https://better-auth.com)
- [Drizzle ORM Docs](https://orm.drizzle.team)
- [oRPC Documentation](https://orpc.unjs.io)
- [Nuxt UI Components](https://ui.nuxt.com)

---

**Happy coding!** 🎉 This boilerplate provides a solid foundation for building modern, type-safe web applications.
