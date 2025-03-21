import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({  // ✅ Fixed: Use "new" keyword
    topTitle: {
        type: String,
        required: true
    },
    topDescription: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    date: {  // ✅ Changed "data" to "date"
        type: Date,
        default: Date.now  // ✅ Sets current timestamp by default
    }
});

export default mongoose.model("Blog", BlogSchema);
