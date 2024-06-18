import { inject, injectable } from "tsyringe";
import { IProteinRepository } from "../../infra/repositories/IProteinRepository";

@injectable()
class QueryProteinsUseCase {
	constructor(
		@inject('proteinRepository')
		private proteinRepository: IProteinRepository
	) { }

	async execute() {
		const proteins = await this.proteinRepository.query();

		return proteins;
	}
}

export { QueryProteinsUseCase }