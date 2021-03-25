const twit = require("twit");
const businesses = require("./lists/businesses");
const hobbies = require("./lists/hobbies");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const config = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
};

const T = new twit(config);

const businessList = businesses.list;
const hobbyList = hobbies.list;

function random(arr) {
    const randomEle =
        arr[Math.min(Math.floor(Math.random() * arr.length), arr.length - 1)];
    return randomEle;
}

function tweet() {
    const msg = `It's like ${random(businessList)}, but for ${random(
        hobbyList
    )}.`;
    T.post("statuses/update", { status: msg }, function (err, data, response) {
        // if (err) {
        //     console.log(err);
        // }
        // console.log(data);
        // console.log(response);
    });
}

// Run once a day
setInterval(function () {
    tweet();
}, 1000 * 60 * 60 * 24 * 1);
// }, 1000 * 60);

// tweet();
