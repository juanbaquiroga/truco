import express, { json, urlencoded } from 'express';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import router from './routes/main.js';
import session from 'express-session';
import MongoStore from "connect-mongo";
// import { middlewares } from './middlewares/index.js';




const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
app.use(json());
app.use(urlencoded({extended:true}))
// app.use(middlewares.waitMiddleware)

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
app.use(
    session({
        secret: "coderhouse",
        rolling: true,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            mongoUrl:'mongodb+srv://admin:admin123@juanbaquiroga.x9kwboy.mongodb.net/test',
            mongoOptions,
            ttl: 600,
        }),
    })
);

    
app.use('/', router)



app.listen(3000, ()=>{
console.log('server listening port 3000')
})




app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        defaultLayout: "main.html",
        layoutsDir: join(__dirname, "/views/layouts"),
        partialsDir: join(__dirname, "/views/partials"),
    }
));
    
app.set("view engine", "hbs");
app.set("views", join(__dirname, '/views'));
app.use(express.static(__dirname + "/views/layouts"));

