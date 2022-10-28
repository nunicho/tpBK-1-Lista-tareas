import mongoose, {Schema} from "mongoose";


//Schema es una clase de Moongose
const tareaSchema = new Schema({
    nombreTarea:{
        type: String,
        required:true,
        unique:true,
        minLength: 2,
        maxLength: 300,
    }
})

//aqui realizamos el modelo
const Tarea = mongoose.model('tarea', tareaSchema)

export default Tarea;