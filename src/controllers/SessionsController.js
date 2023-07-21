const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");
const { compare } = require('bcryptjs');

const authConfig = require("../configs/auth");
const {sign} = require("jsonwebtoken");

class SessionController {
    async create(request, response){
        const {email, password} = request.body;

        const database = await sqliteConnection();
        const user = await database.get('SELECT * FROM users WHERE email=(?)', [email])
        
        if(!user){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta", 401);  
        }

        const {secret, expiresIn} = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({user, token})
    }
}

module.exports = SessionController;