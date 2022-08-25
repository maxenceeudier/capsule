var mongoose = require('mongoose');


    
var grilleSchema = mongoose.Schema({
    value:[Number]
});

var grilleModel = mongoose.model('grille',grilleSchema);

module.exports = grilleModel;