const express = require ("express");
const mongoose = require ("mongoose")
require("dotenv").config()
//con esta linea puedo traer las variables de entorno, dotenv gestionar nuestra base de datos
//permitimos que a traves de dotenv, index ingrese a los paquetes

//traemos express a index.js 
const holaRoutes =require("./routes/holaRoutes")
const inventarioRoutes = require("./routes/inventario")

const app = express()

const PORT = 3006
//inicializar una variable PORT

app.set("port", PORT)
//El puerto que vamos a escuchar va a ser el 3006

app.use(express.json())

app.use("/api/hola",holaRoutes)
//cuando tu encuentres /api usame holaRoutes --> Direccionamiento a diferentes rutas
app.use("/api/inventario", inventarioRoutes)

//app.use("/api/herramientas/, herramientasRoutes")
//app.use("/api/---",empleadosRoutes)

mongoose.connect(process.env.MONGO_URI)
//.then una promesa,function async
.then(console.log("Conect to BD"))
//Si sale error muestrame el error
.catch(err=> console.error(err))
//forma en la que traemos archivos



//app.get este tipo de codigo es anidado
app.get("/", (req, res)=> {
    res.send("Hola mundo")
})
//verbo get + ruta


app.listen(PORT, ()=>{
    console.log(`server running in port ${PORT}`)
    //El servidor esta corriendo en puerto tal....
    //Una vez estes en consola avisame que estas escuchando
})

