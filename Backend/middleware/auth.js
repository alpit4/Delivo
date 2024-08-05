import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.json({
      success: false,
      message: "Login Again, Not Authorized.",
    });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.json({
      success: false,
      message: "Login Again, Not Authorized.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.log("Error verifying token:", error);
    res.json({ success: false, message: "Error verifying token" });
  }
};

export default authMiddleware;
