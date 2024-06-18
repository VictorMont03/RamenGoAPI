import { Router } from "express";
import { celebrate } from "celebrate";

import { CreateProteinController } from "../../../../modules/proteins/useCases/createProtein/CreateProteinController";
import { createProteinValidator } from "../../../../modules/proteins/useCases/createProtein/validate";
import { QueryProteinsController } from "../../../../modules/proteins/useCases/queryProteins/QueryProteinsController";


const proteinRoutes = Router();

const createProteinController = new CreateProteinController();
const queryProteinsController = new QueryProteinsController();

proteinRoutes.post('/', celebrate(createProteinValidator), createProteinController.handle);
proteinRoutes.get('/', queryProteinsController.handle);

export { proteinRoutes }