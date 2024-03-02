const mongoose = require("mongoose");
mongoose.createConnection("mongodb+srv://harshakabari7:x0gDKZA3G3wevUNx@cluster0.ecvawhm.mongodb.net/NewsAppDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// console.log(process.env.DATABASE_PASS);

var db = mongoose.connection;
try {
    db.on("error", console.error.bind(console, "Connecton error"));
    db.once("open", function () {
        console.log("mongoDB connected");
    });
} catch (err) {
    console.log(err);
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {
        type: String,
        minLength: 8,
        required: [true, "User password required"],
    },
});
exports.User = new mongoose.model("User", userSchema);
