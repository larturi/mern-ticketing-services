import  express  from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';
import { errorhandler } from './middlewares/error-handler';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.use(errorhandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})
