"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableSwaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
const enableSwaggerConfig = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('ConformeTec')
        .setDescription('Site')
        .setVersion('0.1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
};
exports.enableSwaggerConfig = enableSwaggerConfig;
//# sourceMappingURL=enable-swagger.config.js.map