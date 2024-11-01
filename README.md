# GameHub

GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.

## Getting Started

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key from [RAWG](https://rawg.io/apidocs). You'll need to create an account first.
4. Add the API key to `src/services/api-client.ts`.
5. Run `npm run dev` to start the web server.

## Features

- **Game Search**: Search for games by title, platform, genre, or by just typing some prefix of the game name.
- **Game Details**: View detailed information about a specific game, including its rating, platforms, and genre.
- **Platform Filter**: Filter games based on the platform (e.g., PC, PlayStation, Xbox).
- **Genre Filter**: Filter games based on the genre (e.g., action, adventure, strategy).
- **Infinite Scroll**: Seamlessly explore more games with infinite scrolling in the Game Grid.
- **Enhanced Data Management**: Utilize React-Query for efficient data fetching, ensuring a smoother and more responsive user experience.
- **State Management with Zustand**: Robust state management with Zustand for improved performance and scalability.
- **Dynamic Routing**: Navigate seamlessly with React Router, providing an intuitive user experience.
- **Reusable API Client**: A reusable API client for consistent and maintainable data fetching.
- **Game Details Page**: Dive deeper into games with a dedicated page featuring rich information, trailers, screenshots, and more.
- **Layout Routes for Improved Navigation**: A revamped layout with React Router for more cohesive navigation.
- **Code Refactoring**: Under-the-hood optimizations for cleaner, more maintainable code.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next Generation Frontend Tooling.
- **TypeScript**: Static type checker (using `.ts` and `.tsx` files).
- **Axios**: Promise-based HTTP client for making API requests.
- **Chakra UI**: Component library for building UI with accessibility in mind.
- **React-Query**: Powerful data-fetching and caching library.
- **Zustand**: Lightweight and scalable state management library.
- **React Router**: For dynamic, multi-page routing in the app.

---

Happy gaming with GameHub! 🎮
