import "./SearchBar.css"

interface SearchBarProps {
  searching: string;
  setSearching: (value: string) => void;
}

function SearchBar({ searching, setSearching }: SearchBarProps) {
  
  return (
    <input
      type="text"
      className="searchBar"
      placeholder="Filtrar por título"
      value={searching}
      onChange={(e) => {setSearching(e.target.value); console.log(searching);}}
    />
  )
}

export default SearchBar;
