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
exports.CarbonService = void 0;
const entity_1 = require("../../entity");
const common_1 = require("@nestjs/common");
let CarbonService = exports.CarbonService = class CarbonService {
    constructor(repository) {
        this.repository = repository;
    }
    async updateCarbon(input) {
        try {
            input.carbon = this.getPercentage(input);
            await this.repository.updateFarmer(input);
            return { res: 'Dados atualizados', status: common_1.HttpStatus.ACCEPTED };
        }
        catch (e) {
            throw new common_1.HttpException('Generic Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: new Error(e),
            });
        }
    }
    getPercentage(input) {
        return (input.carbon / input.area) * 100;
    }
    async setFarmDetails(input) {
        try {
            await this.repository.updateFarmer(input);
            return { res: 'Dados atualizados', status: common_1.HttpStatus.ACCEPTED };
        }
        catch (e) {
            throw new common_1.HttpException('Generic Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: new Error(e),
            });
        }
    }
};
exports.CarbonService = CarbonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [entity_1.CarbonEntity])
], CarbonService);
//# sourceMappingURL=carbon.service.js.map