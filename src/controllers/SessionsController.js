const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError")

class SessionController {
    async create(request, response){
        const {email, password} = request.body;

        const database = await sqliteConnection();
        const user = await database.get('SELECT * FROM users WHERE email=(?)', [email])
        
        if(!user){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }
        return response.json(user)
    }
}

module.exports = SessionController;