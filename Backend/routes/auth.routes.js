import express from 'express';
import { Register } from '../controllers/auth.controllers.js';
import { body } from 'express-validator';

const router = express.Router();

router.post("/register", [
    body('password').trim().escape(),
], Register);

export default router;