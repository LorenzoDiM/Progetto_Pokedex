import { Button, CardActionArea, CardActions } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Stack } from "@mui/system"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

enum Genere {
  MASCHIO,
  FEMMINA,
  SCONOSCIUTO,
}

enum Tipo {
  ACQUA,
  FUOCO,
  ERBA,
  VELENO,
}

enum Debolezza {
  ACQUA,
  FUOCO,
  ERBA,
  VELENO,
}

export interface Pokemon {
  nome: string
  id: string
  altezza?: number
  peso?: number
  generi?: Genere[]
  debolezze?: Debolezza[]
  tipo: Tipo[]
  urlImmagine: string
}

export default function CardPokemon(): JSX.Element {
  const { id } = useParams()
  const stileCard = { border: "5px solid black" }
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  let URL: string = `http://192.168.1.32:8080/pokemon/${id}`
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
    <div className="divInterna">
      <Stack>
        <div className="titoloSezionePagina">
          <Typography variant="h5" component="h5">
            - Informazioni sul Pokémon -
          </Typography>
        </div>
      </Stack>
      <Card sx={{ maxWidth: 500, stileCard }}>
        <CardMedia
          component="img"
          alt=""
          height="auto"
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
              Genere:{" "}
              {pokemon.generi
                ? pokemon.generi.map(value => value).join(", ")
                : "Sconosciuto"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tipo:{" "}
              {pokemon.tipo
                ? pokemon.tipo.map(value => value).join(", ")
                : "Sconosciuto"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Debolezze:{" "}
              {pokemon.debolezze
                ? pokemon.debolezze.map(value => value).join(", ")
                : "Sconosciuto"}
            </Typography>
            <CardActions>
              <Button type="button" variant="contained" color="error">
                Modifica Pokémon
              </Button>
              <Button type="button" variant="contained" color="error">
                Cancella Pokémon
              </Button>
            </CardActions>
          </CardContent>
        ) : (
          <Stack>
            <div className="titoloSezionePagina">
              <Typography variant="h5" component="h5">
                Oops... Forse devi ancora catturarlo?
              </Typography>
            </div>
          </Stack>
        )}
      </Card>
    </div>
  )
}
