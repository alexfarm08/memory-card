<a href="https://github.com/alexfarm08"><img width="200" height="100" alt="Armstrong_Stacked" src="https://github.com/user-attachments/assets/f899d005-b9a1-419b-a11f-4de111611034" /></a>

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

## Case Study

### Objective
For this project the goal of the project was to build a memory card game where you try and click on different cards each time and the webpage tracks your current score in the game and your best score you have gotten.

### Synoposis
The inspirations for this work to again practice my skills that I learned in react and Api usage. 

### Process
This project started by trying to understand what the project requirements were. Next I knew that I just wanted a simple page that displayed the cards so I didn't do any wireframes or sketches. After that I built the card component and the main page. Next I found an API I wanted to use for the images on the cards and set up the functionality to make the api call.

### Results
The results of this project was a memory card game that displays good practice in react and fetching data from an api.

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
```
