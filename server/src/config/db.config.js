const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Successfully connected Databse.."))
.catch((err)=> console.error('Database connected error ',err));

module.exports = db;