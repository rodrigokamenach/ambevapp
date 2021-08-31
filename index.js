import express from "express";
import cors from "cors";
import winston from "winston";
import https from "https";
import fs from "fs";

import fabricaRouter from "./routers/fabrica.router.js";
import marcaRouter from "./routers/marca.router.js";
import produtoRouter from "./routers/produto.router.js";
import contagemRouter from "./routers/contagem.router.js";
import itemRouter from "./routers/item.router.js";


const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "ambev-api.log"})
    ],
    format: combine(
        label({ label: "ambev-api" }),
        timestamp(),
        myFormat
    )
});

const app = express();

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

app.use(express.json());
app.use(cors());

app.use("/fabrica", fabricaRouter);
app.use("/marca", marcaRouter);
app.use("/produto", produtoRouter);
app.use("/contagem", contagemRouter);
app.use("/item", itemRouter);

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ erro: err.message });
})

const server = https.createServer(options, app);

server.listen(3001, () => {
    console.log('API Started')
});