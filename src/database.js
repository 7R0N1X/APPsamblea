const mongoose = require('mongoose');

const database = mongoose.connect('mongodb://localhost/APPsamblea')
.then(db => console.log('Connected database'))
.catch(err => console.log(err))

module.exports = database;