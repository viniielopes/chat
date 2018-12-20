import React from "react";
import {
  IconButton,
  TextField,
  Typography,
  Button,
  InputAdornment
} from "@material-ui/core";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Head from "next/head";
import Link from "next/link";

class Inicio extends React.Component {
  state = {
    password: true
  };

  render() {
    return (
      <>
        <Head>
          <title>Login</title>
        </Head>

        <form action="/teste" method="POST">
          <div className="container">
            <Typography variant="h2" gutterBottom>
              Entrar
            </Typography>
            <TextField
              id="txbNome"
              name="txbNome"
              label="Nome"
              helperText="Nome completo."
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="txbSenha"
              name="txbSenha"
              label="Senha"
              type={this.state.password ? "password" : "text"}
              helperText="Apenas Letra e numero."
              variant="outlined"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Alternar visibilidade da senha"
                      onClick={() =>
                        this.setState({ password: !this.state.password })
                      }
                    >
                      {this.state.password ? (
                        <MdVisibility />
                      ) : (
                        <MdVisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button color="primary" variant="contained" type="submit">
              Entrar
            </Button>
          </div>
        </form>
        <style jsx="true">
          {`
            .container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 80vh;
            }
          `}
        </style>
      </>
    );
  }
}

export default Inicio;
