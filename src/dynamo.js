const { RemovalPolicy } = require('aws-cdk-lib');
const { AttributeType, BillingMode, Table } = require('aws-cdk-lib/aws-dynamodb');

module.exports = {
    createDynamoTable: (scope) => {
        const table = new Table(scope, 'Books', {
            billingMode: BillingMode.PROVISIONED,
            partitionKey: { name: 'bookId', type: AttributeType.NUMBER },
            pointInTimeRecovery: true,
            readCapacity: 5,
            removalPolicy: RemovalPolicy.DESTROY,
            sortKey: { name: 'authorId', type: AttributeType.NUMBER },
            writeCapacity: 5
        });

        table.addGlobalSecondaryIndex({
            indexName: 'publisherIndex',
            partitionKey: { name: 'publisherId', type: AttributeType.NUMBER },
            sortKey: { name: 'bookId', type: AttributeType.NUMBER }
        });

        return table;
    }
}