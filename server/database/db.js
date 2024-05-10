import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection =  async() =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.fypcins.mongodb.net/clone-whatsapp`
    try{
      await  mongoose.connect(URL , { useUnifiedTopology: true})
      console.log('Database Connected Succesfully');
    }
    catch(error){
        console.log('Error: ', error.message);
    }
}
export default Connection;