var express = require('express'),
    router = express.Router(),
    db = require('../modelos'),
    authMiddleware = require('.././middleware/auth');

module.exports = app => {
    app.use('/', router);
}

router.get('/usuarios', (req, res, next) => {
    db.usuario.findAll({ attributes: ['id', 'nombre', 'email', 'tipo'] }).then((sucursales) => {
        res.json(sucursales);
    }, (ex) => {
        res.status(500).send();
    });
});
router.get('/usuario/:id', (req, res, next) => {
    var usuarioId = parseInt(req.params.id, 10);
    db.usuario.findById(usuarioId).then((usuario) => {
        if (usuario) {
            res.json({
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                tipo: usuario.tipo
            });
        } else {
            res.status(404).send();
        }

    }, (ex) => {
        res.status(500).send();
    })
})
router.put('/usuario/:id', (req, res, next) => {
    var usuarioId = parseInt(req.params.id, 10)
    var usuarioEditado = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        email: req.body.email
    }

    db.usuario.findById(usuarioId).then((usuario) => {
        if (usuario) {
            usuarioEditado.id = usuario.id
            usuarioEditado.password = usuario.password
            usuario.update(usuarioEditado).then((usuario) => {
                res.json({
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    tipo: usuario.tipo
                });
            }, (ex) => {
                res.status(400).send();
            });
        } else {
            res.status(404).send();
        }

    }, (ex) => {
        res.status(500).send();
    });
})
router.delete('/usuario/:id', (req , res , next)=>{
    var usuarioId = parseInt(req.params.id, 10 );
    db.usuario.destroy({
        where:{
            id : usuarioId
        }

    }).then((filas)=>{
        if(filas ===0){
            res.status(404).send();
        }else{
            res.status(204).send();
        }

    }, ()=>{
        res.status(500).send();
    })
})
