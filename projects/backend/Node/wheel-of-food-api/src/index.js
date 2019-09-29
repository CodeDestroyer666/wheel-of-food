import 'dotenv/config';
const express = require('express');
const cors = require('cors');
const compression = require('compression');

const api = require('./api');
const corsOptions = require('./cors');


const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(cors(corsOptions));
} else {
    app.use(cors());
}

app.use('/api/v1', api);

const isInLambda = !!process.env.LAMBDA_TASK_ROOT;
if (isInLambda) {
    const serverlessExpress = require('aws-serverless-express');
    const server = serverlessExpress.createServer(app);
    exports.main = (event, context) => {
        if (event.path.startsWith('/v1')) {
            event.path = event.path.slice(3);
        }
        serverlessExpress.proxy(server, event, context);
    }
} else {
    // Cannot use compression with aws-serverless-express. Causes ERR_CONTENT_DECODING_FAILED
    // TODO: Fix solution later
    app.use(compression());
    module.exports = app;
}

