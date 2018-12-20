import express from "express";

const ServerExpress = express();
ServerExpress.use(express.json());
ServerExpress.use(express.urlencoded({ extended: true }));

export default ServerExpress;
