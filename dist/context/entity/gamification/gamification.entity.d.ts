import { PrismaService } from '../../../config';
import { GamificationDto } from 'src/view/dto';
export declare class GamificationEntity {
    private prisma;
    constructor(prisma: PrismaService);
    updateGamification(input: GamificationDto): Promise<void>;
}
