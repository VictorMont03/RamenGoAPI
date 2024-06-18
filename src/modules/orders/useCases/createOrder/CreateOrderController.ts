import { Request, Response } from "express";
import { IOrderDTO } from "../../infra/entities/Order";
import { CreateOrderUseCase } from "./CreateOrderUseCase";
import { container } from "tsyringe";


class CreateOrderController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { brothId, proteinId }: IOrderDTO = req.body;

		const createUseCase = container.resolve(CreateOrderUseCase);

		const fullOrder = await createUseCase.execute({ brothId, proteinId });

		return res.status(201).json({
			id: fullOrder?.order?.id,
			description: `${fullOrder?.broth?.name} and ${fullOrder?.protein?.name}`,
			image: fullOrder?.protein?.imageActive
		})
	};


}

export { CreateOrderController }