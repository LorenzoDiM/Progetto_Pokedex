import { Stack, TextField, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import axios from "axios"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import CheckmarksPokemonFormDebolezza from "./CheckmarksPokemonFormDebolezza"

export default function CreaNuovoPokemon() {
  enum SceltaSesso {
    Maschio = "MASCHIO",
    Femmina = "FEMMINA",
    Sconosciuto = "SCONOSCIUTO",
  }
  enum SceltaTipo {
    Acqua = "ACQUA",
    Fuoco = "FUOCO",
    Erba = "ERBA",
    Veleno = "VELENO",
    Sconosciuto = "SCONOSCIUTO",
  }
  enum SceltaDebolezza {
    Acqua = "ACQUA",
    Fuoco = "FUOCO",
    Erba = "ERBA",
    Veleno = "VELENO",
    Sconosciuto = "SCONOSCIUTO",
  }

  type CampiForm = {
    id: number
    nome: string
    altezza?: number | null
    peso?: number | null
    sceltaSesso: SceltaSesso
    sceltaTipo: SceltaTipo
    sceltaDebolezza: SceltaDebolezza
    urlImmagine: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<CampiForm>()
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])
  const onSubmit: SubmitHandler<CampiForm> = (data: CampiForm) => {
    console.log("dato inviato", data)
    axios
      .post("http://192.168.1.32:8080/pokemon", data)
      .then(response => {
        console.log("form inviata")
        console.log(response)
      })
      .catch((error: any) => {
        if (error.response.status === 400) {
          const messaggioErrore = error.response.data.message
          alert(messaggioErrore)
        } else {
          console.log(error)
        }
        console.log("errore", error)
      })
  }

  return (
    <>
      <div className="divInterna form-container">
        <Stack>
          <div className="titoloSezionePagina">
            <Typography variant="h5" component="h5">
              - Crea un Pokémon -
            </Typography>
          </div>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <TextField
                {...register("id", {
                  required: "Inserire almeno un numero",
                  pattern: /^(0|[1-9][0-9]*)$/,
                })}
                id="id"
                label="Numero"
                variant="outlined"
              />
              {errors.id && (
                <div className="divErrore">{errors.id.message}</div>
              )}
            </div>
            <div>
              <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                {...register("nome", {
                  required: "Inserire almeno un nome",
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {errors.nome && (
                <div className="divErrore">{errors.nome.message}</div>
              )}
            </div>
            <div>
              <TextField
                id="altezza"
                label="Altezza"
                variant="outlined"
                {...register("altezza", {
                  pattern: /^[0-9]\d{0,9}(\.\d{1,3})?%?$/,
                })}
              />
            </div>
            <div>
              <TextField
                id="peso"
                label="Peso"
                variant="outlined"
                {...register("peso", {
                  pattern: /^[0-9]\d{0,9}(\.\d{1,3})?%?$/,
                })}
              />
            </div>
            <div>
              <TextField
                id="urlImmagine"
                label="Link Immagine"
                variant="outlined"
                {...register("urlImmagine")}
              />
            </div>
            <div>
              <CheckmarksPokemonFormDebolezza />
              <CheckmarksPokemonFormDebolezza />
              <CheckmarksPokemonFormDebolezza />
            </div>
            <Stack spacing={1}>
              <Button type="submit" variant="contained" color="error">
                Crea un Pokémon
              </Button>
              <Button
                type="button"
                onClick={() => reset()}
                variant="contained"
                color="error"
              >
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </>
  )
}
