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

const app = express()

const PORT = 3006
//inicializar una variable PORT

app.set("port", PORT)
//El puerto que vamos a escuchar va a ser el 3006


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

-const app = express()
Traemos la herramienta y definimos como la vamos a llamar para usarla

-const PORT = 3006
Creamos una variable llamada PORT (Que es un puerto) y le ponemos un numero

-app.set("port", PORT)
Configuramos el puerto del app

-app.get("/",
Verbo de http (Post- Crear, Get - Leer o recuperar , Put - Actualizar, Delete - Eliminar)+ ruta y definimos que funcion se va a ejecutar

- (req, res)=> {
   -req (request): La informacion que recibo del cliente (Parte del front)
   -res (response): La respuesta que le doy a ese cliente o lo que le envio

-res.send("Hola mundo")
Estoy enviando la respuesta "Hola mundo"

-})
Aqui estoy cerrando lo de arriba

-app.listen(PORT, ()=>{
Aqui estoy escuchando el puerto o esperando una orden o respuesta

-console.log(`server running in port ${PORT}`)
Esto es un mensaje que me envio, para confirmar que todo esta ok (//El servidor esta corriendo en puerto tal.... Una vez estes en consola avisame que estas escuchando)

-})
Aqui estoy cerrando lo de arriba