import { LoginService } from 'src/context/service';
import { LoginDto } from 'src/view/dto';
export declare class LoginController {
    private readonly service;
    constructor(service: LoginService);
    putDisconnect(input: LoginDto): Promise<{
        res: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    putConnect(input: LoginDto): Promise<{
        res: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
