import { container } from "tsyringe";
import { ProteinRepository } from "../../modules/proteins/infra/repositories/ProteinRepository";
import { IProteinRepository } from "../../modules/proteins/infra/repositories/IProteinRepository";

import { BrothRepository } from "../../modules/broths/infra/repositories/BrothRepository";
import { IBrothRepository } from "../../modules/broths/infra/repositories/IBrothRepository";

import { OrderRepository } from "../../modules/orders/infra/repositories/OrderRepository";
import { IOrderRepository } from "../../modules/orders/infra/repositories/IOrderRepository";

container.registerSingleton<IProteinRepository>('proteinRepository', ProteinRepository);
container.registerSingleton<IBrothRepository>('brothRepository', BrothRepository);
container.registerSingleton<IOrderRepository>('orderRepository', OrderRepository);