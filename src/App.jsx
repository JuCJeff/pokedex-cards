import { FiGithub } from "react-icons/fi";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import PokedexCards from "./components/PokedexCards";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pokedex Cards</h1>
      <div className="card">
        <PokedexCards />
      </div>
      <footer>
        <a href="https://github.com/JuCJeff/pokedex-cards" target="_blank">
          <FiGithub className="github-link" />
        </a>
      </footer>
    </>
  );
}

export default App;
