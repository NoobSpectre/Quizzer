import { encryptPassword } from "@/lib/utils";
import { SuccessResponse, SuccessResponseWithUserId } from "@/types";
import { NextFunction, Request, Response } from "express";
import { InsertOneResult } from "mongodb";
import { User, Users } from "./model";
import { UsernameParams } from "./routes";

export const getUser = async (
  req: Request<UsernameParams, SuccessResponseWithUserId>,
  res: Response<SuccessResponseWithUserId>,
  next: NextFunction
) => {
  const {
    params: { username },
  } = req;

  try {
    // check if user already exists
    const user = await Users.findOne({ username });

    if (user === null) {
      res.status(404);
      throw new Error("User not found!");
    }

    const { password, ...userWithoutPassword } = user;

    res.json({
      success: true,
      message: ["User retrieved successfully!"],
      data: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request<{}, SuccessResponse<InsertOneResult<User>>, User>,
  res: Response<SuccessResponse<InsertOneResult<User>>>,
  next: NextFunction
) => {
  const { body } = req;

  try {
    // Check if user already exists
    const user = await Users.findOne({ username: body.username });

    if (user !== null) {
      res.status(409);
      throw new Error("User already exists!");
    }

    // encrypt user password
    const { hash, error } = await encryptPassword(body.password);

    if (error !== null) {
      res.status(500);
      throw new Error(error);
    }

    // Create user
    const insertedResult = await Users.insertOne({
      ...body,
      password: hash,
    });

    // if user creation failed
    if (!insertedResult.acknowledged) {
      res.status(500);
      throw new Error("Unable to create a new user!");
    }

    res.status(201).json({
      success: true,
      message: ["User created successfully!"],
      data: insertedResult,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request<UsernameParams, SuccessResponseWithUserId, User>,
  res: Response<SuccessResponseWithUserId>,
  next: NextFunction
) => {
  const {
    params: { username },
    body,
  } = req;

  try {
    // Check if user already exists
    const user = await Users.findOne({ username: body.username });

    if (user !== null) {
      res.status(409);
      throw new Error("User already exists!");
    }

    // Update user
    const updatedResult = await Users.findOneAndUpdate(
      { username },
      { $set: { ...body } },
      { returnDocument: "after" }
    );

    // if update failed
    if (updatedResult === null) {
      res.status(500);
      throw new Error("Failed to update user!");
    }

    const { password, ...userWithoutPassword } = updatedResult;

    res.status(201).json({
      success: true,
      message: ["User updated successfully!"],
      data: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request<UsernameParams, SuccessResponse, {}>,
  res: Response<SuccessResponse>,
  next: NextFunction
) => {
  const {
    params: { username },
  } = req;

  try {
    // Check if user exists
    const user = await Users.findOne({ username });

    if (user === null) {
      res.status(404);
      throw new Error("User not found!");
    }

    // Delete user
    const deletedResult = await Users.deleteOne({ username });

    // if deletion failed
    if (!deletedResult.acknowledged) {
      res.status(500);
      throw new Error("Failed to delete user!");
    }

    res.json({
      success: true,
      message: ["User deleted successfully!"],
    });
  } catch (error) {
    next(error);
  }
};
