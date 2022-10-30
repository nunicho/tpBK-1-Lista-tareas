import { Router } from "express"; 
import { crearTarea, editarTarea, listarTareas, obtenerTarea } from "../controllers/tareas.controllers";

//ojo, Router no es lo mismo que router.
const router = Router ();

router.route('/tareas')
        .get(listarTareas)
        .post(crearTarea)



router.route('/tareas/:id')
.get(obtenerTarea)
.put(editarTarea)
// .delete()



export default router;
