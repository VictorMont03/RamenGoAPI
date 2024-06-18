import { Router } from "express";
import { celebrate } from "celebrate";

import { CreateBrothController } from "../../../../modules/broths/useCases/createBroth/CreateBrothController";
import { createBrothValidator } from "../../../../modules/broths/useCases/createBroth/validate";
import { QueryBrothsController } from "../../../../modules/broths/useCases/queryBroths/QueryBrothsController";


const brothRoutes = Router();

const createBrothController = new CreateBrothController();
const queryBrothsController = new QueryBrothsController();

brothRoutes.post('/', celebrate(createBrothValidator), createBrothController.handle);
brothRoutes.get('/', queryBrothsController.handle);

export { brothRoutes }