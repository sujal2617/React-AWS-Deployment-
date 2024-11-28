const UserModel = require('../models/userModel');
const AWS = require('aws-sdk');

// Set your region first
AWS.config.update({ region: 'us-east-1' });

// // Now, create DynamoDB and S3 clients
// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const s3 = new AWS.S3();

// UserController logic follows
const UserController = {
    getUser: async (req, res) => {
        try {
            const data = await UserModel.getUserById(req.params.userId);
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    createUser: async (req, res) => {
        try {
            const userData = req.body;
            await UserModel.createUser(userData);
            res.status(201).json({ message: "User created successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    updateUser: async (req, res) => {
        try {
            const userId = req.params.userId;
            const userData = req.body;
            await UserModel.updateUser(userId, userData);
            res.status(200).json({ message: "User updated successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const userId = req.params.userId;
            await UserModel.deleteUser(userId);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = UserController;
