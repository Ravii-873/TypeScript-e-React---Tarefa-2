import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import MoviesTable from "./components/MoviesTable/MoviesTable";

function App() {
  const [searching, setSearching] = useState("");

  return (
    <div id="app">
      <SearchBar searching={searching} setSearching={setSearching}/>
      <MoviesTable searching={searching}/>
    </div>
  )
}

export default App;