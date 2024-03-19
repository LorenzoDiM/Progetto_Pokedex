import { useState } from "react"
import "./SearchBar.css"
export default function SearchBar(): JSX.Element {
  const URL: string = "http://192.168.1.43:8080/pokemon/all"
  const [input, setInput] = useState("")
  const prendiDato = (value: any) => {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        const risultati = json.filter((nome: any) => {
          return (
            value &&
            nome &&
            nome.nome &&
            nome.nome.toLowerCase().includes(value)
          )
        })
        console.log(risultati)
      })
  }

  const handleChange = (value: any) => {
    setInput(value)
    prendiDato(value)
  }
  return (
    <div className="divEsterna">
      <div className="input-wrapper">
        <input
          placeholder="Cerca Pokémon..."
          value={input}
          onChange={e => handleChange(e.target.value)}
        />
      </div>
    </div>
  )
}
