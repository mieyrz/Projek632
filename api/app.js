const express = require('express')
const cors = require('cors');
const app= express()
const port = process.env.PORT || 3000
require("./DBConnection/conn")
const userRoute = require("./Routers/userRouter")

app.use(express.json())
app.use(cors())
app.use(userRoute)







app.listen(port, () =>{
console.log(`connection is setup at port ${port}` )
})

const attachRoute = require('./Routers/attachRoute');
app.use('/attachment',attachRoute);

const projectRoute = require('./Routers/projectRoute');
app.use('/project',projectRoute);

const taskRoute = require('./Routers/taskRoute');
app.use('/task',taskRoute);

  const userRouter = require('./Routers/userRouter');
app.use('/user',userRouter);

