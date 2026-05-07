import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.createUserIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(httpStatus.BAD_REQUEST).json({
      error: "User creation failed",
      details: e,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.loginUserIntoDB(req.body);
    res.cookie("token", result.token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Login successfully",
      data: result,
    });
  } catch (e: any) {
    res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: e.message || "User Login failed",
      error: e,
    });
  }
};

const getMe = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const result = await AuthService.getMeFromDB(userId);

    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: "User not found",
        data: null,
      });
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User profile retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

const updateMe = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { name, avatar, phone, location } = req.body;

    const result = await AuthService.updateMeInDB(userId, {
      name,
      avatar,
      phone,
      location,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Profile updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

const socialLogin = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.socialLoginIntoDB(req.body);
    res.cookie("token", result.token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Social Login successfully",
      data: result,
    });
  } catch (e: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: e.message || "Social Login failed",
      error: e,
    });
  }
};

export const AuthController = {
  createUser,
  loginUser,
  socialLogin,
  getMe,
  updateMe,
};


