import { GamificationEntity, RegisterEntity } from 'src/context/entity';
import { UserDto } from 'src/view/dto';
export declare class GamificationService {
    private repository;
    private userRepo;
    constructor(repository: GamificationEntity, userRepo: RegisterEntity);
    getGamification(input: UserDto): Promise<void>;
}
