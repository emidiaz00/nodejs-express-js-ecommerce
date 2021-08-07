let {getProducts} = require('../data/dataBase')
const { get } = require('../routes')

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
        res.render('ofertas', {
            productosOferta,
            title: "Nuestras Ofertas"
        }) 
       
    },
    notebook: (req,res) =>{
        let productosNotebook = getProducts.filter(productos => productos.categorias == "notebook")
        res.render('notebooks', {
            productosNotebook,
            title:"Notebooks"
        })
    },
    categorias: (req,res) =>{
        let categoriasId = req.params.categorias
        let categorias = getProducts.find (product => product.categorias == categoriasId)
        res.render('categorias', {
            categorias
        })
    }


}