import { inject, injectable } from "tsyringe";
import { IOrderDTO } from "../../infra/entities/Order";
import { IOrderRepository } from "../../infra/repositories/IOrderRepository";
import { IBrothRepository } from "../../../broths/infra/repositories/IBrothRepository";
import { IProteinRepository } from "../../../proteins/infra/repositories/IProteinRepository";

@injectable()
class CreateOrderUseCase {
	constructor(
		@inject('orderRepository') private orderRepository: IOrderRepository,
		@inject('brothRepository') private brothRepository: IBrothRepository,
		@inject('proteinRepository') private proteinRepository: IProteinRepository,
	) { }

	async execute({ brothId, proteinId }: IOrderDTO) {
		const broth = await this.brothRepository.get(parseInt(brothId));
		const protein = await this.proteinRepository.get(parseInt(proteinId));

		const order = await this.orderRepository.create({
			brothId, proteinId
		})

		return {
			broth,
			protein,
			order
		}
	}
}

export { CreateOrderUseCase }