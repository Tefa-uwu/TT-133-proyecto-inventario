//3. 
const mongoose = require("mongoose")
//ORM Se lo inventaron para hacer las consultas con codigo y no con query
//required obligatorio

const Schema = mongoose.Schema;

const InventarioSchema = new Schema({
    //Mientras voy pensndo mas en la funcionancionalidad el contrato va cambiando   
    //Estamos creando una instancia del objeto que se creo
    nombre: {
        type: String,
        //tipo texto
        required:true,
        maxLength: 100
        //tamaño maximo
    }, 
    unidades:{
        type: Number,
        min: 0,
        //min--> Minimo
        default:0
        //Por defecto   
    },
    fabricantes:{
        type: String,
        required: true,
        maxLength: 100
    }
    //atributos tipo string y numero
}) 
module.exports = mongoose.model("Inventario", InventarioSchema)
//creamos reglas, usa mongoose, usa model , llamalo en la tabla inventario, crea una conexion usando el contrato creado