import { CarbonEntity } from 'src/context/entity';
import { HttpStatus } from '@nestjs/common';
import { CarbonDto } from 'src/view/dto';
export declare class CarbonService {
    private repository;
    constructor(repository: CarbonEntity);
    updateCarbon(input: CarbonDto): Promise<{
        res: string;
        status: HttpStatus;
    }>;
    getPercentage(input: CarbonDto): number;
    setFarmDetails(input: CarbonDto): Promise<{
        res: string;
        status: HttpStatus;
    }>;
}
