import { CreditService } from 'src/context/service';
import { UserDto } from 'src/view/dto';
export declare class CreditController {
    private readonly service;
    constructor(service: CreditService);
    getCredit(input: UserDto): Promise<{
        res: any;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
