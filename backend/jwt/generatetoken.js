import jwt from "jsonwebtoken";

const createtokenandsavecookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10h"
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};
export default createtokenandsavecookie;