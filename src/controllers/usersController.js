const AppError = require("../utils/AppError")

class UsersController{
    async create(request, response){
        const {name, email, password} = request.body;

        if(!nome){
            throw new AppError("O nome é obrigatório!", 401);
        }

        response.status(201).json({name, email, password});
    }
}


module.exports = UsersController;