const express = require ("express");
//traemos express a index.js 
const holaRoutes =require("./routes/holaRoutes")

const app = express()

const PORT = 3006
//inicializar una variable PORT

app.set("port", PORT)
//El puerto que vamos a escuchar va a ser el 3006

app.use("/api/hola",holaRoutes)
//cuando tu encuentres /api usame holaRoutes --> Direccionamiento a diferentes rutas

//app.use("/api/herramientas/, herramientasRoutes")
//app.use("/api/---",empleadosRoutes)

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

