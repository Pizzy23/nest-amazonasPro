import { PrismaService } from '../../../config';
import { LoginDto } from 'src/view/dto';
export declare class LoginEntity {
    private prisma;
    constructor(prisma: PrismaService);
    updateConnect(input: LoginDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        idUser: number;
        UUID: string;
        FarmId: number;
        GameficationId: number;
        RegisterId: number;
        LoginId: number;
    }, unknown> & {}>;
    updateDisconnect(input: LoginDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        idUser: number;
        UUID: string;
        FarmId: number;
        GameficationId: number;
        RegisterId: number;
        LoginId: number;
    }, unknown> & {}>;
}
