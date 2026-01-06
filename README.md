# Smart Estate Kenya - Public Frontend (MVP)

A mobile-first, performance-focused real estate platform for Kenya.

## Features
- **Modern UI:** Built with Tailwind CSS v4 and Next.js App Router.
- **Trust-First:** Verified agent badges, clear typography, professional design.
- **Mobile Optimized:** Fast loading, responsive layout, large touch targets.
- **Core User Journeys:**
  - Browse properties with text search filters.
  - View detailed property info with specs and map location.
  - Contact agents via WhatsApp or Inquiry Form.
  - View Agent Profiles and their listings.

## Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Language:** TypeScript

## Setup & Run

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000)

3.  **Build for Production:**
    ```bash
    npm run build
    npm start
    ```

## Project Structure
- `src/app`: Pages and Layouts
- `src/components/ui`: Reusable atomic components (Button, Card, etc.)
- `src/components/features`: Complex feature components (InquiryForm, Filters)
- `src/lib`: Utilities and Mock Data
- `src/types`: TypeScript interfaces

## Key Decisions
- **Mock Data:** Currently using `src/lib/mock-data.ts` to simulate backend for UI validation.
- **Images:** Using Unsplash placeholders. In prod, these would be served via CDN.
- **Performance:** Server Components used for initial render.
