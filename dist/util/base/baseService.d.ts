import { CheckPassword, Compare, TokenGenerator } from 'src/view/interface/base/baseInterface';
export declare class BaseService {
    constructor();
    encrypt(password: string): Promise<string>;
    checkPassword(password: string, confirmPassword: string): CheckPassword;
    compare(passaword: string, hash: string): Promise<Compare>;
    emailValidate(email: string): boolean;
    tokenGenerator(): TokenGenerator;
    sendMail(email: string, txt: string, subject: string): Object;
    supportEmail(email: string, txt: string, subject: string): Object;
    private configMail;
}
