import { Request, Response } from "express";
import { IProteinDTO } from "../../infra/entities/Protein";
import { CreateProteinUseCase } from "./CreateProteinUseCase";
import { container } from "tsyringe";


class CreateProteinController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { imageInactive, imageActive, name, description, price }: IProteinDTO = req.body;

		const createUseCase = container.resolve(CreateProteinUseCase);

		await createUseCase.execute({ imageInactive, imageActive, name, description, price });

		return res.status(201).json({ message: 'Protein created with success!' })
	};


}

export { CreateProteinController }