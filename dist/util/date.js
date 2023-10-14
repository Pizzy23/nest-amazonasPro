"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateManipulator = void 0;
const common_1 = require("@nestjs/common");
let DateManipulator = exports.DateManipulator = class DateManipulator {
    createDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');
        return {
            year: year,
            month: month,
            day: day,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }
    saveFile() {
        const date = this.createDate();
        return `${date.year}${date.month}${date.day}${date.hours}${date.minutes}${date.seconds}`;
    }
    YMD() {
        const date = this.createDate();
        return `${date.year}-${date.month}-${date.day}`;
    }
    DMY() {
        const date = this.createDate();
        return { day: date.day, month: date.month, year: date.year };
    }
    YMDHMS() {
        const date = this.createDate();
        return `${date.year}-${date.month}-${date.day} || ${date.hours}:${date.minutes}:${date.seconds}`;
    }
};
exports.DateManipulator = DateManipulator = __decorate([
    (0, common_1.Injectable)()
], DateManipulator);
//# sourceMappingURL=date.js.map