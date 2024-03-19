import { Link } from "react-router-dom"
import "./TopNavBar.css"
export default function TopNavBar() {
  return (
    <nav className="nav">
      <ul>
        <Link to="/home" className="TitoloSito">
          GranchioDéx
        </Link>
      </ul>
      <ul>
        <li>
          <Link to="/creazione">Inserisci un Pokémon</Link>
        </li>
        <li>
          <Link to="/pokemon">Lista Pokémon</Link>
        </li>
      </ul>
    </nav>
  )
}
