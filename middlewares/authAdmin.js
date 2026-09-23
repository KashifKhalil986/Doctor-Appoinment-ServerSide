import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const aToken = req.headers.authorization?.split(" ")[1];
    if (!aToken) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    jwt.verify(aToken, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authAdmin;
