import Router from "koa-router"
import category from './category'
import book from './book'

const router = new Router()
router.get('/api/greet', async ctx => {
    ctx.body = {msg: 'Hello World!'}
})

router.use('/api/category', category.routes())
router.use('/api/book', book.routes())

export default router