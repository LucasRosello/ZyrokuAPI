var express = require('express');
var pagoModel = require('../models/pagoModel');
const mercadopago = require ('mercadopago');

mercadopago.configure({
  access_token: 'TEST-1515908291492108-111121-7b1cb0cad2bbc1483d522e56e132bf4b-93177048'
});




module.exports = {

    crearPago: async function(req, res, next) {
        try{
            var precio = req.app.get("precio")
          
            let preference = {
                items: [{
                    title: 'Subcripción - 1 Mes',
                    unit_price: 10000,
                    quantity: 1,
                }]
            };
          
            mercadopago.preferences.create(preference)
            .then(function(response){
                global.id = response.body.id;
                return res.status(200).json({status: "success", message: "Pago creado con exito", data: response});
            }).catch(function(error){
                console.log(error);
            });            
        }
        catch(err)
        {
            //next(err);
        }  
      },

  save: async function(req, res, next)
  {
    try
    {
      var data = await testModel.create({ name: req.body.name });
    //   let info = await transporter.sendMail({
    //     from: process.env.EMAIL_USER,
    //     to: req.body.mail,
    //     subject: "Bienvenido "+req.body.name,
    //     text: 'Bienvenido a mi web',
    //     html: 'Bienvenido a mi Web, para verificar tu cuenta entra <a href="http://localhost:3000/users/confirm/'+data._id+'">acá</a>'
    //   });
  
      res.status(200).json({status: "success", message: "Usuario añadido con exito", data: data});
    }
    catch(err)
    {
      next(err)
    }
  },
}
