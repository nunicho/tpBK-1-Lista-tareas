import Tarea from "../models/tarea"

export const listarTareas = async (req, res) =>{
 try{
        
        // buscar todas las tareas en la base de datos
        const listaTareas = await Tarea.find();
        // responder al usuario que todo salió bien
        res.status(200).json(listaTareas)
        } catch (error){
        console.log(error)
        res.status(404).json({
                mensaje: 'Error al intentar buscar la tarea'
        })
        }
   
};

      

export const crearTarea = async(req, res)=>{
        try{
         // estraer del body los datos
        console.log(req.body)
        // agregar la validación correspondiente
        
        const tareaNueva = new Tarea (req.body)
        // guardar esa tarea en la base de datos
        await tareaNueva.save();
        // responder al usuario que todo salió bien
        res.status(201).json({
                mensaje: 'La tarea fue correctamente creada'
        })
        } catch (error){
        console.log(error)
        res.status(400).json({
                mensaje: 'Error al intentar agregar la tarea'
        })
        }
};


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