import { RegisterService } from 'src/context/service';
import { RegisterDto } from 'src/view/dto';
export declare class RegisterController {
    private readonly service;
    constructor(service: RegisterService);
    postRegister(input: RegisterDto): Promise<void>;
}
