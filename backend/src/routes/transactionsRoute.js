import express from "express"
import {createTransaction, deleteTransaction, getTransactionsByUserId, walletSummary} from "../controllers/transactionsController.js"

const router = express.Router();

router.get('/:userId',getTransactionsByUserId)

router.post('/',createTransaction)

router.delete('/:id',deleteTransaction)

router.get('/summary/:userId',walletSummary)


export default router;