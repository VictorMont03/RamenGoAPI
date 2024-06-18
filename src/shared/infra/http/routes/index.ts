import { Router } from "express";

import { proteinRoutes } from "./protein.routes";
import { brothRoutes } from "./broth.routes";
import { orderRoutes } from "./order.routes";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthentication";

const router = Router();

router.use('/proteins', ensureAuthenticated, proteinRoutes);
router.use('/broths', ensureAuthenticated, brothRoutes);
router.use("/orders", ensureAuthenticated, orderRoutes);

export { router }