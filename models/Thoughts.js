const {Schema, model} = require('mongoose');
const Reactions = require('./Reactions');
//const { stringify } = require('querystring')

const thoughtSchema = new Schema (
    {
        username: {
            type: String,
            required: true,             
        },
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
        reactions: [Reactions]                        
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,    
    }
)

thoughtSchema.virtual('reactionCount').
    get(function(v) {
        return this.reactions.length;
    });

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;