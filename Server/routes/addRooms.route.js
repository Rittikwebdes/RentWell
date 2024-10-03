import express from "express";

import { createRooms, findAllRooms, getRoomsById } from "../controllers/addRooms.controller.js";
import { Authenticated } from "../Auth/isAuth.js";
import upload from "../config/multer.js";

const router = express.Router();


// Route for creating a room with multiple images
router.post('/rooms',  Authenticated, upload.array("images", 10)  , createRooms);
router.get("/allrooms", findAllRooms ) 
router.get("/singleroom/:id", getRoomsById ) 

export default router;