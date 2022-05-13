const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reactions');
//const { stringify } = require('querystring')

const thoughtSchema = new Schema (
    {
        username: String,
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        //timestamps: true,
        //username: String,
        // double check this 
        reactions: [reactionSchema]
            
    }
)

thoughtSchema.virtual('reactionCount').
    get(function(v) {
        return this.reactions.length;
    });

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;