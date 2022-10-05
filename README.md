# CDK Playground

This is a simple project for CDK development with JavaScript. I created it for the purpose of understanding / applying development within the AWS CDK framework

## RDB Models to Single DynamoDB Table

* Another goal of this simple project was take RDB models (example found in `src/RbdDataModel.sql`) and understand how to get the same value from a single DynamoDB model (my solution: `src/dynamo.js`)
* There are probably better ways to solve this, but this is my first real time working with and attempting to understand DynamoDB

## Useful commands

* `npm run test`         perform the jest unit tests
* `cdk deploy`           deploy this stack to your default AWS account/region
* `cdk diff`             compare deployed stack with current state
* `cdk synth`            emits the synthesized CloudFormation template
