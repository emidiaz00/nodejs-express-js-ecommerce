let {getProducts, addProduct} = require('../data/dataBase')

module.exports = {
    formAgregar:(req,res) =>{
        res.render('cargaProducts', {
            title:"carga-productos"
        })
    },
    agregarProducto:(req,res) => {
        let lastId = 1;

        getProducts.forEach(producto => {
            if(producto.id > lastId){
                lastId = producto.id
            }
        });

        let nuevoProducto = {
            id: lastId + 1,
            modelo: req.body.modelo.trim(),
            marca: req.body.marca.trim(),
            precio: req.body.precio.trim(),
            categorias: req.body.categorias.trim(),
            discount: req.body.discount.trim(),
            image: 'default.png'
        }

        getProducts.push(nuevoProducto);
        
        addProduct(getProducts);
        
        res.redirect('/products')
        
    },
    editProducts:(req,res) =>{
        res.render('editProduct',{
            title: 'Edicion de productos'
        })
    },
    editForm:(req,res) =>{
        res.render('editForm', {
            title:"Edicion del producto"
        })
    }
    
}