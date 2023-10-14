"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const context_module_1 = require("./context/context.module");
const config_1 = require("./config");
const http_catcher_1 = require("./config/middleware/http-catcher");
const core_1 = require("@nestjs/core");
const entity_module_1 = require("./context/entity/entity.module");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(config_1.RequestLoggerMiddleware).forRoutes('*');
        consumer.apply(config_1.RateLimitMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, context_module_1.ContextModule, entity_module_1.EntityModule],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: http_catcher_1.HttpExceptionFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map