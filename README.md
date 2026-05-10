# KrishiBondhu Server

## Live Deployment
- **API Server:** [https://krishibondhu-server.onrender.com](https://krishibondhu-server.onrender.com)
- **Client App:** [https://krishi-bondhu-client-lf3r9s5l4-rubel6623s-projects.vercel.app](https://krishi-bondhu-client-lf3r9s5l4-rubel6623s-projects.vercel.app)

## Project Overview
The KrishiBondhu Server serves as the robust backend engine for the KrishiBondhu platform, handling all core business logic, role-based access control, real-time communications, and AI processing. It provides structured API endpoints to support the diverse needs of Farmers, Veterinarians, and Equipment Providers, managing appointments, equipment rentals, reviews, and secure data storage.

## Tech Stack
- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database ORM:** Prisma
- **Database Engine:** PostgreSQL (`pg`)
- **Real-time Communication:** Socket.io
- **AI Integration:** Google Generative AI (`@google/generative-ai`)
- **Security & Authentication:** JWT, bcrypt, Express Rate Limit
- **Monitoring & Logging:** Sentry, Winston
- **Validation:** Zod
- **Task & Cache Management:** p-queue, node-cache

## API Routes

### Public Routes
- **Auth:**
  - `POST /api/v1/auth/register` - Register a new user/provider
  - `POST /api/v1/auth/login` - Login to account
  - `POST /api/v1/auth/social-login` - Login via social provider
- **Equipment:**
  - `GET /api/v1/equipment` - List all equipment with filters
  - `GET /api/v1/equipment/:id` - Detailed equipment view
- **Categories:**
  - `GET /api/v1/categories` - List equipment categories
- **Providers & Specialists:**
  - `GET /api/v1/providers` - List all service providers
  - `GET /api/v1/specialists` - List agricultural specialists/veterinarians
  - `GET /api/v1/specialists/:id` - Specialist details
- **Blogs:**
  - `GET /api/v1/blogs` - Read all agricultural blogs
  - `GET /api/v1/blogs/:id` - Single blog post
- **Reviews:**
  - `GET /api/v1/reviews/:equipmentId` - Fetch reviews for specific equipment
- **Live Activity (SSE):**
  - `GET /api/v1/activity/stream` - Real-time SSE event stream
  - `GET /api/v1/activity/recent` - Snapshot of recent platform activities

### Private Routes (Protected)
- **User Profile:**
  - `GET /api/v1/auth/me` - Get current user data
  - `PUT /api/v1/auth/me` - Update profile info
  - `GET /api/v1/users/profile` - Detailed profile metrics
- **Equipment Management (Provider/Admin):**
  - `POST /api/v1/equipment` - List new equipment
  - `PATCH /api/v1/equipment/:id` - Edit equipment details
  - `DELETE /api/v1/equipment/:id` - Remove listing
- **Bookings (Farmer/Provider):**
  - `POST /api/v1/bookings` - Create equipment rental (Farmer)
  - `GET /api/v1/bookings/my-bookings` - View rental history
  - `PATCH /api/v1/bookings/:id/status` - Accept/Reject/Complete booking (Provider)
- **Appointments (Farmer/Specialist):**
  - `POST /api/v1/appointments` - Book consultation
  - `GET /api/v1/appointments/my-appointments` - View upcoming meetings
- **AI Assistant:**
  - `POST /api/v1/ai` - AI-powered agricultural querying
- **Real-time Chat:**
  - `GET /api/v1/chat/rooms` - Fetch conversation rooms
- **Notifications:**
  - `GET /api/v1/notifications` - User-specific alert feed
- **Analytics (Role-Based):**
  - `GET /api/v1/analytics/admin` - Global platform metrics (Admin Only)
  - `GET /api/v1/analytics/provider` - Revenue and rental stats for providers
  - `GET /api/v1/analytics/farmer` - Spending and activity stats for farmers

## AI Features Explanation
The server leverages the Google Generative AI SDK to process and provide intelligent responses:
- **AI Service:** A dedicated AI module interfaces directly with Gemini models to analyze queries related to agriculture, equipment recommendations, and livestock health. This module receives requests from the client, processes them securely with the AI provider, and returns structured and insightful responses back to the users via the API.

## Setup Instructions

1. **Navigate to the server directory:**
   ```bash
   cd KrishiBondhu-Server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the server project and add the necessary configurations:
   ```env
   PORT=5000
   DATABASE_URL="postgresql://user:password@localhost:5432/krishibondhu"
   JWT_SECRET="your_jwt_secret"
   GOOGLE_AI_API_KEY="your_gemini_api_key"
   # Add other required keys here
   ```

4. **Initialize Database and Prisma:**
   Generate the Prisma client and push the schema to your database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Seed the database (Optional but recommended):**
   ```bash
   npm run seed:admin
   ```

6. **Run the development server:**
   ```bash
   npm run dev
   ```
   The server will start, typically on port 5000 (or the port specified in your `.env`).
