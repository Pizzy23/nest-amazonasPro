"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const _1 = require(".");
let EntityModule = exports.EntityModule = class EntityModule {
};
exports.EntityModule = EntityModule = __decorate([
    (0, common_1.Module)({
        exports: [
            config_1.PrismaService,
            _1.CarbonEntity,
            _1.GamificationEntity,
            _1.LoginEntity,
            _1.RegisterEntity,
        ],
        providers: [
            config_1.PrismaService,
            _1.CarbonEntity,
            _1.GamificationEntity,
            _1.LoginEntity,
            _1.RegisterEntity,
        ],
    })
], EntityModule);
//# sourceMappingURL=entity.module.js.map