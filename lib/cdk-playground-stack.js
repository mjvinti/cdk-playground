const { Stack } = require('aws-cdk-lib');
const { LambdaIntegration } = require('aws-cdk-lib/aws-apigateway');

const { addCorsOptions, createApi } = require('../src/api');
const { createDynamoTable } = require('../src/dynamo');
const { getAllBooksFunction, createBookFunction, getBookByIdFunction } = require('../src/lambda');

class CdkPlaygroundStack extends Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope, id, props) {
        super(scope, id, props);

        const dynamoTable = createDynamoTable(this);

        // lambdas
        const createBook = createBookFunction(this, dynamoTable);
        const getAllBooks = getAllBooksFunction(this, dynamoTable);

        // grant the Lambda function read access to the DynamoDB table
        dynamoTable.grantReadWriteData(createBook);
        dynamoTable.grantReadWriteData(getAllBooks);

        // create the api gateway resources
        const api = createApi(this);
        
        const books = api.root.addResource('books');
        books.addMethod('GET', new LambdaIntegration(getAllBooks));
        books.addMethod('POST', new LambdaIntegration(createBook));
        addCorsOptions(books);
    }
}

module.exports = { CdkPlaygroundStack }
