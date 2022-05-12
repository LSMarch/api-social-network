const {Schema, model} = require('mongoose')

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            //default: 
        },
        reactionBody: {
            type: String,
            required: true,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        timestamps: true
    }
)

module.exports = reactionSchema