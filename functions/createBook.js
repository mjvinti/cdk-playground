const dynamodb = require('aws-sdk/clients/dynamodb');

const db = new dynamodb.DocumentClient();
const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
    if (!event.body) {
        return { statusCode: 400, body: 'invalid request, you are missing the request body.' }
    }

    const {
        authorId,
        bookId,
        title,
        genre,
        firstName,
        lastName,
        publisherId,
        publisherName,
        publisherAddress
    } = JSON.parse(event.body);
    const Item = {
        authorId,
        bookId,
        publisherId,
        Author: { authorId, firstName, lastName },
        Book: { bookId, title, genre },
        Publisher: { publisherId, publisherName, publisherAddress }
    };
    const params = { TableName: tableName, Item };

    try {
        const result = await db.put(params).promise();
        return { statusCode: 201, body: JSON.stringify(result) };
    } catch (err) {
        return { statusCode: 500, body: err };
    }
}