import express from 'express';
import cors from 'cors';

import { connectDB } from '../db/config';

import routerError404 from '../routes/error404.routes';
import routerAuth from '../routes/auth.routes';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth: '/auth',
            give: '/give',
            want: '/want',
            error404: '*'
        };

        this.middlewares();
        this.dbConnect();
        this.routes();
        this.listen();
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token',
            ],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: '*',
            preflightContinue: false,
        }));
    };

    async dbConnect() {
        await connectDB();
    }

    routes() {
        this.app.use(this.path.auth, routerAuth);
        this.app.use(this.path.error404, routerError404);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    };
};

export default Server;