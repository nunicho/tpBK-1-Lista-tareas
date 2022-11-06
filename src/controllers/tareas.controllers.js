import { validationResult } from "express-validator";
import Tarea from "../models/tarea"

export const listarTareas = async (req, res) =>{
 try{
         const listaTareas = await Tarea.find();
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
        const errores = validationResult(req);
        if(! errores.isEmpty()){
               return  res.status(400).json({
                        errores: errores.array()
                })
        }
        console.log(req.body)
        const tareaNueva = new Tarea (req.body)
        await tareaNueva.save();
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
console.log(req.params.id)
const tareaBuscada = await Tarea.findById(req.params.id)
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
 await Tarea.findByIdAndUpdate(req.params.id,req.body)
const errores = validationResult(req);
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
