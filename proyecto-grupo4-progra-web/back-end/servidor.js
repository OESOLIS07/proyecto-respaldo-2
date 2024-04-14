const express = require("express");
const app = express();
const cors = require("cors");
const port = 3008;
const { Sequelize, DataTypes } = require("sequelize");

app.use(express.json());
app.use(cors());

//Conecxion a Base De Datos.
const sequelize = new Sequelize({
    dialect: "mysql",
    host: " ",
    username: " ",
    password: " ",
    database: " ",
});

//Clase entidad para la creacion de las tablas.
class Entity {
    constructor(name, fields) {
      this.name = name;
      this.model = sequelize.define(name, fields);
    }
  
    async sync() {
      await this.model.sync({ force: true });
      console.log(`Table for ${this.name} synchronized`);
    }
}

//Esquema para la tabla de entidad Usuario
const usuarioSchema = {
    usuario_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    usuario_Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    usuario_Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    usuario_Password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    usuario_Telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
};

//Crea la entidad Usuario.
const Usuario = new Entity("Usuario", usuarioSchema);

//Sincroniza la Base de Datos.
const syncronizeDB = () => {
    sequelize
      .sync()
      .then(async () => {
        await Usuario.sync();
      })
      .catch((error) => {
        console.error("Error synchronizing database:", error);
      });
};

//nodemon servidor.js

//node servidor.js