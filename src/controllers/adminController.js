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
    listProducts:(req,res) =>{
        res.render('editProduct',{
            title: 'Edicion de productos',
            productos : getProducts
        })
    },
    editForm:(req,res) =>{
        res.render('editForm', {
            title:"Edicion del producto"
        })
    },

    deleteProduct : (req, res) => {
        getProducts.forEach(producto => {
            if (producto.id === +req.params.id) {
                let productToDelete = getProducts.indexOf(producto);
                getProducts.splice(productToDelete, 1)
            }
        })
        
        addProduct(getProducts);

        res.redirect('/admin/index')
    }
    
}