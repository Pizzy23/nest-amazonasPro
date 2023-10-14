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
exports.GamificationService = void 0;
const entity_1 = require("../../entity");
const common_1 = require("@nestjs/common");
let GamificationService = exports.GamificationService = class GamificationService {
    constructor(repository, userRepo) {
        this.repository = repository;
        this.userRepo = userRepo;
    }
    async getGamification(input) {
        const user = await this.userRepo.getUser(input);
        const carbon = Math.floor(Number(user.Farm.Carbon));
        let resultScore;
        switch (carbon) {
            case 5:
                resultScore = 1;
                break;
            case 10:
                resultScore = 10;
                break;
            case 20:
                resultScore = 20;
                break;
            case 30:
                resultScore = 30;
                break;
            case 40:
                resultScore = 40;
                break;
            case 50:
                resultScore = 50;
                break;
            case 60:
                resultScore = 60;
                break;
            case 70:
                resultScore = 70;
                break;
            case 80:
                resultScore = 80;
                break;
            case 90:
                resultScore = 90;
                break;
            case 100:
                resultScore = 100;
                break;
            default:
                resultScore = 1;
                break;
        }
        const data = {
            uuid: input.uuid,
            score: resultScore,
        };
        await this.repository.updateGamification(data);
    }
};
exports.GamificationService = GamificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [entity_1.GamificationEntity,
        entity_1.RegisterEntity])
], GamificationService);
//# sourceMappingURL=gamification.service.js.map