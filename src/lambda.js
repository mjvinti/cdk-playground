const { Function, Runtime, Code } = require('aws-cdk-lib/aws-lambda');

module.exports = {
    createBookFunction: (scope, dynamoTable) => new Function(scope, 'createBook', {
        code: Code.fromAsset('functions'),
        handler: 'createBook.handler',
        environment: { PRIMARY_KEY: 'bookId', TABLE_NAME: dynamoTable.tableName },
        runtime: Runtime.NODEJS_16_X
    }),

    getAllBooksFunction: (scope, dynamoTable) => new Function(scope, 'getAllBooks', {
        code: Code.fromAsset('functions'),
        handler: 'getAllBooks.handler',
        environment: { PRIMARY_KEY: 'bookId', TABLE_NAME: dynamoTable.tableName },
        runtime: Runtime.NODEJS_16_X
    })
}