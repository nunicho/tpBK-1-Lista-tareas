

export const listarTareas = async (req, res) =>{
        res.send('aqui tengo que retornar un arreglo de tareas')
}

      

export const crearTarea = async(req, res)=>{
        console.log(req)
        // estraer del body los datos
        console.log(req.body)
        // agregar la validación correspondiente
        // guardar ese producto en la base de datos
        
        res.send('esto es una prueba de la petición POST')
}


/*

import Tarea from '../models/tarea'

export const listarTareas = async (req, res) =>{
try{
     
const listaTareas= await Tarea.find();
        // buscar todos los productos en la Base de Datos
res.status(200).json(listaTareas)
} catch (error){
    console.log(error);
    res.status(404).json({
    mensaje: ('Error al intentar agregar una tarea')
})
}
}

        


export const crearTarea = async(req, res)=>{

try{
        // extraer del body los datos
console.log(req.body)
        // agregar la validación correspondiente
const tareaNueva = new Tarea(req.body);
        // guardar los productos en la Base de Datos
tareaNueva.save()
        // responder al usuario que todo está Bien.    
res.status(201).json({
    mensaje: 'La tarea fue correctamente creada'
})
 } catch (error){
    console.log(error);
    res.status(400).json({
    mensaje: ('Error al intentar agregar una tarea')
})
}
}

*/