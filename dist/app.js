'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

// set input types
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

//set up morgan
app.use((0, _morgan2.default)('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

// set base endpoint
const generalPrefix = '/api/v1';
app.get(generalPrefix, (req, res) => {
    res.status(200).send({ status: 200, message: 'Welcome to clan api' });
});

app.use('*', (req, res) => res.status(404).send({
    status: 404,
    error: 'This route does not exist. You may navigate to the home route at api/v1'
}));

exports.default = app;
//# sourceMappingURL=app.js.map