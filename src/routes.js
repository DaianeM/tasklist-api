import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

routes.put('/users', authMiddleware, UserController.update);

routes.get('/tasks', authMiddleware, TaskController.index);

routes.post('/tasks', authMiddleware, TaskController.store);

routes.put('/tasks/:task_id', authMiddleware, TaskController.update);

routes.delete('/tasks/:task_id', authMiddleware, TaskController.delete);

export default routes;
