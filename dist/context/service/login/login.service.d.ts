import { LoginEntity } from 'src/context/entity';
import { HttpStatus } from '@nestjs/common';
import { LoginDto } from 'src/view/dto';
export declare class LoginService {
    private repository;
    constructor(repository: LoginEntity);
    connectUser(input: LoginDto): Promise<{
        res: string;
        status: HttpStatus;
    }>;
    disconnectUser(input: LoginDto): Promise<{
        res: string;
        status: HttpStatus;
    }>;
}
