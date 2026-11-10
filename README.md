# Pokémon Memory Game

A dynamic, interactive **React-based memory game** built to demonstrate state management, component architecture, and API integration skills. Players test their memory by clicking unique Pokémon cards without repeating any previous selections, while the app tracks scores and dynamically shuffles the cards.

---

## Features

- **Memory-based gameplay:** Click Pokémon cards without repeating selections.  
- **Score tracking:** Tracks current score and best score across rounds.  
- **Dynamic content:** Fetches Pokémon data in real-time using [PokéAPI](https://pokeapi.co/).  
- **Interactive UI:** Shuffles all Pokémon cards after every click to keep the game challenging.  
- **Responsive components:** Modular `Card`, `Body`, and `Header` components for maintainable and reusable code.  

---

## Project Structure

| File | Description |
|------|-------------|
| `App.jsx` | Main application; manages global state including score, best score, clicked Pokémon, and shuffle logic. |
| `Body.jsx` | Renders the grid of 16 Pokémon cards and passes down props. |
| `Card.jsx` | Individual card component; fetches Pokémon data and handles click events. |
| `Header.jsx` | Displays the game title and score component. |
| `Score.jsx` | Displays current score and best score dynamically. |
| `main.jsx` | Entry point; renders the `App` component into the DOM. |
| `*.css` | Styling for layout, cards, header, and global styles. |

---

## Tech Stack

- **React** – Component-based architecture, state management with hooks (`useState`, `useEffect`).  
- **PokéAPI** – Fetches Pokémon data dynamically.  
- **JavaScript ES6+** – Modern syntax, async/await for API calls.  
- **CSS** – Clean, modular styling for cards and layout.  

---

## Key Skills Demonstrated

- React **state management** and **prop drilling**.  
- Handling **asynchronous API requests** with `async/await`.  
- Implementing **dynamic UI updates** with `useEffect`.  
- Component **modularity and reusability** (`Card`, `Body`, `Header`).  
- Clean and maintainable **code organization**.  

---

## Installation & Usage

```bash
# Clone the repository
git clone https://github.com/yourusername/pokemon-memory-game.git

# Navigate into the project
cd pokemon-memory-game

# Install dependencies
npm install

# Start the development server
npm start

<img width="200" height="100" alt="Armstrong_Stacked" src="https://github.com/user-attachments/assets/f899d005-b9a1-419b-a11f-4de111611034" />
