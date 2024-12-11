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

const holaRoutes =require("./routes/holaRoutes")

const app = express()

const PORT = 3006
//inicializar una variable PORT

app.set("port", PORT)
//El puerto que vamos a escuchar va a ser el 3006

app.use("/api/hola",holaRoutes)

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
```
Creamos tres carpetas desde la terminal
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
```
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