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
exports.CarbonController = void 0;
const service_1 = require("../../service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../../../view/dto");
const sucess_interceptor_1 = require("../../../config/interceptor/sucess-interceptor");
let CarbonController = exports.CarbonController = class CarbonController {
    constructor(service) {
        this.service = service;
    }
    async putCarbon(input) {
        await this.service.updateCarbon(input);
    }
    async postDetails(input) {
        await this.service.setFarmDetails(input);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Route to update the area’s carbon emissions to percentage',
    }),
    (0, common_1.UseInterceptors)(sucess_interceptor_1.SuccessInterceptor),
    (0, common_1.Put)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CarbonDto]),
    __metadata("design:returntype", Promise)
], CarbonController.prototype, "putCarbon", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Route to update farm details',
    }),
    (0, common_1.UseInterceptors)(sucess_interceptor_1.SuccessInterceptor),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CarbonDto]),
    __metadata("design:returntype", Promise)
], CarbonController.prototype, "postDetails", null);
exports.CarbonController = CarbonController = __decorate([
    (0, swagger_1.ApiTags)('Carbon'),
    (0, common_1.Controller)('/Carbon'),
    __metadata("design:paramtypes", [service_1.CarbonService])
], CarbonController);
//# sourceMappingURL=carbon.controller.js.map