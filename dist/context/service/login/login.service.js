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
exports.LoginService = void 0;
const entity_1 = require("../../entity");
const common_1 = require("@nestjs/common");
let LoginService = exports.LoginService = class LoginService {
    constructor(repository) {
        this.repository = repository;
    }
    async connectUser(input) {
        try {
            await this.repository.updateConnect(input);
            return { res: 'Usuario conectado', status: common_1.HttpStatus.ACCEPTED };
        }
        catch (e) {
            throw new common_1.HttpException('Generic Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: new Error(e),
            });
        }
    }
    async disconnectUser(input) {
        try {
            await this.repository.updateDisconnect(input);
            return { res: 'Usuario desconectado', status: common_1.HttpStatus.ACCEPTED };
        }
        catch (e) {
            throw new common_1.HttpException('Generic Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: new Error(e),
            });
        }
    }
};
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [entity_1.LoginEntity])
], LoginService);
//# sourceMappingURL=login.service.js.map