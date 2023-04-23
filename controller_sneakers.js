let Item = require("./sneaker_mongo"); 
exports.Guardar = (req, res) => {  
    //Crea y guarda una funcion
    Item.create({
        //Crea el Schema
        modelo: req.body.modelo,
        talla: req.body.talla,
        colorway: req.body.colorway,
        precio: req.body.precio,
        imagen: req.body.imagen    
    })
}

//elimina el item
exports.Eliminar = function (req, res) {
    Item.remove({ _id: req.body._id },
        function (err, item) {
            if (err) {
                res.send(err);
            }
            else {
                Item.find(function (err, item) {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send(item);
                    }
                });
            }
        });
}

exports.buy = (req, res) => {
    Item.update({
        _id: req.params.id
    },
    {
        $set: {
            comprado: true
        }
    }, (error) => {
        if (error) {
            res.send(error);
        } else {
            res.json({}); 
        }
    });
};