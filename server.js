const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' }); // Set your region
const dynamodb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
