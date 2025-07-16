# CodeSphere: An Interactive Portfolio by Rohit Singh Pal

Welcome to the repository for CodeSphere, my personal portfolio website. This project is more than just a digital resume; it's an immersive and interactive experience designed to showcase my skills in modern web development, particularly with Next.js, React, and AI integration.

## ✨ Core Features

-   **Interactive AI Assistant**: Engage with an AI-powered chatbot (built with Genkit) to ask questions about my skills, experience, and projects.
-   **Dynamic & Animated UI**: The interface is brought to life with smooth page transitions and component animations powered by Framer Motion.
-   **Modern Tech Stack**: Built with Next.js (App Router), TypeScript, and styled with Tailwind CSS and ShadCN UI components for a robust and beautiful user experience.
-   **Fully Responsive**: Optimized for a seamless experience across desktops, tablets, and mobile devices.
-   **Downloadable Resume**: A quick and easy way for visitors to get a copy of my resume.
-   **Light & Dark Mode**: A theme toggle allows users to switch between light and dark modes to suit their preference.

## 🚀 Technology Stack

-   **Framework**: Next.js (with App Router)
-   **Language**: TypeScript
-   **UI Library**: React.js
-   **AI/Generative**: Google AI with Genkit
-   **Styling**: Tailwind CSS
-   **UI Components**: ShadCN UI
-   **Animations**: Framer Motion
-   **Icons**: Lucide React

## Getting Started

To run this project locally, you'll need Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Google AI API key:
    ```
    GOOGLE_API_KEY=your_google_api_key_here
    ```

4.  **Run the development server:**
    The application runs on two concurrent processes: one for the Next.js frontend and one for the Genkit AI server.

    To run the Next.js app:
    ```bash
    npm run dev
    ```

    In a separate terminal, run the Genkit development server:
    ```bash
    npm run genkit:dev
    ```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.
