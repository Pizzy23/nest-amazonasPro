"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfVeri = void 0;
const common_1 = require("@nestjs/common");
let CpfVeri = exports.CpfVeri = class CpfVeri {
    cpfLength(cpf) {
        if (cpf.length === 11) {
            return true;
        }
        return false;
    }
    separator(cpf) {
        return cpf.split('');
    }
    digit(cpf) {
        const separatedCpf = this.separator(cpf);
        this.firstDigit = parseInt(separatedCpf[9]);
        this.secondDigit = parseInt(separatedCpf[10]);
    }
    Accumulator(cpf, index, finalIndex) {
        const separatedCpf = this.separator(cpf);
        let accumulator = 0;
        for (let i = 0; i >= 0; i++) {
            accumulator += separatedCpf[i] * index;
            index--;
            if (i == finalIndex) {
                break;
            }
        }
        return accumulator;
    }
    result(cpf) {
        const accP = this.Accumulator(cpf, 10, 8);
        const calculationP = (accP * 10) % 11;
        this.totalP = calculationP === 10 ? 0 : calculationP;
        const accS = this.Accumulator(cpf, 11, 9);
        const calculationS = (accS * 10) % 11;
        this.totalS = calculationS === 10 ? 0 : calculationS;
    }
    verify(cpf) {
        if (this.cpfLength(cpf)) {
            this.digit(cpf);
            this.result(cpf);
            if (this.totalP === this.firstDigit &&
                this.totalS === this.secondDigit) {
                return true;
            }
        }
        return false;
    }
};
exports.CpfVeri = CpfVeri = __decorate([
    (0, common_1.Injectable)()
], CpfVeri);
//# sourceMappingURL=cpf.js.map