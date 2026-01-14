import { Request, Response } from "express";
import {User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt,{ JwtPayload } from "jsonwebtoken";

const generateAccessToken = (user:any)=>{
  return jwt.sign({
        id:user?._id,
        email:user?.email,
    },process.env.JWT_SECRET!, {
      expiresIn: "15m" // short lifespan
    })
}


const generateRefreshToken = (user: any) => {
  return jwt.sign({
        id:user?._id,
        email:user?.email,
    },process.env.JWT_SECRET!, {
      expiresIn: "7d" // long lifespan
    })
};

 //Login Endpoint 
// This endpoint allows users to log in and receive access and refresh tokens.
export const login = async (req: Request, res: Response) => {
    if (!req.body?.email || !req.body?.password) {
    return res.status(400).json({
      status: false,
      message: "Email and password are required",
    });
  }
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).populate("roleId");
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.roleId?.name !== "SUPER_ADMIN") {
      return res.status(403).json({
        status: false,
        message: "Access denied. Only SUPER_ADMIN can login.",
      });
    }

     // Generate both tokens
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return res.json({
      status: true,
      message: "Login successful",
      tokens:{
        access: accessToken,
        refresh: refreshToken,
      },
      user: {
        id: user._id,
        email: user.email,
        role: user.roleId?.name,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
}

//Refresh Token Endpoint  
// This endpoint allows users to refresh their access token using a valid refresh token.

export const refresh = async (req: Request, res: Response) => {
  try {
    // 1) Get refresh token (from body for now; cookies later)
    const { refreshToken } = req.body || {};
    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token is required" });
    }

    // 2) Verify refresh token signature & expiry
    let decoded: JwtPayload;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!) as JwtPayload;
    } catch (err: any) {
      if (err?.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Refresh token expired" });
      }
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    // 3) Ensure the user still exists (and optionally still allowed)
    const user = await User.findById(decoded.id).populate("roleId");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 4) Issue a NEW access token
    const newAccessToken = generateAccessToken(user);

    // (Simple version) keep the same refresh token
    // (Advanced version) rotate and issue a NEW refresh token here

    return res.json({
      status: true,
      message: "Access token refreshed",
      tokens: {
        access: newAccessToken,
        refresh: refreshToken, // same one; we can rotate later
      },
      user: {
        id: user._id,
        email: user.email,
        role: user.roleId?.name,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error instanceof Error ? error.message : "Internal server error" });
  }
};
