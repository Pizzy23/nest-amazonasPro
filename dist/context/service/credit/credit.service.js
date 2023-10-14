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
exports.CreditService = void 0;
const common_1 = require("@nestjs/common");
const entity_1 = require("../../entity");
let CreditService = exports.CreditService = class CreditService {
    constructor(repository) {
        this.repository = repository;
    }
    async getCredit(input) {
        const user = await this.repository.getUser(input);
        const scoreWeight = 0.5;
        const carbonWeight = 0.5;
        const carbon = Math.floor(Number(user.Farm.Carbon));
        const score = Math.floor(Number(user.Gamefication.Score));
        const totalScore = scoreWeight * score + carbonWeight * carbon;
        const creditAmount = Math.floor(totalScore / 100);
        let credit;
        switch (creditAmount) {
            case 10:
                credit = 1000;
                break;
            case 30:
                credit = 2000;
                break;
            case 40:
                credit = 3000;
                break;
            case 50:
                credit = 4000;
                break;
            case 60:
                credit = 5000;
                break;
            case 70:
                credit = 6000;
                break;
            case 80:
                credit = 7000;
                break;
            case 90:
                credit = 8000;
                break;
            case 100:
                credit = 9000;
                break;
            case 110:
                credit = 10000;
                break;
            default:
                credit = 20000;
                break;
        }
        return { res: credit, status: common_1.HttpStatus.OK };
    }
};
exports.CreditService = CreditService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [entity_1.RegisterEntity])
], CreditService);
//# sourceMappingURL=credit.service.js.map