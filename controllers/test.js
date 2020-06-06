var express = require('express');

// var router = express.Router();

var testModel = require('../models/testModel');



module.exports = {

    // test: async function(req, res, next){
    //     console.log("hola desde el controller");
    // },

    test: async function(req, res, next) {
        try{
            var testVar = await testModel.find({});
            res.status(200).json({status: "success", message: "ok", data: testVar});
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
  }



//   login: async function(req, res, next)
//   {
//     try
//     {
//       var usuario = await autenticationModel.findOne({usuario:req.body.usuario});
//       if (usuario)
//         {
//           if(bcrypt.compareSync(req.body.password, usuario.password))
//           {
//             const token = jwt.sign({id: usuario._id}, req.app.get('secretKey'), { expiresIn: '1h'});
//             console.log(token,usuario);
//             res.json({status: "success", message:"Usuario Encontrado", data:{user: usuario, token: token}});
//           }
//           else
//           {
//             res.json({status:"not_found", message:"Usuario No Encontrado", data:null});
//           }
//         }
//     }
//     catch(err)
//     {
//       next(err);
//     }
//   },







//   confirm: async function(req, res, next)
//   {
//     try
//     {
//       id = req.params.userId
//       var data = await autenticationModel.updateOne(
//        { "_id":id},
//        { $set: {"verificado":true}}
//        );
//       res.status(200).json({status: "success", message: "Usuario activado con exito", data: data});
//     }
//     catch(err)
//     {
//       next(err);
//     }
//   },


//   delete: async function(req, res, next){
//     try
//     {
//         var id = req.params.userId;
//         var result = await autenticationModel.deleteOne(
//             {"_id":id}
//         );
//         if(result.deletedCount > 0)
//         {
//             res.status(200).json({status: "success", message: "Usuario eliminado con exito", data: result});
//         }
//         else
//         {
//             res.status(404).json({status: "success", message: "No se encontro el producto", data: result});
//         }
//     }
//     catch(err)
//     {
//         next(err);
//     }
//   }
}
