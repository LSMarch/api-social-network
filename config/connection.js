const {connect, connection} = require('mongoose');
//const { mainModule } = require('process');

connect('mongodb://localhost:27017/socialNetwork_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection