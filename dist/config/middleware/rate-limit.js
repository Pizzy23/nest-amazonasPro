"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitMiddleware = void 0;
const common_1 = require("@nestjs/common");
const rate_limiter_flexible_1 = require("rate-limiter-flexible");
let RateLimitMiddleware = exports.RateLimitMiddleware = class RateLimitMiddleware {
    constructor() {
        this.limiter = new rate_limiter_flexible_1.RateLimiterMemory({
            points: 10,
            duration: 60,
        });
    }
    async use(req, res, next) {
        const clientIp = req.ip;
        try {
            await this.limiter.consume(clientIp);
            next();
        }
        catch (error) {
            throw new common_1.HttpException('Too Many Requests', common_1.HttpStatus.TOO_MANY_REQUESTS);
        }
    }
};
exports.RateLimitMiddleware = RateLimitMiddleware = __decorate([
    (0, common_1.Injectable)()
], RateLimitMiddleware);
//# sourceMappingURL=rate-limit.js.map