import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    return res.send('SignIn')
})

export { router as signInRouter }