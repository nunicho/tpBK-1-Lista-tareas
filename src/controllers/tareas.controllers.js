import { validationResult } from "express-validator";
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
        // manejar los errores de express-validator
        const errores = validationResult(req);
        // errores.isEmpty() retorna true cuando no hay errores y retorna false cuando hay errores
        //pregunto si hay errores
        if(! errores.isEmpty()){
               return  res.status(400).json({
                        errores: errores.array()
                })
        }
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

export const obtenerTarea = async (req, res) =>{
try{
//obtener el parámetro
console.log(req.params.id)
//pedirle a la BD buscar el documento que conincide con el id del parámetro
const tareaBuscada = await Tarea.findById(req.params.id)
// responder con la tarea encontrada
res.status(200).json(tareaBuscada);
}catch(error){
 console.log(error)
 res.status(404).json({
        mensaje: 'Error no se pudo encontrar la tarea solicitada'
 })
}
}


export const editarTarea = async (req, res) =>{
try{
//buscar la tarea por el id, luego modificar los datos, luego modificar los datos por el bodu
 await Tarea.findByIdAndUpdate(req.params.id,req.body)
//responder al frontend
const errores = validationResult(req);
        // errores.isEmpty() retorna true cuando no hay errores y retorna false cuando hay errores
        //pregunto si hay errores
        if(! errores.isEmpty()){
               return  res.status(400).json({
                        errores: errores.array()
                })
        }
res.status(200).json({
        mensaje: 'La tarea fue editada correctamente'
})
}catch(error){
 console.log(error)
 res.status(404).json({
        mensaje: 'Error, la tarea solicitada no pudo ser modificada'
 })
}
}

export const borrarTarea = async (req, res) =>{
try{
// buscar una tarea por el id y borrar
await Tarea.findByIdAndDelete(req.params.id)
res.status(200).json({
        mensaje: 'La tarea fue correctamente eliminada'
})
}catch(error){
 console.log(error)
 res.status(404).json({
        mensaje: 'Error, la tarea solicitada no pudo ser eliminada'
 })
}
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