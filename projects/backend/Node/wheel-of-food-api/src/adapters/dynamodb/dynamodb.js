import AWS from 'aws-sdk';

const ddbParams = {
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_API_KEY,
        secretAccessKey: process.env.AWS_API_SECRET
    }
}

if (process.env.AWS_DYNAMODB_ENDPOINT) {
    ddbParams.endpoint = process.env.AWS_DYNAMODB_ENDPOINT;
}

var ddb = new AWS.DynamoDB(ddbParams);

export default function ddbTest() {
    const testParams = {
        TableName: 'Rental'
    }

    ddb.scan(testParams, function (err, data) {
        if (err) {
            console.log('Error', err);
        } else {
            console.log("Success", data.Items);
            data.Items.forEach(function (element, index, array) {
                console.log(element.Title.S + " (" + element.City.S + ")");
            });
        }
    });
}
