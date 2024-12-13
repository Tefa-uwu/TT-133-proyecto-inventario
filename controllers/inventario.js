const Inventario = require ("../models/inventario")
//los modelos siempre van con mayuscula porque es una instancai de objeto

exports.leerInventario = async (req, res) =>{
    try {
        const inventario = await Inventario.find({})
                                         //Encontrar
        res.status(200).json(inventario)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

//3
//controladores donde se almacena la logica, lo que hay en try es la info en body inventario en models
exports.crear = async (req, res) =>{
    console.log(req.body)
    try{
        //creamos un modelo 
        await Inventario.create({
            //Esto es lo que estoy creando desde models, esto es lo que asignamos
            nombre: req.body.nombre,
            unidades: req.body.unidades
            //(req -informacion que le envio al cliente)
        })
        res.status(201).send("Elemento creado")
        //Si quiero en la respuesta se envia todo en el mismo paquete y se concatena con punto
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
        //error generico
    }
}
exports.leerElementoPorId = async (req, res) =>{
    try {
        const {id}= req.params
        //
        //desestructuracion, todo lo que esta en el parametro traeme el id
        const elemento = await Inventario.findById(id)
        res.json(elemento).status(200)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}