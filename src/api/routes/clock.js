import express from 'express';
import Ctrl from '../controllers/clock';

const router = express.Router();
    router.route('/date/localserver').get(Ctrl.serverDate);

    router.route('/date/externalapi').get(Ctrl.externalDate);

export default router;
