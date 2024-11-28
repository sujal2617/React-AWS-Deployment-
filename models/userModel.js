const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const UserModel = {
    getUserById: async (userId) =>
    {
        const params = { TableName: 'Users', Key: { userId: userId }
        };
        return dynamodb.get(params).promise();
    },
    createUser: async (userData) =>
    {
        const params = { TableName: 'Users', Item: userData };
        return dynamodb.put(params).promise();
    },
    updateUser: async (userId, userData) =>
    { const params = { TableName: 'Users', Key: { userId: userId }, UpdateExpression: "set name = :name, email = :email", ExpressionAttributeValues:
            {
                ":name": userData.name, ":email": userData.email }
    };
        return dynamodb.update(params).promise();
    },
    deleteUser: async (userId) =>
    {
        const params =
            {
                TableName: 'Users', Key: { userId: userId }
            };
        return dynamodb.delete(params).promise(); }
};
module.exports = UserModel;