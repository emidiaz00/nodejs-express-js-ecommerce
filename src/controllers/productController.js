module.exports = {
    index: (req,res) => {
        res.render('generalProduct', {
            title: "Nuestros Productos"
        })
    },
    product:(req,res) =>{
        res.render('productDetail', {
            title: "Nuestros Productos"
        })

        
    }
}