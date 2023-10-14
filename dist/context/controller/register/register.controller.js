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
exports.RegisterController = void 0;
const service_1 = require("../../service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../../../view/dto");
const sucess_interceptor_1 = require("../../../config/interceptor/sucess-interceptor");
let RegisterController = exports.RegisterController = class RegisterController {
    constructor(service) {
        this.service = service;
    }
    async postRegister(input) {
        await this.service.postRegister(input);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Router create base user',
    }),
    (0, common_1.UseInterceptors)(sucess_interceptor_1.SuccessInterceptor),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "postRegister", null);
exports.RegisterController = RegisterController = __decorate([
    (0, swagger_1.ApiTags)('Register'),
    (0, common_1.Controller)('/Register'),
    __metadata("design:paramtypes", [service_1.RegisterService])
], RegisterController);
//# sourceMappingURL=register.controller.js.map