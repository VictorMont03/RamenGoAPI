import { inject, injectable } from "tsyringe";
import { IOrderRepository } from "../../infra/repositories/IOrderRepository";

@injectable()
class QueryOrdersUseCase {
	constructor(
		@inject('orderRepository')
		private orderRepository: IOrderRepository
	) { }

	async execute() {
		const orders = await this.orderRepository.query();

		return orders;
	}
}

export { QueryOrdersUseCase }