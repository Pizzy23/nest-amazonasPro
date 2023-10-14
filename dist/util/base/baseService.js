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
exports.BaseService = void 0;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const EmailValidator = require("email-validator");
const nodemailer = require("nodemailer");
const common_1 = require("@nestjs/common");
let BaseService = exports.BaseService = class BaseService {
    constructor() { }
    async encrypt(password) {
        const encry = await bcrypt.hash(password, saltRounds);
        return encry;
    }
    checkPassword(password, confirmPassword) {
        const regexUppercase = /[A-Z]/;
        const regexSpecialSymbol = /[^a-zA-Z0-9]/;
        if (password == confirmPassword &&
            password.length >= 8 &&
            regexUppercase.test(password) &&
            regexSpecialSymbol.test(password)) {
            return true;
        }
        return false;
    }
    async compare(passaword, hash) {
        const compare = await bcrypt.compare(passaword, hash);
        return compare;
    }
    emailValidate(email) {
        const valide = EmailValidator.validate(email);
        if (valide)
            return true;
        if (!valide)
            return false;
        return false;
    }
    tokenGenerator() {
        const length = 6;
        const characters = '0123456789';
        let token = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }
        return token;
    }
    sendMail(email, txt, subject) {
        const configMail = this.configMail();
        const mailOptions = {
            from: configMail.sender.email,
            to: email,
            subject: subject,
            text: txt,
        };
        configMail.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error(error);
            }
        });
        return { response: 'Email Enviado' };
    }
    supportEmail(email, txt, subject) {
        const configMail = this.configMail();
        const mailOptions = {
            from: configMail.sender.email,
            to: process.env.EMAIL,
            subject: subject,
            text: txt,
        };
        configMail.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error(error);
            }
        });
        return { response: 'Email Enviado' };
    }
    configMail() {
        const sender = {
            email: process.env.EMAILSUPPORT,
            password: process.env.PASSWORD,
        };
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: sender.email,
                pass: sender.password,
            },
        });
        return { sender: sender, transporter: transporter };
    }
};
exports.BaseService = BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BaseService);
//# sourceMappingURL=baseService.js.map