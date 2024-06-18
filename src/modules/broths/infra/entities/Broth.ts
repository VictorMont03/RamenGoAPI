import { randomUUID } from "crypto";

export interface IBrothDTO {
	id?: string;
	imageInactive: string;
	imageActive: string;
	name: string;
	description: string;
	price: number;
}

class Broth {
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

export { Broth };