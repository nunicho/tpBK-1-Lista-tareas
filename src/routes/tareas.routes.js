import { Router } from "express"; 
import { crearTarea, editarTarea, listarTareas, obtenerTarea, borrarTarea} from "../controllers/tareas.controllers";
import { check } from "express-validator";

//ojo, Router no es lo mismo que router.
const router = Router ();

router.route('/tareas')
.get(listarTareas)
.post([
        check('nombreTarea')
        .notEmpty()
        .withMessage('El nombre de la tarea es un dato obligatorio')
        .isLength({min: 2, max:100})
        .withMessage('El nombre de la tarea debe de tener entre  2 y 100 caracteres')
],crearTarea)



router.route('/tareas/:id')
.get(obtenerTarea)
.put([
        check('nombreTarea')
        .notEmpty()
        .withMessage('El nombre de la tarea es un dato obligatorio')
        .isLength({min: 2, max:100})
        .withMessage('El nombre de la tarea debe de tener entre  2 y 100 caracteres')
],editarTarea)
.delete(borrarTarea)



export default router;
