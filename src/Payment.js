import mongoose from "mongoose";

const Payment = new mongoose.Schema({
    CardNumber: {type: Number, required: true},
    ExpDate: {type: String, required: true},
    Cvv: {type: Number, required: true},
    Amount: {type: Number, required: true}
})

export default mongoose.model('Payment', Payment)