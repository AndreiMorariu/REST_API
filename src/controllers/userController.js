import mongoose from "mongoose";
import User from "../models/userModel.js";

const getUsers = async (req, res) => {
  res.send("getUsers");
};
const getUser = async (req, res) => {
  res.send("getUser");
};
const deleteUser = async (req, res) => {
  res.send("deleteUser");
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};
const createUser = async (req, res) => {
  res.send("createUser");
};

export { getUser, getUsers, deleteUser, updateUser, createUser };
