import express  from "express";
import { 
    registrar, 
    autenticar, 
    confirmar, 
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

//Autenticación, Registro y Confirmación de Usuarios
router.post("/", registrar); //Crea un nuevo usuario
router.post("/login", autenticar); //Autenticar un nuevo usuario
router.get("/confirmar/:token", confirmar); //Confirmar un nuevo usuario
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

router.get("/perfil", checkAuth, perfil);

export default router;