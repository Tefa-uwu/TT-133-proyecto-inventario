#Proyecto Inventario
### Inicio del proyecto
Abre la terminal en la carpeta donde vas a guardar el proyecto, y pon los siguientes comandos:
```

mkdir proyecto-inventario
cd proyecto-inventario
```
```
nop init
```
```
touch .env .gitignore index.js
```
Instalamos las dependencias, recuerden npm es el manejador de paquetes node o node package mange
```

npm install express mongoose dotenv cors
```
```
npm install --save-dev nodemon
```
y en el .gitignore copian
```
node_modules
.env
```
Y ahora vamos a subir el codigo a Github

### Hola mundo en Node.js
Ahora vamos a hacer un hola mundo en node.js, para eso vamos a poner el siguiente codigo en index.js
```
const express = require ("express");
//traemos express a index.js 

const mongoose = require ("mongoose")
require("dotenv").config()
//con esta linea puedo traer las variables de entorno, dotenv gestionar nuestra base de datos
//permitimos que a traves de dotenv, index ingrese a los paquetes

const holaRoutes =require("./routes/holaRoutes")

const app = express()

const PORT = 3006
//inicializar una variable PORT

app.set("port", PORT)
//El puerto que vamos a escuchar va a ser el 3006

app.use("/api/hola",holaRoutes)


mongoose.connect(process.env.MONGO_URI)
//.then una promesa,function async
.then(console.log("Conect to BD"))
//Si sale error muestrame el error
.catch(err=> console.error(err))
//forma en la que traemos archivos

app.use("/api/inventario", inventarioRoutes)

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

```
Vamos a explicar cada una de las lineas 

- const express = require ("express");
Creamos una constante llamada express (Que es un paquete, una libreria) y al mismo tiempo traemos la herramienta que vamos a usar.

- const mongoose = require ("mongoose")
Creamos una constante llamada mongoose (Que es un paquete, una libreria) y al mismo tiempo traemos la herramienta que vamos a usar.

- require("dotenv").config()
Imagina que tienes una caja secreta con cosas importantes dentro, como tus juguetes favoritos o tus dulces. Pero no quieres que todo el mundo vea lo que hay dentro de esa caja, ¿verdad?
Entonces, para que solo tú o tu computadora pueda abrir la caja, usas una llave especial. La caja secreta en este caso es como un archivo en tu computadora, y la llave especial son las "variables de entorno", que guardan cosas importantes como contraseñas o claves.
Cuando escribimos require("dotenv").config(), le estamos diciendo a la computadora que abra esa caja secreta usando la llave, para que pueda leer las cosas importantes dentro, sin que nadie más las vea.
En resumen, ese código le dice a tu programa que use la llave para abrir la caja secreta y usar las cosas guardadas dentro de ella. ¡Así tu programa puede hacer su trabajo sin que nada se pierda o se vea por otros!

- const holaRoutes =require("./routes/holaRoutes")
Ahora creamos una variable llamada holaRoutes, luego accedemos a la sgte ubicacion en esta misma carpeta, luego el archivo routes en la posicion holaRoutes

- const app = express()
Traemos la herramienta y definimos como la vamos a llamar para usarla

- const PORT = 3006
Creamos una variable llamada PORT (Que es un puerto) y le ponemos un numero

- app.set("port", PORT)
Configuramos el puerto del app

- app.use("/api/hola",holaRoutes)
Imagina que tienes una puerta en tu casa con una dirección que la gente puede visitar, por ejemplo, "/api/hola". Esa es la ruta a la que la gente va a ir si quiere saber algo sobre "hola".
Ahora, app.use("/api/hola", holaRoutes) es como decirle a tu casa:
"Cuando alguien toque la puerta que está en /api/hola (esa es la dirección), quiero que les enseñes todo lo que hay en holaRoutes."
holaRoutes es como un paquete de instrucciones que tienes guardado en otro lugar, y cuando alguien toca esa puerta (es decir, visita /api/hola), el paquete de instrucciones les dirá qué hacer (como enviar un mensaje de "¡Hola, Mundo!").
Así que app.use("/api/hola", holaRoutes) es solo una forma de decir:
"¡Hey, cuando alguien vaya a la ruta /api/hola, quiero que les muestres lo que está en holaRoutes!"
Es como si estuvieras organizando varias puertas en tu casa, y cada puerta tiene un paquete de instrucciones que debe seguir quien toque esa puerta.

- mongoose.connect(process.env.MONGO_URI)
Imagina que tienes una gran biblioteca llena de libros (esa es la base de datos, como MongoDB). Ahora, quieres entrar a esa biblioteca para leer algunos libros, pero para hacerlo necesitas una llave especial.
process.env.MONGO_URI es esa llave especial que te da acceso a la biblioteca, para que puedas abrir la puerta.
mongoose.connect es como decirle a tu computadora "¡Usa esa llave especial para entrar en la biblioteca y leer los libros que necesito!".
Entonces, cuando escribimos mongoose.connect(process.env.MONGO_URI), le estamos diciendo a la computadora: "Por favor, usa la llave especial que está guardada en process.env.MONGO_URI para entrar a la biblioteca (que es la base de datos) y empezar a trabajar con los libros (que son los datos)".
Es como si le dijieras a tu computadora: "¡Abre la biblioteca y toma los libros que necesito usando esta llave especial!

- .then(console.log("Conect to BD"))
Si pasa lo del codigo anterior imprimame Conect to BD

- .catch(err=> console.error(err))
Si eso no pasa y sale error, muestrame el error

- app.get("/",
Verbo de http (Post- Crear, Get - Leer o recuperar , Put - Actualizar, Delete - Eliminar)+ ruta y definimos que funcion se va a ejecutar

- (req, res)=> {
   -req (request): La informacion que recibo del cliente (Parte del front)
   -res (response): La respuesta que le doy a ese cliente o lo que le envio

- res.send("Hola mundo")
Estoy enviando la respuesta "Hola mundo"

- })
Aqui estoy cerrando lo de arriba

- app.listen(PORT, ()=>{
Aqui estoy escuchando el puerto o esperando una orden o respuesta

- console.log(`server running in port ${PORT}`)
Esto es un mensaje que me envio, para confirmar que todo esta ok (//El servidor esta corriendo en puerto tal.... Una vez estes en consola avisame que estas escuchando)

- })
Aqui estoy cerrando lo de arriba

### Hola desde holaRoutes.js

Creamos tres carpetas desde la terminal, usando los sgtes comandos
```
mkdir controllers models routes
```
Luego entramos en routes y creamos un archivo
```
touch holaRoutes.js
```
Ahora inciamos a poner codigos en holaRoutes.js
```
const express = require("express")
const router = express.Router()
const holaControllers = require("../controllers/holaController")
//../ es para salir del directorio

router.get("/",holaControllers.holaMundo)

module.exports = router
```
Vamos a explicar cada linea

- const express = require("express")
Creamos una variable que la vamos a llamar express y al mismo tiempo llamamos la herramienta express, lo que hacemos a asignar una funcion a la variable

- const router = express.Router()
Imagina que express es como una caja mágica que ayuda a las páginas web a funcionar. Dentro de esa caja, router es como una carpeta donde guardamos caminos (o rutas) para que la gente pueda ir de un lugar a otro en el sitio web.
Cuando escribimos const router = express.Router(), lo que estamos haciendo es crear una nueva carpeta vacía donde podremos poner esos caminos. Luego, podemos añadir rutas, como cuando pones etiquetas en diferentes partes de tu casa para que la gente sepa por dónde ir.
express es la caja que hace que las páginas web funcionen.
router es la carpeta que guarda los caminos.
express.Router() es la forma de crear esa carpeta para poder guardar rutas (camino) en ella.

- const holaControllers = require("../controllers/holaController")
Creamos otra variable llamada holaControllers que primero (../) es para salir de una carpeta. Lo que esta haciendo es salir de la carpeta en la estamos, entrar en otra carpeta llamda controllers y luego entrar en la ubicacion holaController

- router.get("/",holaControllers.holaMundo)
Ahora, Imagina que tienes una puerta (que sería la ruta "/") y cada vez que alguien toca esa puerta, tú le dices algo. En este caso, el código router.get("/", holaControllers.holaMundo) es como decir:
router.get: Esto es como decir "cuando alguien toque la puerta", pero en vez de una puerta real, es una ruta en una página web.
"/": Esta es la puerta que estamos usando. En este caso, es la puerta principal, la de la página de inicio.
holaControllers.holaMundo: Esto es como un cartel que dice "¡Hola, Mundo!" cuando alguien toca esa puerta. Es lo que le dices a la persona que tocó la puerta (en este caso, cuando alguien visita la página de inicio).
Así que cuando alguien entra a la página principal (la puerta "/"), el código le dirá "¡Hola, Mundo!" gracias al cartel que está ahí (que es holaControllers.holaMundo).
Es como si estuvieras organizando qué le dices a las personas según qué puerta toquen en tu casa.
En otras palabras, router.get: Aquí estamos diciendo que vamos a "escuchar" o "atender" las solicitudes GET que lleguen a una ruta específica. En términos simples, GET es el tipo de solicitud que ocurre cuando alguien visita una página en su navegador.
"/": Esto es la ruta a la que se refiere. El "/" es la ruta principal, o también conocida como la página de inicio. Es como la puerta principal de tu aplicación web. Cuando alguien entra a tu sitio web, generalmente lo primero que ve es la página que responde a esta ruta, la cual sería "/".
holaControllers.holaMundo: Aquí es donde pasa la magia. En lugar de enviar solo un texto simple como "Hola, Mundo", este holaMundo es una función (probablemente ubicada en un archivo llamado holaControllers.js) que tiene la lógica para responder a esa solicitud.
Esa función puede hacer muchas cosas, pero normalmente lo que hace es devolver una respuesta (como un mensaje, una página o algún tipo de contenido) cuando alguien visita la ruta "/".

- module.exports = router
Un módulo es un archivo o conjunto de archivos que contiene funciones, objetos o variables que puedes compartir con otras partes de tu aplicación. Para hacer esto, usamos module.exports para "exportar" algo desde un módulo, de modo que pueda ser utilizado en otro lugar.
module.exports es un objeto especial en Node.js que define lo que va a estar disponible cuando otro archivo importe ese módulo. Es como si estuvieras entregando algo a otras partes de tu código.
router es el objeto que estás exportando. En el contexto de Express, el router es un objeto que contiene rutas (los caminos que tu aplicación web maneja). Estas rutas indican qué hacer cuando un usuario accede a diferentes URLs de tu aplicación.

## Ahora en inventario Routes
Ponemos el siguiente codigo

```
const express = require("express")
const {leerInventario} =require("../controllers/inventario")
const router = express.Router()

// router.get("/", (req,res)=>{
//     console.log("hola desde routes inventario")
//     res.send("hola desde routes inventario")
// })

router.get("/", leerInventario)

module.exports = router

```
Ahora explicamos cada linea

- const express = require("express")
Creamos una variable llamda express que nos va a traer express

- const {leerInventario} =require("../controllers/inventario")
Creamos una variable llamada leerInventario, que va a salir del archivo inventario.js en routes para dirigirse a la carpeta controllers en el archivo inventario

- const router = express.Router()
Creamos una constante llamada router donde luego vamos a saber como guiar la info hacia ese lugar

- router.get("/", leerInventario)
Ahora, Imagina que tienes una puerta (que sería la ruta "/") y cada vez que alguien toca esa puerta, tú le dices algo. En este caso, el código router.get("/", leerInventario) es como decir:
router.get: Esto es como decir "cuando alguien toque la puerta", pero en vez de una puerta real, es una ruta en una página web.
"/": Esta es la puerta que estamos usando. En este caso, es la puerta principal, la de la página de inicio.
leerInventario: Esto es como un cartel que dice "¡Hola, Mundo!" cuando alguien toca esa puerta. Es lo que le dices a la persona que tocó la puerta (en este caso, cuando alguien visita la página de inicio).
Así que cuando alguien entra a la página principal (la puerta "/"), el código le dirá "¡Hola desde controller!"

- module.exports = router
Un módulo es un archivo o conjunto de archivos que contiene funciones, objetos o variables que puedes compartir con otras partes de tu aplicación. 

### Hola desde controllers
Empezamos a poner codigos en un archivo llamado holaController.js que esta dentro de la carpeta controllers
```
exports.holaMundo = (req,res)=>{
    console.log("hola desde el controlador")
    res.send("Hola desde el controlador")
}
```
Explicaremos cada linea:

- exports.holaMundo =
Aqui estamos exportando holaMundo

- (req,res)=>{
Aqui estamos diciendo que vamos a necesitar un requirimiento y una respuesta

-console.log("hola desde el controlador")
Aqui estamos diciendole que nos imprima hola desde el controlador

- res.send("Hola desde el controlador")
Aqui estamos dando una respuesta

- }
Cierro

## Ahora hacemos lo mismo en un archivo llamado inventario.js en controllers

```
exports.leerInventario = (req, res) =>{
    console.log("hola controller")
    res.send("hola desde controller")
}
```
Ahora explicamos cada linea

-exports.leerInventario = (req, res) =>{
Exportamos la variable leerInventario y le damos un requirimiento y una respuesta

- console.log("hola controller")
Requirimiento

- res.send("hola desde controller")
Respuesta

- } 
Cierre