import * as Koa from 'koa'
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'hello koa'
}) 

app.listen(3000)