const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://harshakabari7:x0gDKZA3G3wevUNx@cluster0.ecvawhm.mongodb.net/news", {
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

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    code: Number,
    expireIn: Number
},
    {
        timestamps: true
    }
);

exports.Otp = new mongoose.model("Otp", otpSchema);
