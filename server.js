const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config()


const DB_URI = process.env.DB_URI;

const connectDb = async () => {
    try {
      mongoose.set('strictQuery', false)
      await mongoose.connect(DB_URI)
      console.log("CONNECTED MONGODB !")
    } catch (error) {
      console.log(error.message)
    }
}

  connectDb();


  let port = process.env.PORT || 5000 ;

  app.listen(port , ()=>{console.log("Demarage du serveur en Port : "+port)})