const {Schema, model} = require('mongoose')

// Schema for Users model
const userSchema = new Schema (
    {
        username: {
            type: String, //need to #trim() somehow,
            required: true, 
            // in create route? $trim: { input: '$username'},
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                },
                message: props => `${props.value} is not a valid email`
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

userSchema.
    virtual('friendCount').
        get(function(v) {
        return this.friends.length;
        });


const Users = model('users', userSchema);

db.users.aggregate([
    
])

module.exports = Users;


