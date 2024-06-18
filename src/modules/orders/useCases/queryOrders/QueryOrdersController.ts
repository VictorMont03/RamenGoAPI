import { Request, Response } from "express";
import { QueryOrdersUseCase } from "./QueryOrdersUseCase";
import { container } from "tsyringe";


class QueryOrdersController {
	async handle(req: Request, res: Response): Promise<Response> {
		const queryUseCase = container.resolve(QueryOrdersUseCase);

		const orders = await queryUseCase.execute();

		return res.status(201).json([...orders])
	};


}

export { QueryOrdersController }