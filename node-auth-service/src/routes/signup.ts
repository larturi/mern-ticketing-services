import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').trim().isLength({ min: 6, max: 20 })
    .withMessage('Password must to be 6 to 20 characters'),
], 
(req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new Error('Invalid email or password')
    }

    const { email, password } = req.body;

    console.log('Creating user...');

    res.send({
        email,
        password
    });
})

export { router as signUpRouter }