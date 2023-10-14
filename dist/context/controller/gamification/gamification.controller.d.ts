import { GamificationService } from 'src/context/service';
import { UserDto } from 'src/view/dto';
export declare class GamificationController {
    private readonly service;
    constructor(service: GamificationService);
    getGamification(input: UserDto): Promise<void>;
}
