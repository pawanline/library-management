const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatController');

router.get('/', seatController.getAllSeats);
router.post('/', seatController.createSeat);
router.get('/:id', seatController.getSeatById);
router.put('/:id', seatController.updateSeat);
router.delete('/:id', seatController.deleteSeat);

module.exports = router;