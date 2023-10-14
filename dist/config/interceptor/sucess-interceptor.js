"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const date_1 = require("../../util/date");
let SuccessInterceptor = exports.SuccessInterceptor = class SuccessInterceptor {
    intercept(context, next) {
        const response = context.switchToHttp().getResponse();
        const request = context.switchToHttp().getRequest();
        const start = process.hrtime();
        const date = new date_1.DateManipulator();
        return next.handle().pipe((0, operators_1.map)((data) => {
            const end = process.hrtime(start);
            const timeRequest = (end[0] + end[1] / 1e9).toFixed(3);
            return {
                statusCode: data.status,
                path: request.url,
                timeRequest: `${timeRequest} MS`,
                timestamp: date.YMDHMS(),
                data: data.res,
            };
        }));
    }
};
exports.SuccessInterceptor = SuccessInterceptor = __decorate([
    (0, common_1.Injectable)()
], SuccessInterceptor);
//# sourceMappingURL=sucess-interceptor.js.map