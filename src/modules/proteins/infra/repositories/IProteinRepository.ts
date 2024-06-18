import { IProteinDTO } from './../entities/Protein';

interface IProteinRepository {
	create(protein: IProteinDTO): Promise<void>;
	query(): Promise<IProteinDTO[]>;
	get(id: number): Promise<IProteinDTO | null>
}

export { IProteinRepository }