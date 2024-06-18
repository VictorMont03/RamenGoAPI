import { IOrderDTO } from '../entities/Order';

interface IOrderRepository {
	create(order: IOrderDTO): Promise<IOrderDTO>;
	query(): Promise<IOrderDTO[]>;
}

export { IOrderRepository }