import { CarbonService } from 'src/context/service';
import { CarbonDto } from 'src/view/dto';
export declare class CarbonController {
    private readonly service;
    constructor(service: CarbonService);
    putCarbon(input: CarbonDto): Promise<void>;
    postDetails(input: CarbonDto): Promise<void>;
}
