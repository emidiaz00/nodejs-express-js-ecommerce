module.exports = {
    index: (req,res) => {
        res.render('generalProduct', {
            
        })
    },
    product:(req,res) =>{
        res.render('productDetail')
    }
}