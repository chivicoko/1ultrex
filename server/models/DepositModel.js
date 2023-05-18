const mongoose = require('mongoose');

const depositSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        // text: { type: String, require: true },
        depositeAmount: {type: Number},
        cryptoCurrency: {type: String, required: true}
    },
    { timestamps: true }
)

const DepositModel = mongoose.model('Deposit', depositSchema);

module.exports = DepositModel;