const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/StudentDB';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(url, options)
    .then(() => {
        console.log("Connection successful");
    })
    .catch((e) => {
        console.error("Error in connection:", e.message);
    });
