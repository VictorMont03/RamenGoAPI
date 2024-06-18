import { randomUUID } from "crypto";

export interface IOrderDTO {
	id?: string;
	brothId: string;
	proteinId: string;
}

class Order {
	id?: string;
	brothId!: string;
	proteinId!: string;

	constructor() {
		if (!this.id) {
			this.id = randomUUID();
		}
	}
}

export { Order };