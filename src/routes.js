import { Router } from "express";
import SelectionController from "./app/controllers/SelectionController.js";

const router = Router()

router.get('/selections', SelectionController.index)
router.get('/selections/:id', SelectionController.show)
router.post('/selections', SelectionController.store)
router.delete('/selections/:id', SelectionController.delete)
router.put('/selections/:id', SelectionController.update)

export default router