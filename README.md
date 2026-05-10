# KrishiBondhu Server

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
