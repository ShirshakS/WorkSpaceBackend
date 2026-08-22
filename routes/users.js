import { Router } from 'express';
import { getUsers } from '../controllers/users.js';

const userrouter = Router();
userrouter.get('/', getUsers);

export default userrouter;
