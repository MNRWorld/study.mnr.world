# Study Platform

A comprehensive platform for students in Bangladesh, providing all necessary information and tools for university admission preparation.

## 🚀 Features

- **University Information:** Detailed information about public, private, and affiliated universities.
- **Admission Calendar:** A centralized calendar for all university admission test dates and deadlines.
- **Dynamic Countdown Timers:** Specific countdowns for each university's admission events.
- **Question Bank:** Access to previous years' question papers for various universities and units.
- **OMR Self-Test Simulator:** Create and take your own OMR-based tests with custom timing, question counts, and negative marking to evaluate your preparation.
- **User Authentication:** Secure login via GitHub or as a guest (anonymous).
- **Personalized Profiles:**
  - Save target university and HSC result.
  - Bookmark favorite exams to view in a personalized calendar.
  - Bookmark important subjects for quick access.
- **Admin Panel:** A built-in JSON-based CMS to manage university and other application data directly from the browser in development mode.
- **Responsive Design:** Fully responsive and modern UI built with Next.js, Tailwind CSS, and ShadCN UI.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Database & Auth:** [Supabase](https://supabase.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Netlify](https://www.netlify.com/)

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- pnpm (or npm/yarn)

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Install packages:
    ```sh
    pnpm install
    ```
3.  Set up your environment variables. Create a `.env.local` file and add your Supabase credentials:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```
4.  Run the development server:
    ```sh
    pnpm run dev
    ```

The application will be available at `http://localhost:3000`.

## 📜 Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Creates a production build of the app.
- `pnpm start`: Starts the production server.
- `pnpm typecheck`: Runs TypeScript to check for type errors.
