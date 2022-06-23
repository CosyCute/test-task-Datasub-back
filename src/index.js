import express from 'express'
import mongoose from 'mongoose'
import Payment from "./Payment.js";
import cors from 'cors'

const DB_URL = `mongodb+srv://user:user@cluster0.wvglp.mongodb.net/?retryWrites=true&w=majority`
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json("Приложение работает")
})

app.post('/', async (req, res) => {
    const {CardNumber, ExpDate, Cvv, Amount} = req.body
    const payment = await Payment.create({CardNumber, ExpDate, Cvv, Amount})
    res.status(200).json({RequestId: payment.id, Amount: payment.Amount})
})


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(process.env.PORT || 5000)
    } catch (error) {
        console.log(error)
    }
}

startApp()

