const { Schema } = require('mongoose');

// Schema to create Student model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Schema.Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date, default: Date.now
        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = reactionSchema;