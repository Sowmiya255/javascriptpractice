export const authorize = (roles) => {
  return (req, res, next) => {
    const userRole = req.body.role; 
    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  };
};
