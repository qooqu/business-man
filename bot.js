const twit = require("twit");
const config = require("./config");
const businesses = require("./lists/businesses");
const hobbies = require("./lists/hobbies");
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

// Run every 3 days
setInterval(function () {
    tweet();
    // }, 1000 * 60 * 60 * 24 * 3);
}, 1000 * 60);

// tweet();
