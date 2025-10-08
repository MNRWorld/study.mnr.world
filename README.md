# Study Platform - Your University Admission Hub

This is a Next.js application designed to be a central platform for students in Bangladesh preparing for university and college admissions.

## 🚀 How It Works

The "Study Platform" is built to be fast, efficient, and easy to maintain. Here’s a look at its core functionalities and architecture:

### 1. High-Performance Data Loading

To ensure the application is extremely fast, it uses a **build-time data aggregation** strategy. Here’s the process:

- **Centralized Data Source:** All university information, such as admission details, subject lists, and question banks, is stored in individual JSON files within the `src/lib/data/universities/` directory. This makes the data for each university easy to manage.
- **Pre-build Script:** Before the application starts (`npm run prebuild`), a script reads all these separate JSON files and compiles them into a single, highly-optimized TypeScript module: `src/lib/data/universities/_generated.ts`.
- **Instant Data Access:** The live application doesn't read any JSON files. Instead, it imports data directly from this pre-compiled `_generated.ts` module. This eliminates file system access and JSON parsing at runtime, making data fetching instantaneous.

This architecture ensures that even with a large amount of university data, the app remains fast and responsive.

### 2. Core Features

- **University Information Hub:** The platform dynamically generates pages for all public, private, and engineering universities, as well as medical colleges. For universities with complete data (like Dhaka University), these pages provide comprehensive admission information, circulars, and question banks.
- **Browse & Filter:** Dedicated pages for "Public," "Private," and "College" allow students to easily browse and find the institutions they are interested in.
- **Admission Calendar:** A key feature is the admission calendar, which includes a countdown timer for upcoming exam deadlines and a consolidated schedule for various admission-related events.
- **Question Bank & Courses:** The app also includes a question bank with past exam questions and a section showcasing preparatory courses to help students in their admission journey.
- **User Authentication:** A simple and secure login system is implemented using Supabase, supporting both GitHub for a persistent profile and anonymous guest sessions for temporary use. This allows features like saving favorite exams in the calendar.
- **Developer-Friendly Admin Panel:** For local development, there is a built-in admin interface to easily edit the university data JSON files, streamlining the content management process for developers.

## 🛠️ Tech Stack

This project is built with a modern tech stack focused on performance and developer experience:

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Backend & Auth:** [Supabase](https://supabase.com/)

## 🏃‍♂️ Getting Started

To get started with the development server, follow these steps.

**1. Build University Data**

First, you need to run the data aggregation script. This script collects all university information from various `.json` files and compiles it into a single optimized file that the application uses.

```bash
npm run prebuild
```

You only need to run this command again if you make changes to the university data files in `src/lib/data/universities/`.

**2. Run the Development Server**

After the data is built, start the development server:

```bash
npm run dev
```

This will start the app on `http://localhost:9002`. You can start editing the pages by modifying the files in the `src/app/` directory.
