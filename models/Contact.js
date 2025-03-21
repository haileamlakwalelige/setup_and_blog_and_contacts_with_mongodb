import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true, // Fixed "require" to "required"
    },
    email: {
        type: String,
        required: true, // Fixed typo
    },
    message: {
        type: String,
        required: true, // Fixed typo
    }
});

export default mongoose.model("Contact", contactSchema);
