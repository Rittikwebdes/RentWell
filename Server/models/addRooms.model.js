import express from "express";
import mongoose from "mongoose";
const roomsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required:true
    },
    address: {
      type: String,
      required:true
    },
    furnishing: {
      type: String,
      required:true
    },
    parking: {
      type: String,
      required:true
    },
    facing: {
      type: String,
      required:true
    },
    area: {
      type: String,
      required:true
    },
    ownerName: {
      type: String,
      required:true
    },
    ownerNumber: {
      type: Number,
      required:true
    },
  },
  { timestamps: true }
);

export const Rooms = mongoose.model("Rooms", roomsSchema);
