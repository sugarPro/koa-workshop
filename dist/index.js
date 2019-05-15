"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx, next) => {
    ctx.body = 'hello koa!!';
});
app.listen(3000);
//# sourceMappingURL=index.js.map