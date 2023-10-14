import { HttpStatus } from '@nestjs/common';
import { RegisterEntity } from 'src/context/entity';
import { UserDto } from 'src/view/dto';
export declare class CreditService {
    private repository;
    constructor(repository: RegisterEntity);
    getCredit(input: UserDto): Promise<{
        res: any;
        status: HttpStatus;
    }>;
}
