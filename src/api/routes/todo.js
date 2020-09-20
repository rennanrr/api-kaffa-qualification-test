import express from 'express';
import Ctrl from '../controllers/todo';

const router = express.Router();

    router.route('/todo')
        .get(Ctrl.findByQuery)
        
        .post(Ctrl.create)

        .put(Ctrl.update)
        
        .delete(Ctrl.delete);

export default router;
