import express from 'express';
import Logger from '#/utils/Logger';

const router = express.Router();

router.get('/api/getTest', (req:express.Request, res:express.Response) => {
    Logger.info(req.query);
    res.send(
        [
            {
                id:1,
                name:'device1'
            },
            {
                id:2,
                name:'device2'
            }

        ]
    );
});
router.post('/api/postTest', (req:express.Request, res:express.Response) => {
    res.send(req.body);
});

export {router as default};
