import { CardActionArea } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Stack } from "@mui/system"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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

export default function CardPokemon(props: Pokemon): JSX.Element {
  const stileCard = { border: "5px solid black" }
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const navigate = useNavigate()
  let URL: string = `http://192.168.1.32:8080/pokemon/${props.id}`
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
      <Card sx={{ maxWidth: 500, stileCard }}>
        <CardActionArea onClick={() => navigate(`./${props.id}`)}>
          <CardMedia
            component="img"
            alt="Immagine Pokémon"
            height="auto"
            image={pokemon?.urlImmagine}
          />
        </CardActionArea>
        {pokemon ? (
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              N: {props.id} {props.nome}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Tipo: {props.tipo}
            </Typography>
          </CardContent>
        ) : (
          <Stack>
            <div className="titoloSezionePagina">
              <Typography variant="h5" component="h5">
                Oops... Forse è scappato
              </Typography>
            </div>
          </Stack>
        )}
      </Card>
    </div>
  )
}
