import AWS from 'aws-sdk';

import { Rental } from '../../models';

function constructModel(modelClass, item) {
    const model = new modelClass;
    switch (modelClass) {
        case Rental:
            model.id = item.Id.S;
            model.attributes = {
                title: item.Title.S,
                city: item.City.S,
                owner: item.Owner.S,
                category: item.Category.S,
                bedrooms: item.Bedrooms.N,
                image: item.Image.S,
                description: item.Description.S,
            };
            break;
    }

    return model;
}

export default class DynamoDbAdapter {
    constructor() {

        const ddbParams = {
            region: 'us-east-1',
            credentials: {
                accessKeyId: process.env.AWS_API_KEY,
                secretAccessKey: process.env.AWS_API_SECRET
            }
        };
        if (process.env.AWS_DYNAMODB_ENDPOINT) {
            ddbParams.endpoint = process.env.AWS_DYNAMODB_ENDPOINT;
        }

        this.ddb = new AWS.DynamoDB(ddbParams);
    }

    async getItems(model) {
        const params = {
            TableName: model.name
        };
        const items = new Array;

        await this.ddb.scan(params, function (err, data) {
            if (err) {
                console.log('Error', err);
            } else {
                // console.log("Success", data.Items);
                data.Items.forEach(function (item) {
                    items.push(constructModel(model, item));
                });
            }
        }).promise();

        return items;
    }

    async getItem(model, id) {
        const params = {
            TableName: model.name,
            Key: {
                Id: { 'S': id }
            }
        };

        let item = null;

        await this.ddb.getItem(params, function (err, data) {
            if (err) {
                console.log('Error', err);
            } else {
                // console.log("Success", data.Items);
                item = constructModel(model, data.Item);
            }
        }).promise();

        return item;
    }
}
