import ServerExpress from "~/src/config/custom-express";
import AppNext from "~/src/config/custom-next";
import { rotas } from "~/src/rotas/rotas";

AppNext.prepare()
  .then(() => {
    rotas(ServerExpress, AppNext);
  })
  .catch((e) => {
    console.log("DEU ALGUM ERRO: ", e);
  });
