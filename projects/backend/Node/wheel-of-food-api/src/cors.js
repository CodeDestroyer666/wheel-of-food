const whitelist = [
    'http://localhost:3001',
    'https://react.wheeloffood.codedestroyer666.dev',
    'https://angular.wheeloffood.codedestroyer666.dev',
    'https://vue.wheeloffood.codedestroyer666.dev',
    'https://ember.wheeloffood.codedestroyer666.dev',
];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }

    }
}

module.exports = corsOptions;