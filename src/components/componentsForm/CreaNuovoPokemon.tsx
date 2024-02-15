import { TextField } from "@mui/material"
import Button from "@mui/material/Button"
import axios from "axios"

import { SubmitHandler, useForm } from "react-hook-form"
//import MultipleSelectDebolezze from "./MultipleSelectDebolezze"
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
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CampiForm>()
  const onSubmit: SubmitHandler<CampiForm> = (data: CampiForm) => {
    console.log(data)
    axios
      .post("http://192.168.1.170:8080/pokemon", data)
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
    <div className="divInterna container">
      <form onSubmit={handleSubmit(onSubmit)}>
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
          {errors.id && <div className="divErrore">{errors.id.message}</div>}
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
              {...register("peso", { pattern: /^[0-9]\d{0,9}(\.\d{1,3})?%?$/ })}
            />
          </div>
          <div>
            <label>Sesso Pokemon</label>
            <select
              defaultValue={SceltaSesso.Sconosciuto}
              id="sessoPokemon"
              {...register("sceltaSesso")}
            >
              <option value="Maschio">{SceltaSesso.Maschio}</option>
              <option value="Femmina">{SceltaSesso.Femmina}</option>
              <option value="Sconosciuto">{SceltaSesso.Sconosciuto}</option>
            </select>
          </div>
          <div>
            <label>Tipo Pokemon</label>
            <select
              defaultValue={SceltaTipo.Sconosciuto}
              id="tipoPokemon"
              {...register("sceltaTipo")}
            >
              <option value="Fuoco">{SceltaTipo.Fuoco}</option>
              <option value="Acqua">{SceltaTipo.Acqua}</option>
              <option value="Erba">{SceltaTipo.Erba}</option>
              <option value="Veleno">{SceltaTipo.Veleno}</option>
              <option value="Sconosciuto">{SceltaTipo.Sconosciuto}</option>
            </select>
          </div>
          <div>
            <label>Debolezza Pokemon</label>
            <select
              defaultValue={SceltaDebolezza.Sconosciuto}
              id="sessoPokemon"
              {...register("sceltaDebolezza")}
            >
              <option value="Fuoco">{SceltaDebolezza.Fuoco}</option>
              <option value="Acqua">{SceltaDebolezza.Acqua}</option>
              <option value="Erba">{SceltaDebolezza.Erba}</option>
              <option value="Veleno">{SceltaDebolezza.Veleno}</option>
              <option value="Sconosciuto">{SceltaDebolezza.Sconosciuto}</option>
            </select>
          </div>
          <div></div>
        </div>

        <Button type="submit" variant="contained" color="primary">
          Crea un Pokémon
        </Button>
      </form>
    </div>
  )
}
