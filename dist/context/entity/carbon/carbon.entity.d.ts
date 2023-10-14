import { PrismaService } from '../../../config';
import { CarbonDto } from 'src/view/dto';
export declare class CarbonEntity {
    private prisma;
    constructor(prisma: PrismaService);
    updateFarmer(input: CarbonDto): Promise<void>;
}
