import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue="Nombre"
        />
        <TextField
          required
          id="outlined-required"
          label="Apellido"
          defaultValue="Apellido"
        />
      </div>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Cancelar
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Registrarse
        </Button>
      </Stack>
    </Box>
  );
}
