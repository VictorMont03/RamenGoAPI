import prisma from "../../../../shared/infra/prisma/prismaClient";
import { IBrothDTO } from "../entities/Broth";
import { IBrothRepository } from "./IBrothRepository";

class BrothRepository implements IBrothRepository {
	async create({ imageInactive, imageActive, name, description, price }: IBrothDTO): Promise<void> {
		await prisma.broth.create({
			data: {
				imageInactive, imageActive, name, description, price
			}
		})
	}

	async query(): Promise<IBrothDTO[]> {
		const brothList = await prisma.broth.findMany();

		return brothList.map(broth => ({
			id: broth.id.toString(),
			imageInactive: broth.imageInactive,
			imageActive: broth.imageActive,
			name: broth.name,
			description: broth.description,
			price: broth.price
		}));
	}

	async get(id: number): Promise<IBrothDTO | null> {
		const broth = await prisma.broth.findUnique({
			where: {
				id: id
			}
		});

		if (broth == null) {
			return null;
		}

		return {
			id: broth.id.toString(),
			imageInactive: broth.imageInactive,
			imageActive: broth.imageActive,
			name: broth.name,
			description: broth.description,
			price: broth.price
		};
	}
}

export { BrothRepository };