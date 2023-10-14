import { RegisterEntity } from 'src/context/entity';
import { HttpStatus } from '@nestjs/common';
import { RegisterDto, UserDto } from 'src/view/dto';
export declare class RegisterService {
    private repository;
    constructor(repository: RegisterEntity);
    postRegister(input: RegisterDto): Promise<{
        res: string;
        status: HttpStatus;
    }>;
    getUser(input: UserDto): Promise<{
        res: {
            Farm: import("@prisma/client/runtime/library").GetResult<{
                idFarm: number;
                Carbon: import("@prisma/client/runtime/library").Decimal;
                PlantHealth: import("@prisma/client/runtime/library").Decimal;
                Area: import("@prisma/client/runtime/library").Decimal;
            }, unknown> & {};
            Gamefication: import("@prisma/client/runtime/library").GetResult<{
                idGamefication: number;
                Score: import("@prisma/client/runtime/library").Decimal;
            }, unknown> & {};
            Register: import("@prisma/client/runtime/library").GetResult<{
                idRegister: number;
                Name: string;
                Email: string;
            }, unknown> & {};
            Login: import("@prisma/client/runtime/library").GetResult<{
                idLogin: number;
                Is_Logged: boolean;
            }, unknown> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            idUser: number;
            UUID: string;
            FarmId: number;
            GameficationId: number;
            RegisterId: number;
            LoginId: number;
        }, unknown> & {};
        status: HttpStatus;
    }>;
}
