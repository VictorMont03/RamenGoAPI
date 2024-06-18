import { inject, injectable } from "tsyringe";
import { IBrothRepository } from "../../infra/repositories/IBrothRepository";

@injectable()
class QueryBrothsUseCase {
	constructor(
		@inject('brothRepository')
		private brothRepository: IBrothRepository
	) { }

	async execute() {
		const proteins = await this.brothRepository.query();

		return proteins;
	}
}

export { QueryBrothsUseCase }