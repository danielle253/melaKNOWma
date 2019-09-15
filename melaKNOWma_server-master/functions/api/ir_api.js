let _ = require('lodash');
let math = require('mathjs');

// DB CALL
// const snapshot = await admin.database().ref('/messages').push({original: original});

// Perform processing of raw data
function process_raw (body) {
    // Perform all the processing of the raw data in this method
    let matrices = body.matrices;

    // Take the averages of each column
    // let a = math.mean(matrix, 1);
    return matrices
}

module.exports = {
    get_latest_data: getLatestdata,
    process_raw: process_raw
};