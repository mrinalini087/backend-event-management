const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  reserveSeat,
} = require("../controllers/eventController");

const router = express.Router();

router.route("/").get(getEvents).post(protect, createEvent);

router
  .route("/:id")
  .get(getEventById)
  .put(protect, updateEvent)
  .delete(protect, deleteEvent);

router.post("/:id/reserve", protect, reserveSeat);

module.exports = router;
