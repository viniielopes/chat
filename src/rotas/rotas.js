import { Express } from "express";
import { DevServer } from "next";

/**
 *
 * @param {Express} ServerExpress
 * @param {DevServer} AppNext
 */

export const rotas = (ServerExpress, AppNext) => {
  const porta = process.env.PORT || 3000;
  const handle = AppNext.getRequestHandler();

  ServerExpress.get("/", (req, res) => {
    AppNext.render(req, res, "/index");
  });

  ServerExpress.get("/chat", (req, res) => {
    AppNext.render(req, res, "/chat");
  });

  ServerExpress.post("/chat", (req, res) => {
    console.log("Olha o que chegou: ", req.body);

    const { txbNome: nome, txbSenha: senha } = req.body;

    console.log(nome, senha);
    res.redirect(301, "/");
  });

  ServerExpress.listen(porta, () =>
    console.log("servidor iniciou na porta", porta)
  );

  ServerExpress.get("*", (req, res) => handle(req, res));
};
