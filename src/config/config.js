import dotenv from 'dotenv'; 

dotenv.config(); 

export default {
    // persistence: process.env.PERSISTENCE,
    mongoUrl: process.env.MONGO_URL,
    mongoUrlTesting: process.env.MONGO_URL_TESTING,
    secret: process.env.SECRET,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,

  

}