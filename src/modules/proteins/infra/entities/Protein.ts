import { randomUUID } from "crypto";

export interface IProteinDTO {
	id?: string;
	imageInactive: string;
	imageActive: string;
	name: string;
	description: string;
	price: number;
}

class Protein {
	id?: string;
	imageInactive!: string;
	imageActive!: string;
	name!: string;
	description!: string;
	price!: number;

	constructor() {
		if (!this.id) {
			this.id = randomUUID();
		}
	}
}

export { Protein };