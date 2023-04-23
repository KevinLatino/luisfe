let controllersneakers = require('./controller_sneakers')// requiere controllerMongo
let usuario = require("./persona-controller")


// let loginController = require('./user_controller')
module.exports = (app) => {
    //cuado se haga un http://localhost:8989/inicio se mostrará el archivo juegos.html
    app.put('/api/sneakerGuardar', controllersneakers.Guardar);
    app.delete('/api/sneakersEliminar', controllersneakers.Eliminar);
    
    app.post("/api/login", usuario.iniciarSesion);
    app.post("/api/crear", usuario.crearCuenta);

    
}