module.exports = {
    index: (req,res) => {
        res.render('myaccount', {
            title:"Cuenta"
        })
    },
    register:(req,res) =>{
        res.render('register', {
            title: "Registro"
        })
    },
    finishBuy:(req,res) =>{
        res.render('finishBuying', {
            title:"Fin de transaccion"
        })
    },
    about:(req,res) =>{
        res.render('about', {
            title:"about-us"
        })
    }

}