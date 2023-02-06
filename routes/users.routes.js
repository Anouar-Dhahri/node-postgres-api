import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/users.controller.js'

export const router = express.Router();

router.get( '/get', getUsers )
router.get( '/get/:id', getUserById )
router.post( '/post', createUser )
router.put( '/update', updateUser )
router.delete( '/delete', deleteUser )