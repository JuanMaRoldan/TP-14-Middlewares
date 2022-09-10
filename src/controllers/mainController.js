module.exports= {
    about : (req,res) => res.render('about', {
        title : "About"
    }),
    admin : (req,res) => res.render('admin', {
        title : "Admin"
    }),
    contact : (req,res) => res.render('contact', {
        title : "Contact"
    }),
    index : (req,res) => res.render('index', {
        title : "Home"
    }),
    login : (req,res) => res.render('login', {
        title : "Login"
    }),
    music : (req,res) => res.render('music', {
        title : "Music"
    }),
    noEntry : (req,res) => res.render('noEntry', {
        title : "No Entry"
    })

}