import express from 'express';
import Logger from '#/utils/Logger';
import { router } from '#/router';

const PORT_NUMBER = 8080;
const app: express.Express = express();

// CORSの許可
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// body-parserに基づいた着信リクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GetとPostのルーティング
app.use(router);

// 80番ポートでAPIサーバ起動
app.listen(PORT_NUMBER, ()=>{ 
    Logger.info(`Example app listening on port ${PORT_NUMBER}!`); 
});
