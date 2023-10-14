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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const service_1 = require("../../service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../../../view/dto");
const sucess_interceptor_1 = require("../../../config/interceptor/sucess-interceptor");
let LoginController = exports.LoginController = class LoginController {
    constructor(service) {
        this.service = service;
    }
    async putDisconnect(input) {
        return await this.service.disconnectUser(input);
    }
    async putConnect(input) {
        return await this.service.connectUser(input);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Route to disconnect the user',
    }),
    (0, common_1.UseInterceptors)(sucess_interceptor_1.SuccessInterceptor),
    (0, common_1.Put)('/disconnect'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "putDisconnect", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Route to connect the user',
    }),
    (0, common_1.UseInterceptors)(sucess_interceptor_1.SuccessInterceptor),
    (0, common_1.Put)('/connect'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "putConnect", null);
exports.LoginController = LoginController = __decorate([
    (0, swagger_1.ApiTags)('Login'),
    (0, common_1.Controller)('/Login'),
    __metadata("design:paramtypes", [service_1.LoginService])
], LoginController);
//# sourceMappingURL=login.controller.js.map