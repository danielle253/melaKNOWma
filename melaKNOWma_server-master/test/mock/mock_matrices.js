let _ = require('lodash');

generate_mock_matrix = (min, max) => {
    let mock_matrix = [];
    for (let i = 0; i < 8; i++) {
        let row = [];
        for (let j = 0; j < 8; j++) {
            let num = (Math.random() * (max - min + 1) + min).toFixed(2);
            row.push(parseFloat(num));
        }
        mock_matrix.push(row);
    }
    return mock_matrix;
};

module.exports = {
    gen_mock_matrix: generate_mock_matrix
};