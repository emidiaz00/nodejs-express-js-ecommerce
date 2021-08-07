let {getPc} = require('../data/dataBase')


module.exports = {
    index: (req,res) => {
         res.render('index', {
            title: "Bienvenidos",
            getPc
        })  
       
    }
}