import express from "express";
import { deleteuser, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/test', test);
router.put('/update/:userId', verifyToken , updateUser);
router.delete('/delete/:userId', verifyToken, deleteuser);

export default router;