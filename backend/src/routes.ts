import { Router } from "express"
import OrphanagesController from "./controllers/OrphanagesController"

const routes = Router()

routes.get("/orphanages", OrphanagesController.getAll)
routes.post("/orphanages", OrphanagesController.create)

export default routes
