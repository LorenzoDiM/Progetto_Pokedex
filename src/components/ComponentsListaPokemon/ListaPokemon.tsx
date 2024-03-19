import axios from "axios"
import { Container, Grid, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import CardPokemon from "../componentsPokemon/CardPokemon"
import { Pokemon } from "../componentsPokemon/CardPokemon"
export default function ListaPokemon() {
  const [pokemon, setPokemon] = useState<any | null>([])
  useEffect(() => {
    getPokemon()
  }, [])
  const getPokemon = () => {
    axios
      .get("http://192.168.1.32:8080/pokemon")
      .then(res => {
        setPokemon(res.data)
        console.log(pokemon)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="divEsterna">
      <Stack>
        <div className="titoloSezionePagina">
          <Typography variant="h5" component="h5">
            - Lista dei Pokèmon -
          </Typography>
        </div>
      </Stack>
      <Container maxWidth="lg">
        <Grid container>
          {pokemon &&
            pokemon.content?.map((pokemon, key) => (
              <Grid item xs={3} key={key}>
                <CardPokemon
                  nome={pokemon.nome}
                  id={pokemon.id}
                  urlImmagine={pokemon.urlImmagine}
                  tipo={pokemon.tipo}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  )
}
