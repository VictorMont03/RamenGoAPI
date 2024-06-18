import prisma from "../../../../shared/infra/prisma/prismaClient";
import { IOrderDTO } from "../entities/Order";
import { IOrderRepository } from "./IOrderRepository";

class OrderRepository implements IOrderRepository {
	async create({ brothId, proteinId }: IOrderDTO): Promise<IOrderDTO> {
		const order = await prisma.order.create({
			data: {
				brothId, proteinId
			}
		})

		return {
			id: order.id.toString(),
			brothId: order.brothId,
			proteinId: order.proteinId,
		}
	}

	async query(): Promise<IOrderDTO[]> {
		const orderList = await prisma.order.findMany();

		return orderList.map(order => ({
			id: order.id.toString(),
			brothId: order.brothId,
			proteinId: order.proteinId,
		}));
	}
}

export { OrderRepository };