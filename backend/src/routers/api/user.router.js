
import BaseRouter from "../base.router.js";
import UserController from "../../controllers/user.controller.js";
import { validateOwnership } from "../../middlewares/auth.middleware.js"
import { ADMIN, STANDARD } from "../../constants/roles.constant.js";

export default class UserRouter extends BaseRouter {
    #userController;

    constructor() {
        super();
        this.#userController = new UserController();
    }

    initialize() {
        const router = this.getRouter();

        // Define las rutas y asocia las funciones correspondientes
        this.addGetRoute("/", [ADMIN], (req, res) => this.#userController.getAll(req, res));
        this.addGetRoute("/:id", [STANDARD], validateOwnership, (req, res) => this.#userController.getById(req, res));
        this.addPostRoute("/", [], (req, res) => this.#userController.create(req, res));
        this.addPutRoute("/:id", [STANDARD], validateOwnership,(req, res) => this.#userController.update(req, res));
        this.addDeleteRoute("/:id", [STANDARD],validateOwnership, (req, res) => this.#userController.delete(req, res));

        // Middleware para manejar errores
        // eslint-disable-next-line no-unused-vars
        router.use((err, req, res, next) => {
            res.sendError(err);
        });
    }
}