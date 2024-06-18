import prisma from "../../../../shared/infra/prisma/prismaClient";
import { IProteinDTO } from "../entities/Protein";
import { IProteinRepository } from "./IProteinRepository";

class ProteinRepository implements IProteinRepository {
	async create({ imageInactive, imageActive, name, description, price }: IProteinDTO): Promise<void> {
		await prisma.protein.create({
			data: {
				imageInactive, imageActive, name, description, price
			}
		})
	}

	async query(): Promise<IProteinDTO[]> {
		const proteinList = await prisma.protein.findMany();

		return proteinList.map(protein => ({
			id: protein.id.toString(),
			imageInactive: protein.imageInactive,
			imageActive: protein.imageActive,
			name: protein.name,
			description: protein.description,
			price: protein.price
		}));
	}

	async get(id: number): Promise<IProteinDTO | null> {
		const protein = await prisma.protein.findUnique({
			where: {
				id: id
			}
		});

		if (protein == null) {
			return null;
		}

		return {
			id: protein.id.toString(),
			imageInactive: protein.imageInactive,
			imageActive: protein.imageActive,
			name: protein.name,
			description: protein.description,
			price: protein.price
		};
	}
}

export { ProteinRepository };