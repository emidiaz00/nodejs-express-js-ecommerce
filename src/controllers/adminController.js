module.exports = {
   cargaProducts:(req,res) =>{
        res.render('cargaProducts', {
            title:"carga-productos"
        })
    },
    editProducts:(req,res) =>{
        res.render('editProduct',{
            title: 'Edicion de productos'
        })
    }
}