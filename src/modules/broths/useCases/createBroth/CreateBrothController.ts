import { Request, Response } from "express";
import { IBrothDTO } from "../../infra/entities/Broth";
import { CreateBrothUseCase } from "./CreateBrothUseCase";
import { container } from "tsyringe";


class CreateBrothController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { imageInactive, imageActive, name, description, price }: IBrothDTO = req.body;

		const createUseCase = container.resolve(CreateBrothUseCase);

		await createUseCase.execute({ imageInactive, imageActive, name, description, price });

		return res.status(201).json({ message: 'Broth created with success!' })
	};


}

export { CreateBrothController }