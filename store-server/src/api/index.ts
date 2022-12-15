import Router from "koa-router"
import category from './category'

const router = new Router()
router.get('/api/greet', async ctx => {
    ctx.body = {msg: 'Hello World!'}
})

router.use('/api/category', category.routes())

export default router