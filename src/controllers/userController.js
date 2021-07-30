module.exports = {
    index: (req,res) => {
        res.render('myaccount', {
            
        })
    },
    register:(req,res) =>{
        res.render('register', {

        })
    },
    finishBuy:(req,res) =>{
        res.render('finishBuying', {
            
        })
    }

}