/*
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import ListItemText from "@mui/material/ListItemText"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Checkbox from "@mui/material/Checkbox"
import { useState } from "react"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const debolezze = ["FUOCO", "ACQUA", "ERBA", "VELENO"]

export default function MultipleSelectDebolezze() {
  const [debolezzePokemon, setdebolezzePokemon] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof debolezzePokemon>) => {
    const {
      target: { value },
    } = event
    setdebolezzePokemon(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="debolezzePokemon">Debolezze</InputLabel>
        <Select
          labelId="debolezzePokemon"
          id="debolezzePokemon"
          multiple
          value={debolezzePokemon}
          onChange={handleChange}
          input={<OutlinedInput label="Debolezze" />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {debolezze.map(debolezze => (
            <MenuItem key={debolezze} value={debolezze}>
              <Checkbox checked={debolezzePokemon.indexOf(debolezze) > -1} />
              <ListItemText primary={debolezze} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
} */
