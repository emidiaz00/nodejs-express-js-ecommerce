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
            descripcion: req.body.descripcion,
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
        let producto = getProducts.find(producto => {
            return producto.id === +req.params.id
        })

        res.render('editForm', {
            title:"Edicion del producto",
            producto
        })
    },
    editProduct: (req,res) => {
      let {modelo, marca, precio , categorias , discount,descripcion} = req.body

      getProducts.forEach(producto => {
          if(producto.id === +req.params.id){
              producto.modelo = modelo.trim()
              producto.marca = marca.trim()
              producto.precio = precio.trim()
              producto.categorias = categorias.trim()
              producto.discount = discount.trim()
              producto.descripcion = descripcion.trim()
        }
      })

      addProduct(getProducts)
      res.redirect('/admin/index')
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