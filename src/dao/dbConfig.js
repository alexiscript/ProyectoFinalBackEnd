import mongoose from 'mongoose'; 
import session from 'express-session';
import MongoStore from 'connect-mongo';
import config from '../config/config.js'; 

const URI = process.env.MONGO_URL; 


//conexión mongoDB
try{
    await mongoose.connect(URI); 
    console.log('Conectado a BD');
}catch(error){
    console.log(error);
}

//Configuración de sesión

const sessionMiddleware = session({
    store: MongoStore.create({
        mongoUrl: URI,
        mongoOptions: { useNewUrlParser: true },
        ttl: 3600
    }),
    secret: "Alexis",
    resave: true,
    saveUninitialized: true,
      cookie: {
        httpOnly: true,
          secure: process.env.NODE_ENV === 'production',  
        maxAge: 86400000,
        sameSite: 'none'
      }  
})
export { sessionMiddleware }


