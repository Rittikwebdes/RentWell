import { Rooms } from "../models/addRooms.model.js";

export const createRooms = async (req, res) => {
  const {
    title,
    description,
    price,

    location,
    address,
    furnishing,
    parking,
    facing,
    area,
    ownerName,
    ownerNumber,
  } = req.body;
  const imageUrls = req.files.map(file => file.path);
  try {
    const room = new Rooms({
      title,
      description,
      price,
      images: imageUrls,
      location,
      address,
      furnishing,
      parking,
      facing,
      area,
      ownerName,
      ownerNumber,
    });

    await room.save();
    res.status(201).json({ message: "Room created successfully", room });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create room" });
  }
};

export const findAllRooms = async (req, res) => {
  try {
    let rooms = await Rooms.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "here's your Rooms", rooms });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getRoomsById = async (req, res) => {
  try {
    const id = req.params.id;
    let room = await Rooms.findById(id);
    if (!room) return res.status(404).json({ message: "invalid id" });
    res.status(200).json({ message: "here's your Room", room });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
