const dynamodb = require('aws-sdk/clients/dynamodb');

const db = new dynamodb.DocumentClient();
const tableName = process.env.TABLE_NAME;

exports.handler = async () => {
    const params = { TableName: tableName };

    try {
        const { Items } = await db.scan(params).promise();
        return { statusCode: 200, body: JSON.stringify(Items) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify(err) };
    }
}