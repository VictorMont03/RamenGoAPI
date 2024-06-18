import { Request, Response } from "express";
import { QueryBrothsUseCase } from "./QueryBrothsUseCase";
import { container } from "tsyringe";


class QueryBrothsController {
	async handle(req: Request, res: Response): Promise<Response> {
		const queryUseCase = container.resolve(QueryBrothsUseCase);

		const broths = await queryUseCase.execute();

		return res.status(201).json([...broths])
	};


}

export { QueryBrothsController }