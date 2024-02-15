import "./App.css"
import CreaNuovoPokemon from "./components/componentsForm/CreaNuovoPokemon"
import TopNavBar from "./components/TopNavBar"
import SearchBar from "./components/componentsSearchBar/SearchBar"
import CardPokemon from "./components/componentsPokemon/CardPokemon"

export default function App() {
  return (
    <>
      <CardPokemon />
      <SearchBar />
      <TopNavBar />
      <CreaNuovoPokemon />
    </>
  )
}
