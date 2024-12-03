import User from '../models/user.model.js';
import { v4 as uuid } from 'uuid';
import { body } from 'express-validator';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { validationResult } from 'express-validator';



export const Register = (req, res) => {
    const {
        username,
        password,
        dob, number,
        email
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    };


    try {
        const userID = uuid();

        const salt = crypto.randomBytes(16).toString('hex');

        const cryptoHash = crypto.createHmac('sha256', salt).update(password).digset('hex');

        const hash = bcrypt.hash(cryptoHash, 15);

        const user = new User({
            username,
            userID,
            name,
            hash,
            salt,
            email,
            number,
            dob
        });

        const result = user.save();

        console.log("User Created Successfully!" + result);
    } catch (err) {
        res.status(500).json({
            massage: err,
            success: false,
        });
    };
};