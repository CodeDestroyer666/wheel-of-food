const express = require('express');
const cors = require('cors');
const api = require('./api');
const corsOptions = require('./cors');

const app = express();

app.use(cors(corsOptions));
app.use('/', api);

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
    app.listen(80, function () {
        console.log('CORS-enabled web server listening on port 80')
    })
    module.exports = app;
}

