import express from 'express';
import Logger from '#/utils/Logger';

const PORT_NUMBER = 80;

// TODO:Configを使う方法
// const configFilePath = Path.join(__dirname,'config');
// const configure = Config.util.loadFileConfigs(configFilePath).log4js;
// const configure = Config.get<Log4js.Configuration>('log4js');
// Log4js.configure(configure);

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
const router: express.Router = express.Router();
router.get('/api/getTest', (req:express.Request, res:express.Response) => {
    Logger.info(req);
    res.send(req.query);
});
router.post('/api/postTest', (req:express.Request, res:express.Response) => {
    res.send(req.body);
});
app.use(router);

// 80番ポートでAPIサーバ起動
app.listen(PORT_NUMBER, ()=>{ 
    Logger.info(`Example app listening on port ${PORT_NUMBER}!`); 
});
