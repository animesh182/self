const mongoose = require('mongoose')
const connDB = (url) => {
    mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
}
module.exports = connDB