import { Router } from "express"; 
import { crearTarea, editarTarea, listarTareas, obtenerTarea, borrarTarea} from "../controllers/tareas.controllers";
import { check } from "express-validator";


const router = Router ();

router.route('/tareas')
.get(listarTareas)
.post([
        check('nombreTarea')
        .notEmpty()
        .withMessage('El nombre de la tarea es un dato obligatorio')
        .isLength({min: 2, max:150})
        .withMessage('El nombre de la tarea debe de tener entre  2 y 150 caracteres')
],crearTarea)


router.route('/tareas/:id')
.get(obtenerTarea)
.put([
        check('nombreTarea')
        .notEmpty()
        .withMessage('El nombre de la tarea es un dato obligatorio')
        .isLength({min: 2, max:150})
        .withMessage('El nombre de la tarea debe de tener entre  2 y 150 caracteres')
],editarTarea)
.delete(borrarTarea)



export default router;
