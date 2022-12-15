import Koa from 'koa'
import json from 'koa-json'
import { koaBody } from 'koa-body'
import cors from '@koa/cors'

import api from './api'


const app = new Koa()

app.use(json())
app.use(cors())
app.use(koaBody())

app.use(api.routes())

app.listen(8000)