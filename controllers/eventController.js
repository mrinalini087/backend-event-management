const Event = require("../models/Event");

exports.createEvent = async (req, res, next) => {
  try {
    const { name, description, date, capacity } = req.body;

    const event = new Event({
      name,
      description,
      date,
      capacity,
      seatsAvailable: capacity,
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};

exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find({}, "name description date capacity");

    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

exports.getEventById = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

exports.updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    next(error);
  }
};

exports.reserveSeat = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (event.seatsAvailable > 0) {
      event.seatsAvailable -= 1;
      await event.save();
      res.status(200).json({ message: "Seat reserved", event });
    } else {
      res.status(400).json({ message: "No seats available" });
    }
  } catch (error) {
    next(error);
  }
};
