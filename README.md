# Storyblok + Next.js Project

This project is a boilerplate for building modern web applications using [Storyblok](https://www.storyblok.com/) as a headless CMS and [Next.js](https://nextjs.org/) as the frontend framework.

## Features

- **Storyblok CMS**: Manage content dynamically with Storyblok.
- **Next.js**: Server-side rendering, static site generation, and API routes.
- **React**: Build reusable UI components.
- **TypeScript**: Type-safe development.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/storyblok-nextjs.git
   cd storyblok-nextjs
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your Storyblok API key:

   ```env
   STORYBLOK_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [https://localhost:3000](https://localhost:3000) in your browser to see the application.

## Deployment

To deploy the application, use platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Ensure your environment variables are set up in the deployment platform.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
