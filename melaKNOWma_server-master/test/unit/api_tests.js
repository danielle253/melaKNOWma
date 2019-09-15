let api = require('../../functions/api/ir_api');
let mocks = require('../mock/mock_matrices');

mock_matrix = mocks.gen_mock_matrix(10,20);
let stats = api.process_raw({}, { matrix: mock_matrix});
console.log(stats);