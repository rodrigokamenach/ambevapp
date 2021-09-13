import config from "../config.js";
import jwt from "jsonwebtoken";

// função para verificar se o token é valido e autorizar o acesso
async function verifyToken(req, res, next) {
    try {
        // le o valor do token 
        const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'] ? req.headers['authorization'].substring(7) : null
        // verifica se o token possui valor
        if(!token) {
            const err = new Error("Necessário autenticação")    ;   
            err.code = 403;     
            next(err);  
        }

        // valida o token com a chave secreta
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) {
                const err = new Error("Token inválido ou expirado")    ;   
                err.code = 401;     
                next(err);     
            }

            req.user = decoded;
            next();

        });                
    } catch(err) {
        next(err)
    }
}

export default {
    verifyToken
} 