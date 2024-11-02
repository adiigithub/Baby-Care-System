const express=require('express')
const Router=require('./routes/authRoutes')
const productRouter=require('./routes/productsRoutes')
const cors = require('cors')

const app = express()
const port = 4000;


app.use(express.json())
app.use(cors())


//routes
app.use('/auth',Router)
app.use('/api',productRouter)


//listen
app.listen(port,()=>{
    console.log('server run successfull')
})
