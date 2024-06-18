import { inject, injectable } from "tsyringe";
import { IBrothDTO } from "../../infra/entities/Broth";
import { IBrothRepository } from "../../infra/repositories/IBrothRepository";
import { BrothRepository } from "../../infra/repositories/BrothRepository";

@injectable()
class CreateBrothUseCase {
	constructor(
		@inject('brothRepository')
		private brothRepository: IBrothRepository
	) { }

	async execute({ imageInactive, imageActive, name, description, price }: IBrothDTO) {
		await this.brothRepository.create({
			imageInactive, imageActive, name, description, price
		})
	}
}

export { CreateBrothUseCase }