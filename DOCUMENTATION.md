# CodeSphere Portfolio Documentation

## 1. Project Overview

CodeSphere is an immersive, interactive personal portfolio website designed to showcase the skills, experience, and projects of Rohit Singh Pal, a Frontend Software Developer. The application leverages a modern tech stack including Next.js, React, and Tailwind CSS to create a dynamic and engaging user experience. A key feature is the AI-powered assistant, built with Genkit, which allows visitors to ask questions about Rohit's professional background and receive intelligent, context-aware responses.

The project is structured to be scalable and maintainable, following best practices for Next.js application development with the App Router.

## 2. Core Features

-   **Interactive AI Assistant**: An AI-powered chatbot, integrated into the hero section, that answers user questions about Rohit's skills, experience, and projects based on a provided data source.
-   **Dynamic & Animated UI**: The interface is built with ShadCN UI components and styled with Tailwind CSS. It features smooth page transitions and component animations powered by Framer Motion to create a lively user experience.
-   **Responsive Design**: The application is fully responsive and optimized for a seamless experience across desktops, tablets, and mobile devices.
-   **Downloadable Resume**: A prominent "Download Resume" button allows visitors to easily save a PDF copy of Rohit's resume.
-   **Themed Experience**: Supports both light and dark modes, which can be toggled by the user. The background also features a subtle, animated aurora effect.

## 3. Technology Stack

-   **Framework**: Next.js (with App Router)
-   **Language**: TypeScript
-   **UI Library**: React.js
-   **Styling**: Tailwind CSS
-   **UI Components**: ShadCN UI
-   **Animations**: Framer Motion
-   **AI/Generative**: Google AI with Genkit
-   **Icons**: Lucide React

## 4. Folder Structure

The project follows a feature-centric organization model adapted for the Next.js App Router.

```
src/
├── ai/                     # Genkit AI configuration and flows
│   ├── flows/
│   │   └── interactive-npc-responses.ts  # Logic for the AI assistant
│   ├── genkit.ts           # Genkit initialization
│   └── dev.ts                # Genkit development server entry point
├── app/                    # Next.js App Router: Pages and layouts
│   ├── actions.ts          # Server Actions for client-server communication
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main landing page component
├── assets/                 # Static assets like images
├── components/             # Shared, reusable UI components (from ShadCN)
│   └── ui/
├── data/                   # Static data for the portfolio
│   └── portfolio-data.ts
├── features/               # Domain-specific components and logic
│   └── portfolio/          # Components making up the portfolio page
├── hooks/                  # Custom React hooks
├── layouts/                # High-level page structure components
└── styles/                 # Global styles and Tailwind CSS
    └── globals.css
```

## 5. Key Components and Their Roles

### `src/app/page.tsx` & `src/features/portfolio/PortfolioPage.tsx`

-   `page.tsx` is the entry point for the main route (`/`).
-   It renders `PortfolioPage.tsx`, which acts as the main container for the entire portfolio.
-   `PortfolioPage` manages the state for the AI assistant (input, response, loading state) and assembles all the different sections of the portfolio.

### `src/layouts/Header.tsx`

-   A responsive navigation bar that remains fixed at the top of the page.
-   Includes navigation links to different sections of the page, social media links, and the theme (light/dark mode) toggle.

### `src/features/portfolio/HeroSection.tsx`

-   The first section visitors see, containing the main heading, a subtitle with a typing animation, and a brief introduction.
-   Features the AI Assistant card where users can interact with the chatbot.
-   Includes the "Download Resume" button.

### AI Flow: `src/ai/flows/interactive-npc-responses.ts`

-   This is the core of the AI assistant.
-   It's a Genkit flow that takes a user's query as input.
-   It dynamically constructs a detailed prompt by combining the user's query with the portfolio data from `src/data/portfolio-data.ts`.
-   It uses the Google AI model via Genkit to generate a relevant, professional response.
-   Includes instructions to the AI to politely decline off-topic questions, ensuring it stays focused on the portfolio content.

### Data: `src/data/portfolio-data.ts`

-   A centralized file that exports all the static content for the portfolio, including skills, professional experience, education, and project details.
-   This separation of data from UI makes the portfolio easy to update without touching the component code.
