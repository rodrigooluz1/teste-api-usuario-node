const {Model, DataTypes} = require('sequelize')

class User extends Model{
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING(200),
                email: DataTypes.STRING(200),
                senha: DataTypes.STRING(200),
                url_foto: DataTypes.STRING(200)
            },
            {sequelize}
        )
    }
}

module.exports = User