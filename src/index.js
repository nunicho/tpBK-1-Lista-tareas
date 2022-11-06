import express  from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import tareasRouter from './routes/tareas.routes'
import './database'

const app = express();

app.set('port', process.env.PORT || 4004)
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+ app.get('port'));
})

app.use(morgan('dev'));
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../public')));
console.log(path.join(__dirname, '../public'))

app.use('/apitareas', tareasRouter)