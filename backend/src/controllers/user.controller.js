import UserService from "../services/user.service.js";
import { ADMIN } from "../constants/roles.constant.js";
import {ERROR_NOT_HAVE_PRIVILEGES} from "../constants/messages.constant.js"

export default class UserController {
    #userService;

    constructor() {
        this.#userService = new UserService();
    }

    // Obtener todos los usuarios
    async getAll(req, res) {
        try {
            const users = await this.#userService.findAll(req.query);
            res.sendSuccess200(users);
        } catch (error) {
            res.sendError(error);
        }
    }

    // Obtener un usuario por su ID
    async getById(req, res) {
        try {
            const user = await this.#userService.findOneById(req.params.id);
            res.sendSuccess200(user);
        } catch (error) {
            res.sendError(error);
        }
    }

    // Crear un nuevo usuario
    async create(req, res) {
        try {
            const user = await this.#userService.insertOne(req.body);
            res.sendSuccess201(user);
        } catch (error) {
            res.sendError(error);
        }
    }

    // Actualizar un usuario existente
    async update(req, res) {
        try {
            if(req.body.roles){
                if(!req.roles.includes(ADMIN)){
                    return res.sendError(new Error(ERROR_NOT_HAVE_PRIVILEGES))
                }
            }
            const user = await this.#userService.updateOneById(req.params.id, req.body);
            res.sendSuccess200(user);
        } catch (error) {
            res.sendError(error);
        }
    }

    // Eliminar un usuario por su ID
    async delete(req, res) {
        try {
            const user = await this.#userService.deleteOneById(req.params.id);
            res.sendSuccess200(user);
        } catch (error) {
            res.sendError(error);
        }
    }
}