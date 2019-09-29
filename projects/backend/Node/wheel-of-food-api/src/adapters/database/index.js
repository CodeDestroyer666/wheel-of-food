import DynamoDbAdapter from './dynamodb';

const adapterMapping = {
    dynamodb: DynamoDbAdapter
};

var dbAdabter = null;

if (!dbAdabter) {
    dbAdabter = new adapterMapping[process.env.DATABASE_SOLUTION.toLowerCase()];
}

export default dbAdabter;
