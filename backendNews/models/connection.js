var mongoose = require('mongoose');

var options= {
    connectTimeoutMS : 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb+srv://maxence:maxenceeudier@cluster0.hlgpy.mongodb.net/morningNews?retryWrites=true&w=majority',
options,
function(err){
    console.log(err);
});
