import  express  from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';
import { errorhandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use(
    cookieSession({ 
        signed: false,
        secure: true,
    })
);

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorhandler);

const start = async () => {

    if(!process.env.JWT_KEY) {
        throw new Error('JWT_KEY environment must be defined')
    }

    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log(error);
    }
}

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})

start();