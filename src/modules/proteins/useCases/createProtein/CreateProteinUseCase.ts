import { inject, injectable } from "tsyringe";
import { IProteinDTO } from "../../infra/entities/Protein";
import { IProteinRepository } from "../../infra/repositories/IProteinRepository";
import { ProteinRepository } from "../../infra/repositories/ProteinRepository";

@injectable()
class CreateProteinUseCase {
	constructor(
		@inject('proteinRepository')
		private proteinRepository: IProteinRepository
	) { }

	async execute({ imageInactive, imageActive, name, description, price }: IProteinDTO) {
		await this.proteinRepository.create({
			imageInactive, imageActive, name, description, price
		})
	}
}

export { CreateProteinUseCase }