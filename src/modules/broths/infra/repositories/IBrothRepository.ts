import { IBrothDTO } from '../entities/Broth';

interface IBrothRepository {
	create(protein: IBrothDTO): Promise<void>;
	query(): Promise<IBrothDTO[]>;
	get(id: number): Promise<IBrothDTO | null>
}

export { IBrothRepository }