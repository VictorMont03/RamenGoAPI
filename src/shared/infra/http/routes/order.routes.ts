import { Router } from "express";
import { celebrate } from "celebrate";

import { createOrderValidator } from "../../../../modules/orders/useCases/createOrder/validate";
import { CreateOrderController } from "../../../../modules/orders/useCases/createOrder/CreateOrderController";
import { QueryOrdersController } from "../../../../modules/orders/useCases/queryOrders/QueryOrdersController";

const orderRoutes = Router();

const createOrderController = new CreateOrderController();
const queryOrdersController = new QueryOrdersController();

orderRoutes.post('/', celebrate(createOrderValidator), createOrderController.handle);
orderRoutes.get('/', queryOrdersController.handle);

export { orderRoutes }