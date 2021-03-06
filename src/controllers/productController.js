let {getProducts} = require('../data/dataBase')


module.exports = {
    index: (req,res) => {
        res.render('generalProduct', {
            title: "Nuestros Productos",
            getProducts
        })
    },
    product:(req,res) =>{
        
            let producto = getProducts.find(product =>{
                return product.id === +req.params.id
            })
            res.render('productDetail', {
                title: "Nuestros Productos",
                producto
        })

        
    },
    ofertas: (req,res) => {

        let productosOferta = getProducts.filter (productos => productos.discount >=10)
         res.render('generalProduct', {
            getProducts:  productosOferta,
            title: "Nuestras Ofertas"
        })  
       
       
    },
    notebook: (req,res) =>{
        let productosNotebook = getProducts.filter(productos => productos.categorias == "notebook")
        res.render('generalProduct', {
            getProducts: productosNotebook,
            title:"Notebooks"
        })
    },
    categorias: (req,res) =>{
        let categoriasId = req.params.categorias
        let categorias = getProducts.filter(product => product.categorias == categoriasId)
        res.render('generalProduct', {
            getProducts: categorias,
            title: "Productos"
        })
    },
}