import { Router } from 'express';
import {controller} from '../controller/index.js'


const router = Router()

router.route('/').get(controller.getHome)
router.route('/juego').get(controller.getCards)
router.route('/final').get(controller.final)
router
    .get('/jugador1', controller.jugador1)
    .get('/jugador2', controller.jugador2)
    .get('/jugador3', controller.jugador3)
    .get('/jugador4', controller.jugador4)

export default router;