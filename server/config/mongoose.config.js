const mongoose = require("mongoose")

// this line enables validators to run on update
mongoose.set("runValidators", true);

mongoose.connect("mongodb://localhost/authorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("There was an error", err))