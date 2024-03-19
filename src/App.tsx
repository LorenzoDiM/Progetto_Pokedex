import { Route, Routes } from "react-router-dom"
import "./App.css"
import TopNavBar from "./components/componentsNavBar/TopNavBar"
import CreaNuovoPokemon from "./components/componentsForm/CreaNuovoPokemon"
import SearchBar from "./components/componentsSearchBar/SearchBar"
import CardDettaglioPokemon from "./components/componentsPokemon/CardDettaglioPokemon"
import ListaPokemon from "./components/ComponentsListaPokemon/ListaPokemon"

export default function App() {
  return (
    <>
      <TopNavBar />
      <div>
        <Routes>
          <Route path="/home" element={<SearchBar />} />
          <Route path="/creazione" element={<CreaNuovoPokemon />} />
          <Route path="/pokemon" element={<ListaPokemon />} />
          <Route path="/pokemon/:id" element={<CardDettaglioPokemon />} />
        </Routes>
      </div>
    </>
  )
}
