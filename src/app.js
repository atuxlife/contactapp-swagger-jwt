import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './swaggerOptions';

import dotenv from 'dotenv';
dotenv.config();

import { createUsers } from './libs/initialSetup';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express();
createUsers();

app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});

const specs = swaggerJsDoc(options);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;