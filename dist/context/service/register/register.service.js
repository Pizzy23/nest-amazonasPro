"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const entity_1 = require("../../entity");
const common_1 = require("@nestjs/common");
let RegisterService = exports.RegisterService = class RegisterService {
    constructor(repository) {
        this.repository = repository;
    }
    async postRegister(input) {
        try {
            await this.repository.firstRegister(input);
            return { res: 'Registrado com sucesso', status: common_1.HttpStatus.OK };
        }
        catch (e) {
            throw new common_1.HttpException(`Usuario ja cadastrado`, common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: new Error(e),
            });
        }
    }
    async getUser(input) {
        try {
            const res = await this.repository.getUser(input);
            return { res: res, status: common_1.HttpStatus.OK };
        }
        catch (e) {
            throw new common_1.HttpException('Generic Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: new Error(e),
            });
        }
    }
};
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [entity_1.RegisterEntity])
], RegisterService);
//# sourceMappingURL=register.service.js.map