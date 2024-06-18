import { Request, Response } from "express";
import { QueryProteinsUseCase } from "./QueryProteinsUseCase";
import { container } from "tsyringe";


class QueryProteinsController {
	async handle(req: Request, res: Response): Promise<Response> {
		const queryUseCase = container.resolve(QueryProteinsUseCase);

		const proteins = await queryUseCase.execute();

		return res.status(201).json([...proteins])
	};


}

export { QueryProteinsController }