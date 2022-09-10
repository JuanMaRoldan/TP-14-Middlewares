const router = require('express').Router();
const {index , contact , about , music , admin , login, noEntry} = require('../controllers/mainController');

const accessAdmin = require('../middlewares/accessAdmin');

router
        .get('/', index)
        .get('/about', about)
        .get('/admin', accessAdmin, admin)
        .get('/contact', contact)
        .get('/login', login)
        .get('/music', music)
        .get('/no-entry', noEntry)


module.exports=router;