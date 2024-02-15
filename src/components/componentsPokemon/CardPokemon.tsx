import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import Typography from "@mui/material/Typography"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
interface Pokemon {
  nome: string
  id: string
  altezza: number
  peso: number
  generi: []
  debolezze: []
  tipo: []
  urlImmagine: string
}
export default function CardPokemon() {
  const stileCard = { border: "5px solid black" }
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  let URL: string = "http://192.168.1.170:8080/pokemon/all"
  useEffect(() => {
    axios
      .get(URL)
      .then((response: AxiosResponse<Pokemon, any>) => {
        setPokemon(response.data)
      })
      .catch(err => {
        window.alert(err)
      })
  }, [])
  return (
    <Card sx={{ maxWidth: 500, stileCard }}>
      <CardMedia
        component="img"
        alt="Immagine del Pokemon"
        height="300"
        image={pokemon?.urlImmagine}
      />
      {pokemon ? (
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            N: {pokemon.id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Altezza: {pokemon.altezza}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Peso: {pokemon.peso}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genere: {pokemon.generi}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tipo: {pokemon.tipo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Debolezze: {pokemon.debolezze}
          </Typography>
        </CardContent>
      ) : (
        "Pokemon non trovato"
      )}

      <CardActions></CardActions>
    </Card>
  )
}
