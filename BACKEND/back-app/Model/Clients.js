import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});

export default mongoose.model("Client", clientSchema)