import { PrismaService } from '../../../config';
import { RegisterDto, UserDto } from 'src/view/dto';
export declare class RegisterEntity {
    private prisma;
    constructor(prisma: PrismaService);
    firstRegister(input: RegisterDto): Promise<void>;
    getUser(input: UserDto): Promise<{
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
    }, unknown> & {}>;
}
