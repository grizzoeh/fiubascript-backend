import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';
import swaggerDocs from './utils/swagger';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
const port = parseInt(process.env.PORT || '3001', 10);

server.listen(port, () => {
    console.log('Server listening on port ' + port);
    swaggerDocs(app, port);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('error', (error:Error) => console.log(error));

app.use('/', router());